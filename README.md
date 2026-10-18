# ARU × China Jiliang University — AI & Semantic Data

A responsive, accessible static website inspired by the information architecture of the CIS 6270 course site. It contains:

- a programme landing page;
- one searchable page for 25 student profiles;
- one page for course teachers, instructors and tutors;
- three 12-week module-outline pages: Semantic Data Technologies, Advanced Machine Learning, and Neural Networks & Deep Learning.

## Preview locally

Open `docs/index.html` in a browser, or serve the repository root with a local static server.

## Publish with GitHub Pages

1. Create a new GitHub repository.
2. Upload the entire project.
3. Open **Settings → Pages**.
4. Choose **Deploy from a branch**.
5. Select the `main` branch and the `/docs` folder.

## Add the 25 student profiles

Edit `docs/assets/js/students-data.js`. Each entry supports:

- `name`
- `photo`
- `hometown`
- `studies`
- `interests`
- `shortBio`
- `approved`

Place approved photographs in `docs/assets/images/students/` and set a relative path such as `assets/images/students/student-01.jpg`. Obtain informed consent before publishing identifiable student information.

## Add teaching-team details

Edit `docs/assets/js/team-data.js`. Add approved names, biographies, photographs, expertise and support hours.

## Edit module outlines

All weekly outlines are stored in `docs/assets/js/modules.js`.

## Branding

The prototype uses an ARU-inspired navy, red, muted-gold and warm off-white palette, but does not bundle protected institutional logos. Insert approved ARU and CJLU brand assets only in accordance with both institutions' brand guidance.
