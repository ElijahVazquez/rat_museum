# R.A.T. Museum

**Real Art, Tiny Museum** - A miniature public art gallery showcasing creativity in the smallest of spaces.

This multi-page Jekyll site celebrates tiny art installations with individual pages for each exhibition, making it easy to share and update quarterly.

## Quick Start

### Local Development

Start the Jekyll development server:

```bash
bundle exec jekyll serve
```

Visit **http://127.0.0.1:4000/** in your browser.

Stop the server: `Ctrl+C`

## Site Structure

- **Home** (`/`) - Hero + 2 most recent exhibitions
- **About** (`/about`) - Your museum's story
- **Exhibitions** (`/exhibitions`) - Archive of all exhibitions
- **Individual Exhibition Pages** (`/exhibitions/title/`) - Full details for each exhibition

## Adding a New Exhibition

Each exhibition is a markdown file in the `_exhibitions/` directory with its own page.

### Step 1: Create the Exhibition File

Create a new file in `_exhibitions/` named like: `YYYY-season-title.md`

Example: `_exhibitions/2026-winter-snow-sculptures.md`

### Step 2: Add Front Matter and Content

```markdown
---
title: "Your Exhibition Title"
artist: "Artist Name or Class"
date: 2026-01-15 # YYYY-MM-DD format
is_current: true # Set to true for active exhibition
excerpt: "A short teaser (1-2 sentences) for preview cards"
image: "/assets/images/your-image.jpg"
---

Write the full exhibition description here using Markdown.

## About the Artist

More details...

## Exhibition Details

- **Duration:** Winter 2026
- **Medium:** Sculpture
- **Size:** 2" x 2" each
```

### Step 3: Add Exhibition Image

1. Place your image in `assets/images/`
2. Reference it in the front matter as shown above
3. See `assets/images/README.md` for image guidelines

### Step 4: Update Previous Exhibition

Find the previous current exhibition and change `is_current: true` to `is_current: false`

## Customization

### Update Your Email

In `index.html`, search for `e.c.m.vazquez@gmail.com` and replace it with your actual email address (appears twice).

### Change Colors

Edit `_sass/_variables.scss` to customize the color palette:

- `$accent-bright` - Main accent color (orange/coral)
- `$accent-secondary` - Secondary accent (yellow)
- `$accent-cool` - Cool accent (turquoise)
- `$accent-purple` - Purple accent

## Project Structure

```
├── _config.yml               # Site settings (title, description, collections)
├── _exhibitions/             # Exhibition markdown files - ADD NEW EXHIBITIONS HERE!
│   ├── 2025-fall-miniature-landscapes.md
│   ├── 2025-summer-pocket-poetry.md
│   └── 2025-spring-tiny-portraits.md
├── _layouts/
│   ├── default.html          # Main page template
│   └── exhibition.html       # Individual exhibition page layout
├── _includes/
│   ├── head.html             # HTML head
│   ├── header.html           # Navigation
│   └── footer.html           # Footer
├── _sass/
│   ├── _variables.scss       # Colors, fonts, spacing - EDIT TO CHANGE COLORS
│   ├── _base.scss            # Base styles
│   └── _layout.scss          # Page and section layouts
├── assets/
│   ├── css/main.scss         # Main stylesheet
│   ├── js/main.js            # JavaScript
│   └── images/               # Exhibition images go here
├── index.html                # Homepage
├── about.md                  # About page - ADD YOUR STORY HERE!
└── exhibitions.html          # Exhibition archive page
```

## Deploying to GitHub Pages

### Step 1: Create GitHub Repository

1. Create a new repository on GitHub (e.g., `rat-museum`)
2. Don't initialize with README (you already have one)

### Step 2: Update Configuration

Edit `_config.yml`:

```yaml
baseurl: "/rat-museum" # Your repo name
url: "https://yourusername.github.io" # Your GitHub username
```

### Step 3: Push to GitHub

```bash
git init
git add .
git commit -m "Initial R.A.T. Museum site"
git branch -M main
git remote add origin https://github.com/yourusername/rat-museum.git
git push -u origin main
```

### Step 4: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** > **Pages**
3. Under "Source", select branch: `main` and folder: `/ (root)`
4. Click **Save**

Your site will be live at: `https://yourusername.github.io/rat-museum/`

## Tips

- **Test locally first**: Always run `bundle exec jekyll serve` to preview changes
- **Commit often**: Use git to track changes
- **Keep it simple**: The beauty of this setup is its simplicity - resist adding complexity!
- **Archive everything**: Never delete old exhibitions from `_data/exhibitions.yml`, just set `is_current: false`

## Support

- [Jekyll Documentation](https://jekyllrb.com/docs/)
- [GitHub Pages Docs](https://docs.github.com/en/pages)
- [Liquid Templating](https://shopify.github.io/liquid/)

---

**Made with ❤️ for tiny art everywhere**
