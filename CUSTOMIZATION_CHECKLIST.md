# R.A.T. Museum Customization Checklist

Before going live, customize these items for your specific project:

## Required Customizations

### 1. Email Address

- [ ] Open `index.html`
- [ ] Find `e.c.m.vazquez@gmail.com` (appears twice)
- [ ] Replace with your actual email address
- [ ] The subject line filter `RAT%20Museum%20Inquiry` will help you filter emails in Gmail

### 2. About Page Content

- [ ] Open `about.md`
- [ ] Replace placeholder text with your actual story
- [ ] Fill in "How It Started" section
- [ ] Add details about your physical space
- [ ] Update community impact section (optional)

### 3. Exhibition Content

- [ ] Edit files in `_exhibitions/` directory
- [ ] Replace example exhibitions with your real exhibitions
- [ ] Update titles, artists, dates, descriptions, and excerpts
- [ ] Add your exhibition images to `assets/images/`
- [ ] Make sure only ONE exhibition has `is_current: true`

### 4. Location/Context

- [ ] Open `index.html`
- [ ] Update "Located somewhere in your neighborhood" with your actual location
  - e.g., "Located in Downtown Portland" or "Found at 123 Main Street"

### 5. GitHub Repository Setup (When Ready to Deploy)

- [ ] Update `_config.yml` with your repository name
  - Change `baseurl: ""` to `baseurl: "/your-repo-name"`
  - Change `url: ""` to `url: "https://yourusername.github.io"`

## Optional Customizations

### Colors (if you want a different palette)

- [ ] Edit `_sass/_variables.scss`
- [ ] Update color values:
  - `$accent-bright` - Main accent color
  - `$accent-secondary` - Secondary accent
  - `$accent-cool` - Cool accent
  - `$accent-purple` - Purple accent

### Guidelines (contribution requirements)

- [ ] Edit `index.html`, section "Want to Contribute?"
- [ ] Update the size requirements if different from 4" x 4"
- [ ] Adjust accepted mediums if needed

### Footer Tagline

- [ ] Edit `_includes/footer.html`
- [ ] Update "Big art in tiny places" to your preferred tagline

## Adding Exhibition Images

To add images to exhibitions:

1. Place image files in `assets/images/`
2. In the exhibition markdown file (`_exhibitions/your-exhibition.md`), update the front matter:
   ```yaml
   image: "/assets/images/your-image-name.jpg"
   ```
3. Supported formats: .jpg, .png, .gif, .svg
4. See `assets/images/README.md` for image guidelines

## Testing Before Deploy

- [ ] Test all navigation links (Home, About, Exhibitions, Contribute, Contact)
- [ ] Click through to individual exhibition pages
- [ ] Test "View All Exhibitions" button on homepage
- [ ] Test "Back to All Exhibitions" on individual pages
- [ ] Test email link opens your email client correctly
- [ ] View on mobile (resize browser or use dev tools)
- [ ] Check that exhibitions display properly with/without images
- [ ] Verify colors work well together

## When You're Ready to Deploy

Follow the deployment instructions in `README.md`

---

**Note:** You can delete this file once you've completed your customizations!
