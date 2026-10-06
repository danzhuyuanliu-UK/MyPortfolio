# Zhuyuan Liu — Visual & Spatial Practice

A standalone, buildless portfolio for GitHub Pages. Open `index.html` directly or serve this folder locally. No package installation, build step, third-party fonts, analytics or remote image dependencies.

## Preview

Run `python -m http.server 8000` inside this folder, then open http://localhost:8000. The film link opens the existing YouTube film; all site images and four PDFs are local.

## Deploy to a NEW GitHub Pages repository

1. Create a new repository (for example `visual-practice`). This project does not modify either existing site.
2. Upload the CONTENTS of this folder to the repository root, retaining `assets/` and `.nojekyll`.
3. In repository Settings → Pages, choose **Deploy from a branch**, `main`, and `/ (root)`.
4. The site will be available at `https://danzhuyuanliu-uk.github.io/visual-practice/` if that repository name is used.

All site paths are relative, so project Pages paths work without configuration. A custom domain is optional; no CNAME is included.

## Files and maintenance

- `index.html`: semantic content, project sections, captions, CV and document links. Content remains accessible without JavaScript.
- `style.css`: responsive design, colour tokens, typography, reduced-motion support.
- `script.js`: native modal image viewer, Escape support and focus restoration.
- `assets/images/`: 640, 1280 and 1920 pixel WebP variants. `srcset` selects appropriate sizes; all images retain their complete source composition and original aspect ratio, including the hero, project cards, film still and galleries.
- `assets/documents/`: exact supplied portfolio, two project books and CV, copied without editing.
- `ASSET-SOURCES.md`: PDF page and embedded-image provenance.
- `favicon.svg` and `.nojekyll`: local icon and GitHub Pages configuration.

Edit text directly in `index.html`. Keep dates, contributions and awards aligned with the source CV. When replacing an image, use the complete original without cropping; update all three variants, its caption/alt text and provenance. Availability is explicitly October 2026 and should be updated as needed.

## Editorial approach

Works is the primary reference: dark editorial typography, numbered projects, large images and progressive disclosure. The Creative Technologist reference informs document access. Sculpture and drawing stand alongside spatial media, film and professional practice. Software appears at a deeper reading level. Team projects are credited to Foster + Partners and individual contributions are described separately.

The PDFs are the factual source of truth. The film URL is retained from the public Works reference. No Curtain Call and Within Katla are omitted because the supplied current PDFs do not provide project-specific material for them. Artistic studies are presented without invented titles, dates or commissions. Full project books are supplied for detailed technical review; the site selects their visual/physical process material rather than reproducing every page.

## Validation

Checked local asset paths, internal anchors, HTML structure, image loading, browser layout at mobile and desktop widths, project disclosures and modal close/focus behaviour. GitHub publication has not been performed.
