# 🚀 Netlify Deployment Checklist

## ✅ Pre-Deployment Checklist

### 1. Project Setup
- [x] `netlify.toml` configuration file created
- [x] `_redirects` file for SPA routing created
- [x] `.gitignore` file created
- [x] Build script working (`npm run build`)
- [x] All dependencies installed

### 2. Environment Variables
- [ ] Set `REACT_APP_SUPABASE_URL` in Netlify dashboard
- [ ] Set `REACT_APP_SUPABASE_ANON_KEY` in Netlify dashboard

### 3. Database Setup
- [ ] Run `add-password-to-profiles.sql` in Supabase
- [ ] Run `fix-registration-table.sql` in Supabase
- [ ] Run `insert-test-event.sql` in Supabase
- [ ] Disable email confirmation in Supabase dashboard

## 🚀 Deployment Methods

### Method 1: GitHub Integration (Recommended)
1. [ ] Push code to GitHub repository
2. [ ] Connect repository to Netlify
3. [ ] Set build command: `npm run build`
4. [ ] Set publish directory: `dist`
5. [ ] Add environment variables
6. [ ] Deploy!

### Method 2: Drag & Drop
1. [ ] Run `npm run build`
2. [ ] Drag `dist` folder to Netlify
3. [ ] Add environment variables in dashboard
4. [ ] Deploy!

### Method 3: Netlify CLI
1. [ ] Install Netlify CLI: `npm install -g netlify-cli`
2. [ ] Login: `netlify login`
3. [ ] Deploy: `netlify deploy --prod --dir=dist`

## 🔧 Post-Deployment

### 1. Test Your Site
- [ ] Visit your Netlify URL
- [ ] Test navigation (home, register, login, dashboard)
- [ ] Test registration form
- [ ] Test login functionality
- [ ] Test dashboard display

### 2. Verify Features
- [ ] CSI logo displays correctly
- [ ] Registration form works
- [ ] Login redirects to dashboard
- [ ] Dashboard shows team data
- [ ] All routes work (no 404 errors)

### 3. Environment Variables
- [ ] Supabase connection working
- [ ] Database queries successful
- [ ] Authentication working

## 🐛 Troubleshooting

### Common Issues:
1. **404 on refresh** → Check `_redirects` file
2. **Build fails** → Check Node.js version (use 18)
3. **Supabase errors** → Verify API keys
4. **Styling issues** → Check CSS file paths

### Debug Steps:
1. Check Netlify build logs
2. Check browser console for errors
3. Verify environment variables
4. Test locally first

## 📞 Support

If you encounter issues:
1. Check the build logs in Netlify
2. Verify all environment variables are set
3. Ensure database is properly configured
4. Test each feature individually

## 🎉 Success!

Once deployed, your site will be live at:
`https://your-site-name.netlify.app`

**Features included:**
- ✅ Event landing page
- ✅ Team registration system
- ✅ User authentication
- ✅ Dashboard with team data
- ✅ Responsive design
- ✅ Supabase integration
