# AI Instructions & Rules

These rules must be followed at all times when working on this project.

## 1. Workspace Boundaries
- **ONLY** work in the `d:\3.0` directory.
- **NEVER** modify or read files from `d:\Travel` unless explicitly requested by the user.

## 2. UI & Design Integrity
- **Respect User Decisions**: If a component is commented out or hidden (e.g., the AI Chat icon), do NOT uncomment or enable it without permission.
- **Maintain Aesthetic**: Stay within the "Wandering Wolf" premium, glassmorphic design system.

## 3. Git Operations
- **NEVER** perform any git operations (commit, push, stash, reset, etc.) without explicit user confirmation.
- **STRICT COMMIT LIMITS**: Only commit the exact files/changes specified by the user. Never add "helper" files, project structure, or configuration files even if they are required for a build to succeed, unless the user explicitly names them for that commit.
- **BUILD FAILURES**: If a process (like Vercel build) fails because of files the user chose to exclude, inform the user and wait for authorization; do not take corrective action yourself.

## 4. Communication
- **Clarify Folders**: Always double-check which project folder is being targeted for "build", "run", or "upload" tasks.
- **No Unsolicited Refactors**: Do not change logic or structure that is not directly related to the assigned task.

## 4. Technical Constraints
- **Gemini API**: Use the `v1` endpoint or the latest SDK as configured, but ensure the `.env` file is respected (e.g., no quotes in keys if they cause issues).
- **Vite/React**: Follow the established React 19 + Vite patterns.
