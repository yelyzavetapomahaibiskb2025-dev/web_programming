import { useState, useEffect } from 'react';
import './App.css';

import Header from './components/Header';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Languages from './components/Languages';
import Footer from './components/Footer';
import Reviews from './components/Reviews';
import ContactForm from './components/ContactForm';

function App() {
  const [theme, setTheme] = useState(() => {
    const hour = new Date().getHours();
    return hour >= 7 && hour < 21 ? 'light' : 'dark';
  });

  useEffect(() => {
    if (theme === 'light') {
      document.body.classList.add('light-mode');
    } else {
      document.body.classList.remove('light-mode');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="resume-container" style={{ minHeight: '100vh', padding: '20px', maxWidth: '1000px', margin: '0 auto', position: 'relative' }}>
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '15px' }}>
        <button
          id="theme-toggle-btn"
          type="button"
          onClick={toggleTheme}
          style={{
            padding: '10px 18px',
            cursor: 'pointer',
            borderRadius: '8px',
            background: theme === 'dark' ? '#1f2937' : '#ffffff',
            color: theme === 'dark' ? '#ffffff' : '#1f2937',
            border: '2px solid #ef4444',
            fontWeight: 'bold',
            boxShadow: '0 4px 10px rgba(0,0,0,0.15)',
          }}
        >
          {theme === 'dark' ? '☀️ Денна тема' : '🌙 Нічна тема'}
        </button>
      </div>

      <Header />

      <div className="resume-grid" style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
        <div className="left-column" style={{ flex: 1 }}>
          <About />
          <Languages />
        </div>
        <div className="right-column" style={{ flex: 1 }}>
          <Education />
          <Skills />
          <Projects />
          <Reviews />
        </div>
      </div>

      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <img 
          src="/vader2.jpg" 
          alt="Darth Vader Corridor" 
          style={{ maxWidth: '100%', borderRadius: '12px' }} 
        />
      </div>

      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;