import { useState, useEffect } from "react";
import Board from "./components/Board";
import Header from "./components/Header";
import WinModal from "./components/WinModal";
import "./App.css";

const EMOJIS = ["🚀", "🎮", "🔥", "⚡", "🌙", "💎", "🎯", "🦄", "🌈", "🎸", "🏆", "🎲"];

function shuffle(arr) {
  return [...arr].sort(() => Math.random() - 0.5);
}

function createCards(pairs) {
  const selected = EMOJIS.slice(0, pairs);
  const doubled = [...selected, ...selected];
  return shuffle(doubled).map((emoji, i) => ({
    id: i,
    emoji,
    flipped: false,
    matched: false,
  }));
}

function App() {
  const [cards, setCards] = useState(() => createCards(6));
  const [flipped, setFlipped] = useState([]);
  const [moves, setMoves] = useState(0);
  const [matches, setMatches] = useState(0);
  const [disabled, setDisabled] = useState(false);
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  const [pairs, setPairs] = useState(6);
  const [won, setWon] = useState(false);
  const [bestScore, setBestScore] = useState(() => {
    return parseInt(localStorage.getItem("memory-best")) || null;
  });

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => setTime((t) => t + 1), 1000);
    }
    return () => clearInterval(interval);
  }, [running]);

  useEffect(() => {
    if (matches === pairs && pairs > 0) {
      setRunning(false);
      setWon(true);
      if (!bestScore || moves < bestScore) {
        setBestScore(moves);
        localStorage.setItem("memory-best", moves);
      }
    }
  }, [matches]);

  const handleFlip = (id) => {
    if (disabled || flipped.length === 2) return;
    const card = cards.find((c) => c.id === id);
    if (card.flipped || card.matched) return;

    if (!running && moves === 0) setRunning(true);

    const newCards = cards.map((c) => c.id === id ? { ...c, flipped: true } : c);
    setCards(newCards);
    const newFlipped = [...flipped, id];
    setFlipped(newFlipped);

    if (newFlipped.length === 2) {
      setMoves((m) => m + 1);
      setDisabled(true);
      const [a, b] = newFlipped;
      const cardA = newCards.find((c) => c.id === a);
      const cardB = newCards.find((c) => c.id === b);

      if (cardA.emoji === cardB.emoji) {
        setTimeout(() => {
          setCards((prev) => prev.map((c) =>
            c.id === a || c.id === b ? { ...c, matched: true } : c
          ));
          setMatches((m) => m + 1);
          setFlipped([]);
          setDisabled(false);
        }, 500);
      } else {
        setTimeout(() => {
          setCards((prev) => prev.map((c) =>
            c.id === a || c.id === b ? { ...c, flipped: false } : c
          ));
          setFlipped([]);
          setDisabled(false);
        }, 800);
      }
    }
  };

  const handleRestart = (newPairs = pairs) => {
    setPairs(newPairs);
    setCards(createCards(newPairs));
    setFlipped([]);
    setMoves(0);
    setMatches(0);
    setDisabled(false);
    setTime(0);
    setRunning(false);
    setWon(false);
  };

  const formatTime = (s) => `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;

  return (
    <div className="app">
      <div className="bg-glow g1" />
      <div className="bg-glow g2" />
      <div className="container">
        <Header
          moves={moves}
          time={formatTime(time)}
          matches={matches}
          pairs={pairs}
          bestScore={bestScore}
          onRestart={() => handleRestart()}
          onChangePairs={handleRestart}
        />
        <Board cards={cards} onFlip={handleFlip} />
        {won && (
          <WinModal
            moves={moves}
            time={formatTime(time)}
            onRestart={() => handleRestart()}
          />
        )}
      </div>
    </div>
  );
}

export default App;
