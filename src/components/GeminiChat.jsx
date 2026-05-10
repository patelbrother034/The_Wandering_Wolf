import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';
import ReactMarkdown from 'react-markdown';
import '../styles/GeminiChat.css';

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

export default function GeminiChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  
  // Initialize from localStorage or default
  const [messages, setMessages] = useState(() => {
    const saved = localStorage.getItem('wolf_guide_chat');
    return saved ? JSON.parse(saved) : [
      { role: 'bot', text: "Aaooouu! 🐺 I'm your Wolf Guide. Ready to plan your next escape? Ask me anything about our upcoming trips!" }
    ];
  });

  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem('wolf_guide_chat', JSON.stringify(messages));
  }, [messages]);


  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 400); // Wait for open animation
    }
  }, [isOpen]);

  const handleSend = async () => {
    if (!input.trim()) return;
    if (!API_KEY) {
      setMessages(prev => [...prev, { role: 'user', text: input }, { role: 'bot', text: "I'm ready to help, but I need an API key to wake up the Wolf Spirit! 🐺 Please add your key to the project." }]);
      setInput('');
      return;
    }

    const userMessage = { role: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    try {
      const genAI = new GoogleGenerativeAI(API_KEY);
      const model = genAI.getGenerativeModel({ 
        model: "gemini-1.5-flash",
        systemInstruction: "You are 'The Wolf Guide', the AI assistant for 'The Wandering Wolf' travel community. You are adventurous, helpful, and enthusiastic. Information about current trips: Saputara (₹4,999) - forests/lake/bonfire, Himachal (₹11,999) - hidden valleys/cafés, Kashmir (₹14,999) - houseboats/forests, Bali (₹24,999) - waterfalls/cafés/beach, Thailand (₹21,999) - island hopping/street food, Dubai (₹18,999) - desert sunsets/city lights. Host is Jay. Personality: tribe vibes, no tourist packages. Always be detailed and encouraging. Use markdown for lists and bold important points. Never mention being an AI, stay in character."
      });

      // Gemini requires the first message in history to be 'user'
      // We skip the initial static welcome bot message from the history
      const history = messages
        .filter((m, i) => i > 0)
        .map(m => ({
          role: m.role === 'user' ? 'user' : 'model',
          parts: [{ text: m.text }],
        }));

      const chat = model.startChat({ 
        history,
        generationConfig: {
          maxOutputTokens: 2048,
          temperature: 0.7,
        }
      });

      const result = await chat.sendMessage(input);
      const response = await result.response;
      const text = response.text();

      setMessages(prev => [...prev, { role: 'bot', text }]);
    } catch (error) {
      console.error("Gemini API Error Detail:", error);
      let errorMsg = "The connection to the pack is weak right now. Try again later! 🌪️";
      
      if (error.message?.includes('API_KEY_INVALID')) {
        errorMsg = "The Wolf's key seems invalid. Please check your API key! 🔑";
      } else if (error.message?.includes('quota')) {
        errorMsg = "We've howl-ed too much! The pack's quota is full for now. 🍖";
      } else {
        errorMsg = `Wolf Spirit Error: ${error.message || 'Unknown error'}`;
      }
      
      setMessages(prev => [...prev, { role: 'bot', text: errorMsg }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="chat-container">
      <div className={`chat-window ${isOpen ? 'open' : ''}`}>
        <div className="chat-header">
          <div className="chat-bubble" style={{ width: '40px', height: '40px', cursor: 'default', background: 'rgba(255,255,255,0.1)' }}>
            🐺
          </div>
          <div className="chat-header-info">
            <h3>Wolf Guide AI</h3>
            <span>Tribe Assistant</span>
          </div>
          <button 
            className="clear-chat-btn" 
            onClick={() => {
              if (window.confirm("Clear our pack's history? 🐾")) {
                setMessages([{ role: 'bot', text: "Aaooouu! 🐺 History cleared. Let's start fresh!" }]);
              }
            }}
            title="Clear Chat"
          >
            🗑️
          </button>
        </div>


        <div className="chat-messages">
          {messages.map((m, i) => (
            <div key={i} className={`message ${m.role}`}>
              {m.role === 'bot' ? (
                <ReactMarkdown>{m.text}</ReactMarkdown>
              ) : (
                m.text
              )}
            </div>
          ))}

          {isTyping && (
            <div className="message bot typing-indicator">
              <span></span>
              <span></span>
              <span></span>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>


        <div className="chat-input-area">
          <input 
            type="text" 
            ref={inputRef}
            className="chat-input" 
            placeholder="Ask the pack..." 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          />

          <button className="chat-send-btn" onClick={handleSend}>➔</button>
        </div>
      </div>

      {/* <div className="chat-bubble" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? '✕' : '🐺'}
      </div> */}

    </div>
  );
}
