import React from 'react';
import './App.css';

import Navbar from './components/Navbar';
import GlobeExpressHero from './components/GlobeExpressHero';
import About from './components/About';
import TripsSection from './components/TripsSection';
import WhyUs from './components/WhyUs';
import Testimonials from './components/Testimonials';
import PhotoReel from './components/PhotoReel';
import Itinerary from './components/Itinerary';
import LeadCapture from './components/LeadCapture';
import SocialProof from './components/SocialProof';
import CommunityBanner from './components/CommunityBanner';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

import CustomCursor from './components/CustomCursor';
import GeminiChat from './components/GeminiChat';
import ScrollReveal from './components/ScrollReveal';

function App() {
  return (
    <div className="app">
      <CustomCursor />
      <Navbar />

      <GlobeExpressHero />

      <ScrollReveal><About /></ScrollReveal>
      <ScrollReveal stagger={true}><TripsSection /></ScrollReveal>
      <ScrollReveal stagger={true}><WhyUs /></ScrollReveal>

      <ScrollReveal><Testimonials /></ScrollReveal>
      <ScrollReveal><PhotoReel /></ScrollReveal>
      <ScrollReveal><Itinerary /></ScrollReveal>
      <ScrollReveal><LeadCapture /></ScrollReveal>
      <ScrollReveal><CommunityBanner /></ScrollReveal>
      <Footer />
      <WhatsAppButton />
      {/* <GeminiChat /> */}
    </div>
  );
}



export default App;
