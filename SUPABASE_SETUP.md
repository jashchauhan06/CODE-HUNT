# Supabase Setup Instructions

## 1. Create a Supabase Project

1. Go to [supabase.com](https://supabase.com)
2. Sign up or log in to your account
3. Click "New Project"
4. Choose your organization
5. Enter project details:
   - Name: `code-hunt-demon-slayer`
   - Database Password: (create a strong password)
   - Region: Choose closest to your location
6. Click "Create new project"

## 2. Get Your Project Credentials

1. Go to your project dashboard
2. Click on "Settings" in the sidebar
3. Click on "API"
4. Copy the following values:
   - Project URL
   - Project API keys > anon/public key

## 3. Set Up Environment Variables

Create a `.env` file in your project root with:

```env
REACT_APP_SUPABASE_URL=your_project_url_here
REACT_APP_SUPABASE_ANON_KEY=your_anon_key_here
```

## 4. Set Up Database Schema

1. Go to your Supabase project dashboard
2. Click on "SQL Editor" in the sidebar
3. Copy and paste the contents of `supabase-schema.sql`
4. Click "Run" to execute the SQL

## 5. Configure Authentication

1. Go to "Authentication" > "Settings" in your Supabase dashboard
2. Under "Site URL", add: `http://localhost:3001`
3. Under "Redirect URLs", add: `http://localhost:3001/**`
4. Enable "Email" authentication
5. Configure email templates if needed

## 6. Test the Integration

1. Start your development server: `npm run dev`
2. Navigate to the login page
3. Try creating a new account
4. Test login functionality

## Features Included

- ✅ User authentication (sign up, sign in, sign out)
- ✅ Event management
- ✅ Registration system
- ✅ Team registration with multiple members
- ✅ User profiles
- ✅ Row Level Security (RLS) policies
- ✅ Real-time updates

## Database Tables

- `events` - Store event information
- `registrations` - Store team registrations
- `profiles` - Store additional user information

## Next Steps

1. Customize the database schema as needed
2. Add more event management features
3. Implement admin dashboard
4. Add email notifications
5. Set up payment integration (if needed)
