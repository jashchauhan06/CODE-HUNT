// Supabase Configuration
// Replace these with your actual Supabase project credentials

export const supabaseConfig = {
  url: process.env.REACT_APP_SUPABASE_URL || 'https://your-project.supabase.co',
  anonKey: process.env.REACT_APP_SUPABASE_ANON_KEY || 'your-anon-key-here'
}

// Instructions:
// 1. Create a .env file in your project root
// 2. Add the following variables:
//    REACT_APP_SUPABASE_URL=your_actual_supabase_url
//    REACT_APP_SUPABASE_ANON_KEY=your_actual_anon_key
// 3. Restart your development server
