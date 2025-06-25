# Matt Whalley - Portfolio Site

A modern, minimal portfolio website built with Astro, React, and Tailwind CSS. Features a clean design showcasing projects, experience, and real-time Spotify integration.

## ✨ Features

- **Modern Tech Stack**: Built with Astro 5, React 19, and Tailwind CSS 4
- **Server-Side Rendering**: Optimized performance with Astro's hybrid rendering
- **Spotify Integration**: Real-time display of currently playing or recently played tracks
- **Responsive Design**: Mobile-first approach with clean, accessible UI
- **TypeScript**: Fully typed for better development experience
- **Component Library**: Reusable React components with Phosphor Icons

## 🚀 Tech Stack

- **Framework**: [Astro](https://astro.build/) with React integration
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) v4
- **Type Safety**: TypeScript
- **Icons**: [Phosphor Icons](https://phosphoricons.com/)
- **Deployment**: [Vercel](https://vercel.com/)
- **Package Manager**: pnpm

## 🛠️ Development

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm

### Installation

```bash
# Clone the repository
git clone https://github.com/mttwhlly/mttwhlly.github.io.git
cd mttwhlly.github.io

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

The site will be available at `http://localhost:4321`

### Environment Variables

For Spotify integration, create a `.env` file:

```env
SPOTIFY_CLIENT_ID=your_spotify_client_id
SPOTIFY_CLIENT_SECRET=your_spotify_client_secret
SPOTIFY_REFRESH_TOKEN=your_spotify_refresh_token
```

### Available Scripts

```bash
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm preview      # Preview production build
pnpm format       # Format code with Prettier
```

## 📁 Project Structure

```
/
├── public/           # Static assets
├── src/
│   ├── components/   # React components
│   ├── layouts/      # Astro layouts
│   ├── pages/        # Astro pages & API routes
│   ├── styles/       # Global styles
│   ├── types/        # TypeScript definitions
│   └── utils/        # Utility functions
├── astro.config.mjs  # Astro configuration
└── tailwind.config.js # Tailwind configuration
```

## 🎵 Spotify Setup

To set up the Spotify integration:

1. Create a Spotify app at [Spotify Developer Dashboard](https://developer.spotify.com/dashboard)
2. Get your Client ID and Client Secret
3. Generate a refresh token using the included `spotify-refresh-token-gen.html` tool
4. Add the credentials to your environment variables

## 🚢 Deployment

The site is configured for deployment on Vercel:

```bash
# Deploy with Vercel CLI
vercel

# Or connect your GitHub repo to Vercel dashboard
```

Make sure to add your environment variables in the Vercel project settings.

## 🎨 Customization

### Colors

The site uses a custom "lemonlime" color palette defined in `src/styles/global.css`. Modify the CSS custom properties to change the color scheme.

### Typography

Uses Host Grotesk for sans-serif and Geist Mono for monospaced text, loaded from Google Fonts.

### Components

All components are built with React and styled with Tailwind CSS. They're designed to be reusable and accessible.

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

## 🤝 Contributing

This is a personal portfolio site, but feel free to use it as inspiration for your own projects!

---

Built with ❤️ by [Matt Whalley](https://mattwhalley.com)
