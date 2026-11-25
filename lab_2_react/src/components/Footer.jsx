import React, { useEffect, useState } from 'react';

const Footer = () => {
  const [sysInfo, setSysInfo] = useState({ platform: '', userAgent: '' });

  useEffect(() => {
    // 1. Отримуємо відомості про ОС та браузер
    const info = {
      platform: navigator.platform || 'Unknown OS',
      userAgent: navigator.userAgent
    };

    // 2. Зберігаємо в localStorage
    localStorage.setItem('react_system_info', JSON.stringify(info));

    // 3. Зчитуємо та оновлюємо стан
    const stored = JSON.parse(localStorage.getItem('react_system_info'));
    if (stored) {
      setSysInfo(stored);
    }
  }, []); // Порожній масив — викличеться один раз при монтуванні

  return (
    <footer style={{ textAlign: 'center', padding: '20px', borderTop: '1px solid #333', marginTop: '20px' }}>
      <p>© 2026 Єлизавета Помагайбіс. Усі права захищені.</p>
      <p>Сайт розгорнуто на Vercel</p>
      <p style={{ fontSize: '0.85em', opacity: 0.8 }}>
        Платформа: {sysInfo.platform} | Браузер: {sysInfo.userAgent}
      </p>
    </footer>
  );
};

export default Footer;