function Projects() {
  return (
    <section className="card">
      <h2>ДОСВІД ТА ПРОЄКТИ</h2>
      <div className="lightsaber-divider"></div>
      <ul className="projects-list">
        <li><strong>Лабораторна робота №1:</strong> Створення та налаштування базової структури вебпроєкту.</li>
        <li><strong>Лабораторна робота №2:</strong> Розробка резюме за допомогою чистого HTML та React.</li>
        <li><strong>Проєкт «UCD Ponic» (Автоматизована гідропоніка):</strong> Розробка програмного забезпечення для мікроконтролера (C/C++) з метою автоматизації процесів.</li>
        <li><strong>Проєкт «Інтерактивна ручка»:</strong> Розробка апаратно-програмного пристрою на базі мікроконтролера для відстеження рухів пера.</li>
      </ul>
    </section>
  );
}

export default Projects;