# memory_ — DK Project #8

> DK Project #8 | Built with React + Vite

A minimal memory card game with 3D flip animation and difficulty levels. Built as part of a 30-day frontend project challenge.

🔗 **Live Demo:** [memory-dk.vercel.app](https://memory-dk.vercel.app/)

---

## Features

- 🃏 3D flip card animation
- 4 difficulty levels: Easy, Medium, Hard, Expert
- ⏱️ Timer & move counter
- 🏆 Best score saved to localStorage
- ✅ Win modal with stats
- 💚 Matched cards highlight

---

## Tech Stack

- **React** — UI & state management
- **Vite** — build tool
- **CSS** — custom styling, no UI library
- **Vercel** — deployment

---

## Getting Started

```bash
# Clone the repo
git clone https://github.com/dikarahmat/memory-dk.git

# Install dependencies
cd memory-dk
npm install

# Run locally
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## Project Structure

```
src/
  components/
    Header.jsx    # Stats bar & difficulty controls
    Board.jsx     # Card grid layout
    Card.jsx      # Flip card with animation
    WinModal.jsx  # Win screen with stats
  App.jsx         # Main game logic
  App.css         # Global styles
```

---

## What I Learned

- CSS 3D transform untuk flip animation
- Game state management dengan React
- setTimeout untuk delay card flip logic
- localStorage untuk persistent best score
- Dynamic grid layout berdasarkan difficulty

---

Made by [@dikarahmat](https://github.com/dikarahmat)
