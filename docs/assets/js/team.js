document.addEventListener('DOMContentLoaded', () => {
  const grid = document.querySelector('#team-grid');
  if (!grid || !window.TEAM) return;
  grid.innerHTML = window.TEAM.map(person => `
    <article class="team-card">
      <div class="portrait">${portraitMarkup(person)}</div>
      <span class="profile-role">${person.role}</span>
      <h2>${person.name}</h2>
      <p>${person.bio}</p>
      <dl>
        <dt>Expertise</dt><dd>${person.expertise}</dd>
        <dt>Student support</dt><dd>${person.support}</dd>
      </dl>
    </article>`).join('');
});
