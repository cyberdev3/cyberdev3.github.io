document.addEventListener('DOMContentLoaded', function() {
  const switcher = document.querySelector('.lang-switcher');
  const button = switcher.querySelector('.lang-button');
  const menu = switcher.querySelector('.lang-menu');
  const label = button.querySelector('.lang-label');
  const items = menu.querySelectorAll('li');

  // Відкриття/закриття меню
  button.addEventListener('click', function() {
    const isExpanded = button.getAttribute('aria-expanded') === 'true';
    button.setAttribute('aria-expanded', !isExpanded);
    menu.hidden = isExpanded;
  });

  // Клік по пункту меню
  items.forEach(item => {
    item.addEventListener('click', function() {
      const lang = item.getAttribute('data-lang');
      label.textContent = lang.toUpperCase();

      // Прибираємо старі виділення
      items.forEach(i => i.classList.remove('selected'));
      item.classList.add('selected');

      // Приховуємо меню
      button.setAttribute('aria-expanded', false);
      menu.hidden = true;

      // Перенаправлення на потрібну локаль (за потреби)
      const currentUrl = window.location.href;
      // Тут зроби свою логіку або посилання
      const newUrl = `/${lang}/`; // заміни на реальні урли
      window.location.href = newUrl;
    });
  });

  // Закриття меню при кліку поза елементом
  document.addEventListener('click', function(e) {
    if (!switcher.contains(e.target)) {
      button.setAttribute('aria-expanded', false);
      menu.hidden = true;
    }
  });

  // Ініціалізація активної локалі
  const currentLang = document.documentElement.lang || 'en';
  label.textContent = currentLang.toUpperCase();
  items.forEach(item => {
    const lang = item.getAttribute('data-lang');
    if (lang === currentLang) {
      item.classList.add('selected');
    }
  });
});