# Hala brand kit

Everything needed to market Hala (hala.khaashub.com) on social media.

- `guide/hala-brand-guidelines.html` — the brand guidelines. Open in any browser; fully self-contained.
- `guide/hala-brand-guidelines.pdf` — the same guide as a shareable PDF.
- `guide/hala-brand-guidelines.docx` — editable working copy of the guidelines text.
- `logo/` — the mark (SVG masters + PNG exports), lockups, and profile avatars.
- `templates/` — ready-to-post designs: 1080×1080 feed cards, 1080×1920 stories, 1200×627 LinkedIn.
- `banners/` — LinkedIn, Facebook and YouTube header images at the correct sizes.
- `copy/sample-posts.md` — starter captions in English and German.
- `copy/profile-kit.md` — bios and profile text for every platform.
- `render/` — editable HTML sources for every image. To change copy and regenerate:

```bash
cd render
npm install            # installs playwright + fonts
node render.js manifest.json
```

(Each template is a plain HTML file — edit the text, re-run, and the PNGs are rebuilt
with the brand's fonts, colours and layout intact.)
