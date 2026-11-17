# Yanzi Liu’s homepage

Personal academic website: https://yanziliu.github.io/

A buildless HTML, CSS, and JavaScript site hosted by GitHub Pages. The layout is independently recreated from [Sihan Xu’s homepage](https://sihanxu.me/) with Yanzi Liu’s own information and research assets.

## Edit the site

- `index.html`: biography, contact, publications, projects, and the visitor-map slot.
- `style.css`: typography, layout, responsive design, and flip interactions.
- `script.js`: navigation highlighting, touch/keyboard flip controls, and the map toggle.
- `blog/sandbar.html`: the research note.
- `assets/profile.svg`: initials placeholder; replace the image reference in `index.html` to use a personal portrait.
- `assets/SOURCES.md`: research-figure sources and attribution.

The education section contains the degree and subject. No full CV or private application documents are included.

## Preview

From this folder, run `python3 -m http.server 8000`, then visit `http://localhost:8000`.

## Deployment

GitHub Pages publishes the root directory of the `codex/homepage` branch. Push edits to that branch to update the site. No package installation or build step is required.

## Visitor map

The homepage preserves the reference’s expandable map entry. Statistics remain off until the owner creates a ClustrMaps widget for `https://yanziliu.github.io/` and inserts its embed inside `#mapContainer`, replacing the placeholder. Never reuse another website’s widget ID.

## Design and assets

The design reference is credited above. Original reference portrait, publication figures, biography, and analytics IDs are not included. The profile monogram, KCL text monogram, and illustrative covers are SVG assets created for this site; the KCL text monogram is not an official university logo. Research figures retain their original notices documented in `assets/SOURCES.md`.
