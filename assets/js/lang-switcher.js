document.addEventListener('DOMContentLoaded', function() {
  console.log('lang-switcher connected');

  const langButton = document.querySelector('.lang-button');
  const langMenu = document.querySelector('.lang-menu');
  const langItems = document.querySelectorAll('.lang-menu li a');
  const langLabel = langButton.querySelector('.lang-label');

  // --- Ініціалізація тексту на кнопці ---
  const path = window.location.pathname;

  if (path.startsWith('/uk/')) {
    langLabel.textContent = 'UA';
  } else if (path.startsWith('/ru/')) {
    langLabel.textContent = 'RU';
  } else {
    langLabel.textContent = 'EN';
  }

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

      const selectedLang = item.textContent.trim();
      langLabel.textContent = selectedLang;

      langButton.setAttribute('aria-expanded', false);
      langMenu.style.display = 'none';

      // Перенаправлення на вибрану мову
      window.location.href = item.getAttribute('href');
    });
  });
});