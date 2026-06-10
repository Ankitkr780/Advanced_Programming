import { useState, useEffect } from "react";

const COLORS = {
  bg: "#0f0f1a",
  surface: "#1a1a2e",
  card: "#16213e",
  accent: "#e94560",
  accentSoft: "rgba(233,69,96,0.15)",
  accentGlow: "rgba(233,69,96,0.4)",
  teal: "#0f3460",
  tealBright: "#00d4ff",
  text: "#e8e8f0",
  muted: "#6b6b8a",
  done: "#3a3a5c",
};

const injectStyles = () => {
  const css = `
    @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=DM+Sans:wght@300;400;500&display=swap');

    * { box-sizing: border-box; margin: 0; padding: 0; }

    html, body, #root {
      margin: 0; padding: 0;
      width: 100%; height: 100%;
      background: ${COLORS.bg};
    }

    .todo-wrap {
      width: 100vw;
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 40px 20px;
      background:
        radial-gradient(ellipse at 20% 20%, rgba(233,69,96,0.08) 0%, transparent 60%),
        radial-gradient(ellipse at 80% 80%, rgba(0,212,255,0.06) 0%, transparent 60%),
        ${COLORS.bg};
    }

    .todo-card {
      width: 100%;
      max-width: 460px;
      background: ${COLORS.surface};
      border-radius: 20px;
      border: 1px solid rgba(255,255,255,0.06);
      overflow: hidden;
      box-shadow: 0 40px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(233,69,96,0.1);
    }

    .todo-header {
      background: linear-gradient(135deg, ${COLORS.card} 0%, ${COLORS.teal} 100%);
      padding: 32px 28px 24px;
      position: relative;
      overflow: hidden;
    }

    .header-glow {
      position: absolute;
      top: -30px; right: -30px;
      width: 160px; height: 160px;
      background: radial-gradient(circle, rgba(233,69,96,0.3) 0%, transparent 70%);
      pointer-events: none;
    }

    .header-title {
      font-family: 'Syne', sans-serif;
      font-size: 28px;
      font-weight: 800;
      color: ${COLORS.text};
      letter-spacing: -0.5px;
      position: relative;
    }

    .header-sub {
      font-size: 13px;
      color: ${COLORS.muted};
      margin-top: 4px;
      position: relative;
    }

    .progress-ring-wrap {
      position: absolute;
      right: 28px;
      top: 50%;
      transform: translateY(-50%);
    }

    .ring-label {
      position: absolute;
      inset: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    }

    .ring-pct {
      font-family: 'Syne', sans-serif;
      font-size: 18px;
      font-weight: 800;
      color: ${COLORS.text};
      line-height: 1;
    }

    .ring-done {
      font-size: 9px;
      color: ${COLORS.muted};
      letter-spacing: 0.5px;
      text-transform: uppercase;
    }

    .todo-body {
      padding: 24px 28px;
    }

    .input-row {
      display: flex;
      gap: 10px;
      margin-bottom: 24px;
    }

    .todo-input {
      flex: 1;
      background: rgba(255,255,255,0.05);
      border: 1px solid rgba(255,255,255,0.1);
      border-radius: 10px;
      padding: 12px 16px;
      font-family: 'DM Sans', sans-serif;
      font-size: 15px;
      color: ${COLORS.text};
      outline: none;
      transition: border-color 0.2s, box-shadow 0.2s;
    }

    .todo-input::placeholder { color: ${COLORS.muted}; }

    .todo-input:focus {
      border-color: ${COLORS.accent};
      box-shadow: 0 0 0 3px ${COLORS.accentSoft};
    }

    .add-btn {
      background: ${COLORS.accent};
      color: white;
      border: none;
      border-radius: 10px;
      padding: 12px 20px;
      cursor: pointer;
      font-size: 22px;
      font-weight: 300;
      line-height: 1;
      transition: transform 0.15s, box-shadow 0.2s;
      box-shadow: 0 4px 20px ${COLORS.accentGlow};
    }

    .add-btn:hover {
      transform: scale(1.08);
      box-shadow: 0 6px 28px ${COLORS.accentGlow};
    }

    .add-btn:active { transform: scale(0.96); }

    .filters {
      display: flex;
      gap: 6px;
      margin-bottom: 16px;
    }

    .filter-btn {
      font-family: 'DM Sans', sans-serif;
      font-size: 12px;
      font-weight: 500;
      padding: 5px 12px;
      border-radius: 20px;
      border: 1px solid rgba(255,255,255,0.1);
      cursor: pointer;
      transition: all 0.2s;
      color: ${COLORS.muted};
      background: transparent;
    }

    .filter-btn.active {
      background: ${COLORS.accentSoft};
      border-color: ${COLORS.accent};
      color: ${COLORS.accent};
    }

    .todo-list {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 8px;
      min-height: 60px;
    }

    .todo-item {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 14px 16px;
      background: rgba(255,255,255,0.03);
      border: 1px solid rgba(255,255,255,0.06);
      border-radius: 12px;
      transition: background 0.2s, border-color 0.2s, opacity 0.3s, transform 0.3s;
      animation: slideIn 0.25s ease;
    }

    @keyframes slideIn {
      from { opacity: 0; transform: translateY(-8px); }
      to   { opacity: 1; transform: translateY(0); }
    }

    .todo-item:hover {
      background: rgba(255,255,255,0.06);
      border-color: rgba(255,255,255,0.12);
    }

    .todo-item.done {
      opacity: 0.5;
    }

    .custom-check {
      width: 20px;
      height: 20px;
      border-radius: 50%;
      border: 2px solid ${COLORS.muted};
      flex-shrink: 0;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.2s;
      background: transparent;
    }

    .custom-check.checked {
      background: ${COLORS.accent};
      border-color: ${COLORS.accent};
    }

    .check-icon {
      width: 10px;
      height: 10px;
      opacity: 0;
      transition: opacity 0.15s;
    }

    .custom-check.checked .check-icon { opacity: 1; }

    .todo-text {
      flex: 1;
      font-size: 15px;
      color: ${COLORS.text};
      cursor: pointer;
      transition: color 0.2s;
      word-break: break-word;
    }

    .todo-text.done {
      text-decoration: line-through;
      color: ${COLORS.muted};
    }

    .del-btn {
      background: transparent;
      border: none;
      cursor: pointer;
      color: ${COLORS.muted};
      padding: 4px;
      border-radius: 6px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: color 0.2s, background 0.2s;
      flex-shrink: 0;
    }

    .del-btn:hover {
      color: ${COLORS.accent};
      background: ${COLORS.accentSoft};
    }

    .empty-state {
      text-align: center;
      padding: 32px 0 16px;
    }

    .empty-state p {
      color: ${COLORS.muted};
      font-size: 14px;
      margin-top: 12px;
    }

    .footer-stats {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 20px;
      padding-top: 16px;
      border-top: 1px solid rgba(255,255,255,0.06);
      font-size: 12px;
      color: ${COLORS.muted};
    }

    .clear-btn {
      background: transparent;
      border: none;
      color: ${COLORS.muted};
      cursor: pointer;
      font-size: 12px;
      font-family: 'DM Sans', sans-serif;
      transition: color 0.2s;
    }

    .clear-btn:hover { color: ${COLORS.accent}; }
  `;

  const style = document.createElement("style");
  style.textContent = css;
  document.head.appendChild(style);
};

// SVG Illustrations
const EmptyIllustration = () => (
  <svg width="100" height="80" viewBox="0 0 100 80" fill="none">
    <rect x="10" y="20" width="80" height="50" rx="8" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5"/>
    <rect x="22" y="33" width="40" height="3" rx="1.5" fill="rgba(255,255,255,0.12)"/>
    <rect x="22" y="42" width="30" height="3" rx="1.5" fill="rgba(255,255,255,0.08)"/>
    <rect x="22" y="51" width="35" height="3" rx="1.5" fill="rgba(255,255,255,0.08)"/>
    <circle cx="72" cy="25" r="14" fill="#1a1a2e" stroke="rgba(233,69,96,0.4)" strokeWidth="1.5"/>
    <path d="M67 25 L70.5 28.5 L77 22" stroke="#e94560" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="50" cy="10" r="3" fill="rgba(233,69,96,0.3)"/>
    <circle cx="15" cy="55" r="2" fill="rgba(0,212,255,0.2)"/>
    <circle cx="88" cy="65" r="2.5" fill="rgba(233,69,96,0.2)"/>
  </svg>
);

const ProgressRing = ({ total, done }) => {
  const r = 30;
  const circ = 2 * Math.PI * r;
  const pct = total === 0 ? 0 : done / total;
  const dash = pct * circ;
  const display = total === 0 ? 0 : Math.round(pct * 100);

  return (
    <div className="progress-ring-wrap">
      <svg width="80" height="80" viewBox="0 0 80 80">
        <circle cx="40" cy="40" r={r} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="6"/>
        <circle
          cx="40" cy="40" r={r}
          fill="none"
          stroke="#e94560"
          strokeWidth="6"
          strokeLinecap="round"
          strokeDasharray={`${dash} ${circ}`}
          strokeDashoffset={circ * 0.25}
          transform="rotate(-90 40 40)"
          style={{ transition: "stroke-dasharray 0.4s ease" }}
        />
        {pct === 1 && total > 0 && (
          <circle cx="40" cy="40" r={r} fill="none" stroke="#00d4ff" strokeWidth="2" opacity="0.4"/>
        )}
      </svg>
      <div className="ring-label">
        <span className="ring-pct">{display}%</span>
        <span className="ring-done">done</span>
      </div>
    </div>
  );
};

export default function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [filter, setFilter] = useState("all");

  useEffect(() => { injectStyles(); }, []);

  const add = () => {
    if (!input.trim()) return;
    setTodos([...todos, { id: crypto.randomUUID(), text: input.trim(), completed: false }]);
    setInput("");
  };

  const toggle = (id) =>
    setTodos(todos.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)));

  const remove = (id) => setTodos(todos.filter((t) => t.id !== id));

  const clearDone = () => setTodos(todos.filter((t) => !t.completed));

  const filtered = todos.filter((t) =>
    filter === "active" ? !t.completed : filter === "done" ? t.completed : true
  );

  const doneCount = todos.filter((t) => t.completed).length;

  return (
    <div className="todo-wrap" style={{ position: "fixed", inset: 0, overflowY: "auto" }}>
      <div className="todo-card">
        {/* Header */}
        <div className="todo-header">
          <div className="header-glow" />
          <div style={{ paddingRight: "90px" }}>
            <div className="header-title">My Tasks</div>
            <div className="header-sub">
              {todos.length === 0
                ? "Nothing here yet"
                : `${doneCount} of ${todos.length} completed`}
            </div>
          </div>
          <ProgressRing total={todos.length} done={doneCount} />
        </div>

        {/* Body */}
        <div className="todo-body">
          <div className="input-row">
            <input
              className="todo-input"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && add()}
              placeholder="What needs to be done?"
            />
            <button className="add-btn" onClick={add} aria-label="Add task">+</button>
          </div>

          {/* Filters */}
          {todos.length > 0 && (
            <div className="filters">
              {["all", "active", "done"].map((f) => (
                <button
                  key={f}
                  className={`filter-btn ${filter === f ? "active" : ""}`}
                  onClick={() => setFilter(f)}
                >
                  {f.charAt(0).toUpperCase() + f.slice(1)}
                </button>
              ))}
            </div>
          )}

          {/* List */}
          <ul className="todo-list">
            {filtered.length === 0 && (
              <div className="empty-state">
                <EmptyIllustration />
                <p>{filter === "done" ? "No completed tasks yet." : "Nothing to show here."}</p>
              </div>
            )}
            {filtered.map((todo) => (
              <li key={todo.id} className={`todo-item ${todo.completed ? "done" : ""}`}>
                {/* Custom checkbox */}
                <div
                  className={`custom-check ${todo.completed ? "checked" : ""}`}
                  onClick={() => toggle(todo.id)}
                  role="checkbox"
                  aria-checked={todo.completed}
                >
                  <svg className="check-icon" viewBox="0 0 10 10" fill="none">
                    <path d="M1.5 5L4 7.5L8.5 2.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>

                <span
                  className={`todo-text ${todo.completed ? "done" : ""}`}
                  onClick={() => toggle(todo.id)}
                >
                  {todo.text}
                </span>

                {/* Delete */}
                <button className="del-btn" onClick={() => remove(todo.id)} aria-label="Delete">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2 2L12 12M12 2L2 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                  </svg>
                </button>
              </li>
            ))}
          </ul>

          {/* Footer */}
          {todos.length > 0 && (
            <div className="footer-stats">
              <span>{todos.length - doneCount} task{todos.length - doneCount !== 1 ? "s" : ""} remaining</span>
              {doneCount > 0 && (
                <button className="clear-btn" onClick={clearDone}>
                  Clear completed
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}