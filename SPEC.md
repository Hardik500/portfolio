# Portfolio Revamp Specification

## Overview
- **User:** Hardik Khandelwal - Senior Software Engineer
- **Tech Stack:** React + Vite + TypeScript + Tailwind CSS
- **Goal:** Modern, sophisticated portfolio showcasing GitHub projects

## Design Philosophy
- Clean, minimal, senior-level aesthetic
- Dark theme with subtle gradients
- Smooth animations (Framer Motion)
- Mobile responsive
- Not generic "AI slop"

## Sections

### 1. Hero
- Name: Hardik Khandelwal
- Title: Senior Software Engineer
- Tagline: Building scalable systems & delightful experiences
- Social links: GitHub, LinkedIn, Twitter, Email

### 2. About
- Brief professional summary
- Tech stack highlights
- Years of experience

### 3. Projects (Dynamic)
- Auto-fetch from GitHub API
- Filter by language/type
- Show: name, description, stars, forks, language, topics
- Link to repo + live demo if available

### 4. Skills
- Categorized: Frontend, Backend, Tools, Cloud
- Visual proficiency indicators

### 5. Contact
- Email link
- Social links
- Optional: simple contact form

## Technical

### GitHub API
- Use unauthenticated API (60 req/hr limit)
- Fetch user's repos, sort by stars/update
- Cache results

### Animations
- Framer Motion for page transitions
- Staggered reveals
- Hover effects on cards

### Deployment
- GitHub Pages (current)
- Build to `dist` folder
