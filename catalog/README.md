# Codelabs Catalog

A modern, lightweight static catalog for browsing codelabs.

## Features

- 🎨 **Modern Design** - Clean, responsive card-based layout
- 🔍 **Instant Search** - Real-time search across titles, summaries, categories, and tags
- 🏷️ **Filter & Sort** - Filter by category, sort by title/date/duration
- 🌓 **Dark Mode** - Automatic theme switching with persistence
- 📱 **Responsive** - Works perfectly on mobile, tablet, and desktop
- ⚡ **Zero Dependencies** - Pure HTML/CSS/JS, no frameworks needed
- 🚀 **Static** - No server required, works on file:// protocol

## Quick Start

### Setup Workflow

1. **Download/Clone** this catalog folder
2. **Navigate** into the catalog directory:

   ```bash
   cd catalog
   ```

3. **Create** a `codelabs` folder inside catalog:

   ```bash
   mkdir codelabs
   ```

4. **Write** your codelab markdown files (anywhere you like)
5. **Export** them into the codelabs folder:

   ```bash
   claat export -o ./codelabs your-tutorial.md
   ```

6. **Build** the index:

   ```bash
   node build-index.js
   ```

7. **Serve** the catalog:

   ```bash
   # Using Python
   python -m http.server 8000

   # Using Node.js
   npx http-server

   # Or just open index.html in your browser
   ```

## File Structure

```
catalog/
├── index.html         # Main catalog page
├── style.css          # Styles (light/dark theme)
├── app.js             # Search/filter/sort logic
├── build-index.js     # Index generator script
├── codelabs.json      # Generated index file
├── README.md          # This file
└── codelabs/          # Your exported codelabs go here
    ├── tutorial-1/
    │   ├── index.html
    │   └── codelab.json
    └── tutorial-2/
        ├── index.html
        └── codelab.json
```

## Build Index Options

```bash
# Default: scan ./codelabs, write to codelabs.json
node build-index.js

# Custom directories
node build-index.js /path/to/codelabs output.json

# Example: scan external directory
node build-index.js ../my-codelabs codelabs.json
```

## Integration with CLAAT

### Automatic Index Updates

Add to your build script:

```bash
#!/bin/bash
# Export all markdown files to codelabs directory
claat export -o ./codelabs *.md

# Rebuild catalog index
node build-index.js
```
