document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
    });
  }

  const year = document.querySelector('[data-current-year]');
  if (year) year.textContent = new Date().getFullYear();
});

function initials(name) {
  return name.split(/\s+/).filter(Boolean).slice(0, 2).map(part => part[0]).join('').toUpperCase();
}

function portraitMarkup(person) {
  if (person.photo) {
    return `<img src="${person.photo}" alt="Portrait of ${person.name}" loading="lazy">`;
  }
  return `<span class="initials" aria-hidden="true">${initials(person.name)}</span><span class="sr-only">Portrait placeholder for ${person.name}</span>`;
}
