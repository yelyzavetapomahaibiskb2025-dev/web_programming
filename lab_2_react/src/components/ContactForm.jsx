import React, { useState, useEffect } from 'react';

const ContactForm = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Відкриваємо модальне вікно через 3 секунди для швидкої перевірки (змініть на 60000 для 1 хв)
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
      backgroundColor: 'rgba(0,0,0,0.8)', display: 'flex',
      alignItems: 'center', justifyContent: 'center', zIndex: 1000
    }}>
      <div style={{
        background: '#111827', padding: '25px', borderRadius: '12px',
        maxWidth: '450px', width: '90%', position: 'relative', color: '#fff',
        border: '1px solid #ef4444'
      }}>
        <button 
          onClick={() => setIsOpen(false)}
          style={{ position: 'absolute', top: '10px', right: '15px', background: 'none', border: 'none', color: '#fff', fontSize: '22px', cursor: 'pointer' }}
        >
          &times;
        </button>
        <h2 style={{ color: '#ef4444', marginTop: 0 }}>Зворотний зв'язок</h2>
        <form action="https://formspree.io/f/xyeeqrbn" method="POST" style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '15px' }}>
          <input type="text" name="name" placeholder="Ім'я" required style={{ padding: '10px', borderRadius: '6px', border: '1px solid #374151', background: '#1f2937', color: '#fff' }} />
          <input type="email" name="email" placeholder="Email" required style={{ padding: '10px', borderRadius: '6px', border: '1px solid #374151', background: '#1f2937', color: '#fff' }} />
          <input type="tel" name="phone" placeholder="Телефон" required style={{ padding: '10px', borderRadius: '6px', border: '1px solid #374151', background: '#1f2937', color: '#fff' }} />
          <textarea name="message" placeholder="Повідомлення" rows="4" required style={{ padding: '10px', borderRadius: '6px', border: '1px solid #374151', background: '#1f2937', color: '#fff' }}></textarea>
          <button type="submit" style={{ padding: '12px', background: '#ef4444', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}>
            Надіслати
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;