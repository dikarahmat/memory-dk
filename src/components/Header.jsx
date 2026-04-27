function Header({ moves, time, matches, pairs, bestScore, onRestart, onChangePairs }) {
  return (
    <header className="header">
      <div className="header-top">
        <div className="project-label">
          <span className="dot" />
          DK Project <span className="num">#8</span>
        </div>
        <h1 className="title">memory<span className="accent">_</span></h1>
        <p className="subtitle">flip & match all the cards</p>
      </div>

      <div className="stats-bar">
        <div className="stat">
          <span className="stat-label">moves</span>
          <span className="stat-value">{moves}</span>
        </div>
        <div className="stat">
          <span className="stat-label">time</span>
          <span className="stat-value">{time}</span>
        </div>
        <div className="stat">
          <span className="stat-label">matches</span>
          <span className="stat-value">{matches}/{pairs}</span>
        </div>
        {bestScore && (
          <div className="stat">
            <span className="stat-label">best</span>
            <span className="stat-value accent-text">{bestScore}</span>
          </div>
        )}
      </div>

      <div className="controls">
        <div className="difficulty">
          {[4, 6, 8, 12].map((p) => (
            <button
              key={p}
              className={`diff-btn ${pairs === p ? "active" : ""}`}
              onClick={() => onChangePairs(p)}
            >
              {p === 4 ? "easy" : p === 6 ? "medium" : p === 8 ? "hard" : "expert"}
            </button>
          ))}
        </div>
        <button className="restart-btn" onClick={onRestart}>restart ↺</button>
      </div>
    </header>
  );
}

export default Header;
