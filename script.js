:root {
  --bg: #120e22;
  --panel: rgba(17, 14, 31, 0.82);
  --panel-strong: #17132a;
  --card: rgba(255, 255, 255, 0.04);
  --line: rgba(255, 255, 255, 0.12);
  --text: #f4f2ff;
  --muted: #c9c3e6;
  --gold: #f7d76d;
  --rose: #ff718d;
  --teal: #6ae4d5;
  --shadow: rgba(0, 0, 0, 0.28);
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  min-height: 100vh;
  font-family: "Inter", sans-serif;
  background:
    radial-gradient(circle at top, rgba(147, 98, 255, 0.28), transparent 28%),
    linear-gradient(135deg, #0c0919 0%, #120e22 35%, #18112d 100%);
  color: var(--text);
}

img {
  max-width: 100%;
  display: block;
}

.page-shell {
  width: min(1200px, calc(100% - 2rem));
  margin: 0 auto;
  padding-bottom: 3rem;
}

.hero {
  padding: 1.25rem 0 2rem;
}

.topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0 1.5rem;
}

.brand {
  font-family: "Cinzel", serif;
  font-size: 1.05rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--gold);
}

.ghost-btn,
.primary-btn,
.secondary-btn {
  border-radius: 999px;
  border: 1px solid var(--line);
  font: inherit;
  cursor: pointer;
  text-decoration: none;
  transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
}

.ghost-btn {
  background: rgba(255, 255, 255, 0.04);
  color: var(--text);
  padding: 0.75rem 1.15rem;
}

.ghost-btn:hover,
.primary-btn:hover,
.secondary-btn:hover {
  transform: translateY(-1px);
}

.hero-content {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 2rem;
  align-items: center;
  padding-top: 1rem;
}

.eyebrow,
.section-tag {
  display: inline-block;
  margin: 0 0 0.85rem;
  padding: 0.35rem 0.8rem;
  border-radius: 999px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  font-size: 0.72rem;
  background: rgba(106, 228, 213, 0.12);
  border: 1px solid rgba(106, 228, 213, 0.35);
  color: var(--teal);
}

.hero-copy h1 {
  margin: 0;
  font-family: "Cinzel", serif;
  font-size: clamp(2.8rem, 6vw, 5rem);
  line-height: 1.05;
  letter-spacing: -0.04em;
}

.subtitle {
  color: var(--muted);
  font-size: 1.08rem;
  max-width: 42rem;
  line-height: 1.75;
  margin-top: 1rem;
}

.cta-row {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 2rem;
}

.primary-btn,
.secondary-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.9rem 1.5rem;
}

.primary-btn {
  background: linear-gradient(135deg, var(--gold), #ffdca5);
  color: #18142a;
  font-weight: 700;
  box-shadow: 0 12px 30px rgba(247, 215, 109, 0.24);
}

.secondary-btn {
  background: rgba(255, 255, 255, 0.02);
  color: var(--text);
}

.hero-art {
  display: flex;
  justify-content: center;
}

.photo-frame {
  position: relative;
  width: min(100%, 480px);
  border-radius: 28px;
  padding: 1rem;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.02));
  border: 1px solid rgba(255, 255, 255, 0.16);
  box-shadow: 0 26px 70px rgba(0, 0, 0, 0.35);
}

.photo-frame::before {
  content: "";
  position: absolute;
  inset: 12px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 20px;
  pointer-events: none;
}

.photo-frame img {
  width: 100%;
  border-radius: 18px;
  object-fit: cover;
}

.message-panel,
.quote-panel {
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: 26px;
  box-shadow: 0 16px 40px var(--shadow);
}

.message-panel {
  margin-top: 2.5rem;
  padding: 2rem;
}

.message-panel h2 {
  margin: 0 0 0.9rem;
  font-family: "Cinzel", serif;
  font-size: clamp(1.7rem, 3vw, 2.6rem);
}

.message-panel p,
.quote-panel p {
  margin: 0;
  color: var(--muted);
  font-size: 1.06rem;
  line-height: 1.8;
}

.gallery-section {
  margin-top: 3rem;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
  margin-top: 1.25rem;
}

.card {
  position: relative;
  overflow: hidden;
  border-radius: 22px;
  border: 1px solid var(--line);
  background: var(--card);
  min-height: 220px;
  box-shadow: 0 16px 34px rgba(7, 8, 20, 0.35);
}

.card.tall {
  grid-row: span 2;
  min-height: 470px;
}

.card.wide {
  grid-column: span 2;
}

.card img {
  width: 100%;
  height: 100%;
  min-height: 220px;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.card:hover img {
  transform: scale(1.03);
}

.card figcaption {
  position: absolute;
  left: 1rem;
  bottom: 1rem;
  padding: 0.45rem 0.8rem;
  background: rgba(9, 9, 18, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 999px;
  font-size: 0.78rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.quote-panel {
  margin-top: 3rem;
  padding: 2rem 2.25rem;
  text-align: center;
}

.quote-panel p {
  font-family: "Cinzel", serif;
  color: var(--text);
  font-size: clamp(1.2rem, 2vw, 2rem);
}

.quote-panel span {
  display: inline-block;
  margin-top: 1rem;
  color: var(--gold);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-size: 0.78rem;
}

.site-footer {
  padding: 2rem 0 0.5rem;
  text-align: center;
  color: var(--muted);
}

#confettiLayer {
  position: fixed;
  inset: 0;
  pointer-events: none;
  overflow: hidden;
}

.confetti {
  position: absolute;
  top: -20px;
  width: 10px;
  height: 16px;
  border-radius: 3px;
  opacity: 0.9;
  animation: fall linear forwards;
}

@keyframes fall {
  0% {
    transform: translate3d(0, 0, 0) rotate(0deg);
    opacity: 1;
  }
  100% {
    transform: translate3d(var(--drift), 115vh, 0) rotate(720deg);
    opacity: 0;
  }
}

@media (max-width: 860px) {
  .hero-content {
    grid-template-columns: 1fr;
  }

  .gallery-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .card.wide {
    grid-column: span 2;
  }
}

@media (max-width: 560px) {
  .page-shell {
    width: min(100% - 1rem, 1200px);
  }

  .topbar {
    gap: 0.8rem;
    flex-direction: column;
    align-items: flex-start;
  }

  .gallery-grid {
    grid-template-columns: 1fr;
  }

  .card.wide {
    grid-column: span 1;
  }

  .message-panel,
  .quote-panel {
    padding-left: 1.1rem;
    padding-right: 1.1rem;
  }
}

