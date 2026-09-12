# Yajie Hé — Portfolio

Complete, ready-to-publish static portfolio with the homepage and four case studies: Fleet Admin, Florida Resource Map, Aqui Beirut, and Maynooth Furniture.

## Publish to GitHub Pages — no installation needed

1. Unzip this download on your computer.
2. Create a public repository on GitHub. Name it `YOUR-USERNAME.github.io` for your main portfolio address, or use any other name such as `portfolio`.
3. Upload the **contents** of this folder into the repository. `index.html`, `assets`, `portfolio`, and `work` must be at the repository's top level. Do not upload the ZIP itself or place everything inside an extra folder.
4. Open **Settings → Pages**.
5. Under **Source**, select **Deploy from a branch**. Select **main** and **/(root)**, then Save.
6. Wait for GitHub to display the published address. For a repository named `YOUR-USERNAME.github.io`, it is `https://YOUR-USERNAME.github.io/`. For `portfolio`, it is `https://YOUR-USERNAME.github.io/portfolio/`.

Relative links support both address formats, including case-study pages and images. Upload the `.nojekyll` file too when possible. No build command, Node server, or API keys are required for the supplied HTML.

Because there are many images, GitHub Desktop is the easiest upload method: clone your empty GitHub repository, copy this folder's contents into it, commit, and click Push origin. The browser uploader may require several batches.

Official publishing instructions: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## Files

- `index.html` — Homepage.
- `work/*/index.html` — Four complete case studies.
- `assets/site.css` — Complete compiled stylesheet used by the current site.
- `assets/custom.css` — A convenient place to add style overrides.
- `assets/site.js` — Small keyboard-focus enhancement; navigation works without JavaScript.
- `portfolio/` — Local design images and prototype animation used by the site.
- `favicon.svg` — Site icon.
- `src/app/` — Editable React/TypeScript page source and original CSS reference files.
- `scripts/build.mjs` — Optional script to regenerate the HTML from the page source.
- `package.json` and `package-lock.json` — Optional rebuild dependencies.

## Edit the site

**Simplest:** edit the HTML files directly, change styles in `assets/custom.css`, and replace images in `portfolio/`. Commit and push your edits; GitHub Pages republishes them.

**Source workflow:** install Node.js 22 or newer, open a terminal in this folder, then run:

```sh
npm ci
npm run build
```

Edit text/layout in `src/app/page.tsx` or `src/app/work/*/page.tsx`, then rebuild. The build overwrites the five HTML pages. Do not mix direct HTML edits with source rebuilds unless you also copy your edits into the source.

The export uses the checked-in `assets/site.css`, preserving the original compiled design. Source CSS files are included for reference; editing them alone does not recompile CSS. For styling changes, edit `assets/custom.css` or `assets/site.css` directly.

For a local preview, open `index.html` in your browser, or run `python3 -m http.server 8000` from this folder and open `http://localhost:8000`.

## External links and media

The site images and existing Fleet Admin GIF are included. Résumé, LinkedIn, email, original Wix references, and external Figma prototype links retain their current destinations. The original prototype movie is not present in the current site source; the animation used on the live site is included.

This download is a standalone export. It does not alter the currently hosted portfolio. There are no ChatGPT hosting credentials or server requirements in this package.
