const Hero = () => (
  <header className="hero" id="top">
    <div className="hero__icons hero__icons-left">
      <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
      </svg>
    </div>
    
    <div className="hero__content">
      <div className="activity-badge">✓ Just wrapped Winter Eloquence Fest</div>
      <p className="hero__eyebrow">✨ Welcome to Language Club</p>
      <h1 className="hero__title">
        Master Communication.
        <span className="hero__title-secondary">Own Your Voice.</span>
      </h1>
      <p className="hero__description">
        Join <span className="accent">180+ students</span> who speak with confidence, debate with conviction, and write with impact.
      </p>
      <div className="hero__actions">
        <a className="button primary" href="#contact">Join the Club →</a>
      </div>
    </div>

    <div className="hero__icons hero__icons-right">
      <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="9"></circle>
        <path d="M12 8v4m0 4v.01M8 12h4m4 0h.01"></path>
      </svg>
    </div>
  </header>
)

export default Hero
