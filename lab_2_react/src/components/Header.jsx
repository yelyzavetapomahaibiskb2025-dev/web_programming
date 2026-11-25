function Header() {
  return (
    <header className="resume-header">
      <div>
        <h1 id="main-title">Єлизавета Помагайбіс</h1>
        <p className="subtitle">Студентка спеціальності «Кібербезпека та захист інформації»</p>
        
        <div className="header-contacts">
          <p>
            <span data-type="secure">✉️ Email:</span>{' '}
            <a href="mailto:yelyzaveta.pomahaibis.kb.2025@lpnu.ua">
              yelyzaveta.pomahaibis.kb.2025@lpnu.ua
            </a>
          </p>
          <p>
            <span data-type="secure">💻 GitHub:</span>{' '}
            <a href="https://github.com/yelyzavetapomahaibiskb2025-dev" target="_blank" rel="noopener noreferrer">
              github.com/yelyzavetapomahaibiskb2025-dev
            </a>
          </p>
        </div>
      </div>

      <div className="vader-container" title="Дарт Вейдер">
        {/* Використовуємо абсолютний шлях до файлу з папки public у Vite */}
        <img 
          src="/vader.jpg" 
          alt="Darth Vader" 
          className="vader-img" 
        />
      </div>
    </header>
  );
}

export default Header;