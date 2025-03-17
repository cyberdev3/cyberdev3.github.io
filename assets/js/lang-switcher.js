const langButton = document.querySelector('.lang-button');
const langMenu = document.querySelector('.lang-menu');

langButton.addEventListener('click', function() {
  const expanded = langButton.getAttribute('aria-expanded') === 'true';
  langButton.setAttribute('aria-expanded', !expanded);
  langMenu.style.display = expanded ? 'none' : 'block';
});

document.addEventListener('click', function(event) {
  if (!langButton.contains(event.target) && !langMenu.contains(event.target)) {
    langButton.setAttribute('aria-expanded', false);
    langMenu.style.display = 'none';
  }
});