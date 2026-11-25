// Отримання та збереження системної інформації
const systemInfo = {
  userAgent: navigator.userAgent,
  platform: navigator.platform || navigator.userAgentData?.platform || 'Unknown OS'
};

// localStorage приймає лише рядки, тому використовуємо JSON.stringify
localStorage.setItem('systemInfo', JSON.stringify(systemInfo));

// Отримання та вивід у футер
document.addEventListener('DOMContentLoaded', () => {
  const footerInfo = document.getElementById('footer-info');
  const storedData = localStorage.getItem('systemInfo');

  if (storedData && footerInfo) {
    const parsedData = JSON.parse(storedData);
    footerInfo.textContent = `Платформа: ${parsedData.platform} | Браузер: ${parsedData.userAgent}`;
  }
});
console.log("JavaScript успішно підключено!");

const VARIANT_ID = 15; // Поставити свій номер варіанта з журналу

async function fetchReviews() {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${VARIANT_ID}/comments`);
    const comments = await response.json();
    
    const container = document.getElementById('reviews-container');
    if (!container) return;

    comments.forEach(comment => {
      const card = document.createElement('div');
      card.style.borderTop = '1px solid #333';
      card.style.marginTop = '10px';
      card.style.paddingTop = '10px';
      card.innerHTML = `
        <h4>${comment.name}</h4>
        <p><strong>Email:</strong> ${comment.email}</p>
        <p>${comment.body}</p>
      `;
      container.appendChild(card);
    });
  } catch (error) {
    console.error('Помилка завантаження відгуків:', error);
  }
}

document.addEventListener('DOMContentLoaded', fetchReviews);

// Таймер та логіка модального вікна
document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('contact-modal');
  const closeBtn = document.getElementById('close-modal-btn');

  // Показуємо вікно через 1 хвилину (60 000 мілісекунд)
  setTimeout(() => {
    if (modal) {
      modal.style.display = 'flex';
    }
  }, 60000);

  // Закриття вікна при натисканні на хрестик
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      modal.style.display = 'none';
    });
  }
});
function initThemeToggle() {
  const toggleBtn = document.getElementById('theme-toggle-btn');
  const now = new Date();
  const hours = now.getHours();

  // З 07:00 до 21:00 автоматично вмикаємо світлу тему[cite: 4]
  if (hours >= 7 && hours < 21) {
    document.body.classList.add('light-mode');
  }

  // Ручне перемикання при натисканні на кнопку
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      document.body.classList.toggle('light-mode');
    });
  }
}

document.addEventListener('DOMContentLoaded', initThemeToggle);

const toggleBtn = document.getElementById('theme-toggle-btn');

if (toggleBtn) {
  toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
  });
}