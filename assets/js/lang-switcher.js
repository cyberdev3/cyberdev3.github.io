document.addEventListener('DOMContentLoaded', function() {
  console.log('lang-switcher connected');

  const langButton = document.querySelector('.lang-button');
  const langMenu = document.querySelector('.lang-menu');
  const langItems = document.querySelectorAll('.lang-menu li a');
  const langLabel = langButton.querySelector('.lang-label');

  const path = window.location.pathname;

  // --- Ініціалізація тексту на кнопці ---
  let currentLang = 'EN'; // За замовчуванням

  if (path.startsWith('/uk/')) {
    currentLang = 'UA';
  } else if (path.startsWith('/ru/')) {
    currentLang = 'RU';
  }

  langLabel.textContent = currentLang;

  // --- Проставлення галочки для поточної мови ---
  langItems.forEach(function(item) {
    const langName = item.querySelector('.lang-name').textContent.trim();

    if (langName === currentLang) {
      item.classList.add('selected');
    } else {
      item.classList.remove('selected');
    }
  });

  // --- Клік по кнопці ---
  langButton.addEventListener('click', function(e) {
    e.stopPropagation(); // Щоб клік не пішов далі на document
    const expanded = langButton.getAttribute('aria-expanded') === 'true';
    langButton.setAttribute('aria-expanded', !expanded);
    langMenu.style.display = expanded ? 'none' : 'block';
  });

  // --- Клік поза меню (закриває меню) ---
  document.addEventListener('click', function(event) {
    if (!langButton.contains(event.target) && !langMenu.contains(event.target)) {
      langButton.setAttribute('aria-expanded', false);
      langMenu.style.display = 'none';
    }
  });

  // --- Клік по елементу списку мов ---
  langItems.forEach(function(item) {
    item.addEventListener('click', function(e) {
      e.preventDefault();

      const selectedLang = item.querySelector('.lang-name').textContent.trim();
      langLabel.textContent = selectedLang;

      // Знімаємо selected з усіх і ставимо на поточний
      langItems.forEach(function(el) {
        el.classList.remove('selected');
      });
      item.classList.add('selected');

      langButton.setAttribute('aria-expanded', false);
      langMenu.style.display = 'none';

      // Перенаправлення на вибрану мову
      window.location.href = item.getAttribute('href');
    });
  });
});
