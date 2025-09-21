# CODE HUNT X DEMON SLAYER - Event Page

A React TypeScript event page for CSI Student Branch's coding competition.

## 🚀 Quick Start

### Development
```bash
npm run dev
```
This builds the project in development mode.

### Production Build
```bash
npm run build
```
This creates optimized static files in the `dist` folder.

## 🌐 Netlify Deployment

1. **Build Command**: `npm run build`
2. **Publish Directory**: `dist`
3. **Node Version**: 18+ (recommended)

### Environment Variables (Optional)
If you want to use your own Supabase instance:
- `REACT_APP_SUPABASE_URL`
- `REACT_APP_SUPABASE_ANON_KEY`

## 📁 Project Structure

```
src/
├── components/          # React components
├── contexts/           # React contexts (Auth)
├── images/            # Static images
├── lib/               # Utilities (Supabase)
├── styles/            # CSS files
└── types/             # TypeScript types

dist/                  # Built static files (for deployment)
├── index.html         # Main HTML file
├── bundle.*.js        # JavaScript bundle
└── images/            # Optimized images
```

## ✨ Features

- 🎨 Modern dark theme UI
- 📱 Responsive design
- ⏰ Real-time countdown
- 📝 Registration form
- 🔐 Supabase authentication
- 🎯 Client-side routing

## 🛠️ Tech Stack

- React 18
- TypeScript
- Webpack 5
- Supabase
- CSS3

## 📝 Notes

- No server required for deployment
- All static files are optimized
- Favicon and assets are included
- Ready for Netlify/Vercel/GitHub Pages
