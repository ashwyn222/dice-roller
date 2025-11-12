# 3D Dice Roller PWA

A Progressive Web App featuring a 3D dice with smooth rolling animations and 9 customizable themes across Light, Metallic, and Dark categories. Optimized for mobile devices with haptic feedback and PWA support.

## Features

### 🎲 3D Dice Design
- Clean dice with sharp edges and borders
- Smooth 3D rotation animation when rolling
- Minimalist, distraction-free interface
- Haptic feedback on roll

### 🎨 Customizable Themes
Choose from 9 beautiful themes across 3 categories:

**Light Themes:**
- Classic - Clean, professional look with soft gradients
- Sky - Fresh blue sky theme with light tones
- Vibrant - Bold purple gradient with golden accents

**Metallic Themes:**
- Silver - Sleek silver metallic finish with radial gradients
- Gold - Luxurious gold metallic appearance
- Bronze - Warm bronze metallic design

**Dark Themes:**
- Neon - Futuristic cyberpunk style with cyan accents
- Matte - Sleek monochrome design with purple accents
- Midnight - Deep blue ocean theme with yellow highlights

### 📱 Mobile Optimized
- Responsive design for all screen sizes
- Haptic feedback (vibration) on dice roll
- Touch-optimized interactions
- Portrait mode optimized
- Smooth transitions and animations

### ⚡ Progressive Web App
- Install to home screen
- Works offline with Service Worker
- Fast loading and performance
- Native app-like experience

## Getting Started

### Prerequisites
- Node.js 18+ and npm/yarn/pnpm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

4. Preview production build:
```bash
npm run preview
```

## How to Use

1. **Roll the Dice**: Tap the dice to roll
2. **Change Themes**: Tap the settings icon (⚙️) in the top-right corner
3. **Select Theme**: Choose from 9 available themes organized in 3 categories (Light, Metallic, Dark)
4. **Install App**: Follow the browser prompt to add to your home screen

## Technical Stack

- **React** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Motion** (Framer Motion) - Smooth animations
- **Tailwind CSS** - Styling
- **Vite PWA Plugin** - PWA functionality

## PWA Features

- Service Worker for offline functionality
- Web App Manifest for installation
- Responsive viewport configuration
- Mobile-first design approach
- Auto-updating service worker

## Browser Support

Works best on modern browsers with WebGL support:
- Chrome/Edge (recommended for Android)
- Firefox
- Safari (iOS)

## Publishing to Play Store

This PWA can be published to the Google Play Store as a Trusted Web Activity (TWA).

**Updating Existing App:**
- The TWA Android project is in the `android/` folder
- See [SETUP_TWA_IN_PROJECT.md](./SETUP_TWA_IN_PROJECT.md) for setup instructions

**Quick steps:**
1. Deploy your PWA to a live HTTPS URL
2. Initialize TWA in `android/` folder with Bubblewrap
3. Build Android package
4. Upload to Google Play Console

## Project Structure

```
dice-roller/
├── public/          # Static assets and icons
├── src/             # React source code
│   ├── components/  # React components
│   │   ├── DiceRoller.tsx
│   │   ├── Settings.tsx
│   │   ├── ThemeCard.tsx
│   │   └── PWAInstaller.tsx
│   ├── App.tsx      # Main app component
│   ├── main.tsx     # Entry point
│   └── index.css    # Global styles
├── android/         # TWA Android project (for Play Store)
├── dist/            # Built PWA (deployed)
├── index.html       # HTML template
├── vite.config.ts   # Vite configuration
└── package.json     # Dependencies
```

## License

MIT

Enjoy rolling! 🎲
