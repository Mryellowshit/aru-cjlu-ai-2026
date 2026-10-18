document.addEventListener('DOMContentLoaded', () => {
  const grid = document.querySelector('#student-grid');
  const search = document.querySelector('#student-search');
  const count = document.querySelector('#student-count');
  if (!grid || !window.STUDENTS) return;

  const render = (query = '') => {
    const q = query.trim().toLowerCase();
    const filtered = window.STUDENTS.filter(student =>
      [student.name, student.hometown, student.studies, student.interests, student.shortBio]
        .join(' ').toLowerCase().includes(q)
    );
    count.textContent = `${filtered.length} profile${filtered.length === 1 ? '' : 's'}`;
    grid.innerHTML = filtered.length ? filtered.map(student => `
      <article class="profile-card ${student.approved ? '' : 'placeholder'}">
        <div class="portrait">${portraitMarkup(student)}</div>
        <div class="profile-copy">
          <span class="profile-role">${student.approved ? 'Student profile' : 'Awaiting approval'}</span>
          <h2>${student.name}</h2>
          <p><strong>From:</strong> ${student.hometown}</p>
          <p><strong>Studies:</strong> ${student.studies}</p>
          <p><strong>Future interests:</strong> ${student.interests}</p>
          <p>${student.shortBio}</p>
        </div>
      </article>`).join('') : `<p class="empty-state">No student profiles match that search.</p>`;
  };

  search?.addEventListener('input', event => render(event.target.value));
  render();
});
