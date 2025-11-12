# Icons Directory

This directory contains all app icons.

## Structure

```
public/icons/
├── source/              # Original source icons
│   ├── dice-512-source.png  (512x512px - main source)
│   ├── dice-128-source.png  (128x128px)
│   └── dice-64-source.png   (64x64px)
└── README.md

public/                  # Generated PWA icons (used by app)
├── icon-512.png        (512x512px - main PWA icon)
├── icon-192.png        (192x192px - small PWA icon)
└── apple-touch-icon.png (180x180px - iOS)
```

## Source Icons

The source icons are stored in `source/` folder. The main source icon is `dice-512-source.png` (512x512px).

All other icon sizes are generated from this source icon.

## Generated Icons

The generated icons in the `public/` folder are:
- Used by the PWA manifest
- Automatically included in the build
- Served to users when installing the app

## Android Icons

Android app icons are stored separately in:
`/Users/ashwinkumar.sharma/Projects/dice-roller-pwa/app/src/main/res/mipmap-*/`

These are generated from the same source icon.

## Updating Icons

To update icons:
1. Replace `source/dice-512-source.png` with your new icon (512x512px minimum)
2. Run the icon generation script or manually resize
3. Rebuild the app

