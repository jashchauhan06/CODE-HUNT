# Netlify Deployment Guide

## 🚀 Deploy to Netlify

### Method 1: Connect GitHub Repository (Recommended)

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/your-repo-name.git
   git push -u origin main
   ```

2. **Deploy on Netlify:**
   - Go to [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Connect your GitHub account
   - Select your repository
   - Configure build settings:
     - **Build command:** `npm run build`
     - **Publish directory:** `dist`
   - Click "Deploy site"

### Method 2: Drag & Drop Deployment

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Deploy:**
   - Go to [netlify.com](https://netlify.com)
   - Drag the `dist` folder to the deploy area
   - Your site will be live!

### Method 3: Netlify CLI

1. **Install Netlify CLI:**
   ```bash
   npm install -g netlify-cli
   ```

2. **Login and deploy:**
   ```bash
   netlify login
   netlify deploy --prod --dir=dist
   ```

## 🔧 Environment Variables

Add these environment variables in Netlify dashboard:

1. Go to **Site settings** → **Environment variables**
2. Add:
   - `REACT_APP_SUPABASE_URL` = `https://wbdsynyrxlkvrkzpfopc.supabase.co`
   - `REACT_APP_SUPABASE_ANON_KEY` = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndiZHN5bnlyeGxrdnJrenBmb3BjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg0NzA4NDcsImV4cCI6MjA3NDA0Njg0N30.Jyo2g1JZhBiRKguliEWO7p219__AcV-f9fXDmIG6ps4`

## 📁 Project Structure

```
your-project/
├── public/
│   └── _redirects          # Netlify redirects for SPA
├── src/
│   ├── components/         # React components
│   ├── styles/            # CSS files
│   ├── lib/               # Supabase configuration
│   └── contexts/          # React contexts
├── netlify.toml           # Netlify configuration
├── package.json           # Dependencies
└── webpack.config.js      # Build configuration
```

## ✅ Features Included

- ✅ **Client-side routing** - Works with Netlify redirects
- ✅ **Supabase integration** - Database and authentication
- ✅ **Responsive design** - Mobile-friendly
- ✅ **Team registration** - Complete registration system
- ✅ **User dashboard** - View team members
- ✅ **Authentication** - Login/signup system

## 🔍 Troubleshooting

### Common Issues:

1. **404 on refresh:** Fixed with `_redirects` file
2. **Environment variables:** Make sure they're set in Netlify dashboard
3. **Build fails:** Check Node.js version (use 18)
4. **Supabase errors:** Verify API keys are correct

### Build Commands:

```bash
# Install dependencies
npm install

# Build for production
npm run build

# Test locally
npm run dev
```

## 🌐 Live URL

After deployment, your site will be available at:
`https://your-site-name.netlify.app`

## 📞 Support

If you encounter any issues:
1. Check the build logs in Netlify dashboard
2. Verify environment variables are set
3. Ensure all dependencies are installed
4. Check browser console for errors
