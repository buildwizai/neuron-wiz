# NeuronWiz

A static site generator that converts Markdown files into interactive mind maps, built with React, Vite, and markmap libraries.

## Features

- 📝 Renders Markdown files as interactive, collapsible mind maps
- 🔍 Fast client-side search with MiniSearch
- 🏷️ Tag-based filtering and organization
- 📤 SVG/PNG export capabilities
- 📱 Responsive design for mobile and desktop
- ⌨️ Keyboard navigation and accessibility features
- 🌙 Light and dark mode support
- ⚡ Performance optimized with lazy-loading and code splitting

## Getting Started

### Prerequisites

- Node.js (v16+)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/neuronwiz.git
cd neuronwiz

# Install dependencies
npm install

# Generate the index file from markdown content
npm run gen-index

# Start the development server
npm run dev
```

### Building for Production

```bash
npm run build
```

The built site will be in the `dist` directory, ready for deployment.

## Adding Content

Add your Markdown files to the `content/` directory. Each file should have YAML frontmatter with the following format:

```markdown
---
title: Your Mind Map Title
description: A brief description of the mind map
tags: [tag1, tag2, tag3]
created: 2025-04-22T10:00:00Z
updated: 2025-04-22T10:00:00Z
---

# Your Top Level Heading

## Section 1
### Subsection 1.1
### Subsection 1.2

## Section 2
### Subsection 2.1
```

### Required Frontmatter Fields

- `title`: The title of the mind map
- `description`: A brief description (shown in the cards on the homepage)

### Optional Frontmatter Fields

- `tags`: Array of tags for filtering and categorization
- `created`: Creation date in ISO format
- `updated`: Last update date in ISO format
- `slug`: Custom URL slug (defaults to a slugified version of the title)

## Markdown Structure

The markdown content is converted to a mind map with the following rules:

- `#` (h1) becomes the root node
- `##` (h2) becomes a direct child of the root
- `###` (h3) becomes a child of the nearest h2, and so on

## Keyboard Shortcuts

- `Ctrl+K` / `Cmd+K`: Focus the search bar
- `F`: Toggle full-screen mode when viewing a mind map
- `Esc`: Exit full-screen mode
- `Arrow Keys`: Navigate between nodes in a mind map
- `Enter` / `Space`: Toggle node expansion

## Accessibility

This project follows WCAG 2.1 guidelines for accessibility:

- All interactive elements are keyboard accessible
- Proper ARIA attributes are included
- Adequate color contrast for text and UI elements
- Screen reader announcements for dynamic content changes

## Project Structure

```
📂 public/               # Static assets
  📂 thumbnails/         # Generated thumbnails for mind maps
  📄 index.json          # Generated metadata index file
📂 scripts/              # Build and utility scripts
  📄 gen-index.js        # Script to generate index.json from content
📂 content/              # Markdown content files
📂 src/                  # React application source
  📂 components/         # React components
  📂 utils/              # Utility functions
  📂 assets/             # Images and other assets
📄 .github/workflows/    # GitHub Actions workflows
```

## CI/CD

This project uses GitHub Actions for CI/CD:

- Automatically builds and deploys to GitHub Pages on push to main
- Generates thumbnails for all mind maps during the build process
- Includes build SHA in footer for version tracking

## License

MIT
