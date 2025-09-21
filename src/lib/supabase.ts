import { createClient } from '@supabase/supabase-js'

// Get environment variables with fallbacks
const getEnvVar = (key: string, fallback: string): string => {
  if (typeof process !== 'undefined' && process.env) {
    const value = process.env[key];
    console.log(`🔍 Environment variable ${key}:`, value ? 'Found' : 'Not found');
    return value || fallback;
  }
  return fallback;
}

// Temporarily hardcode the values to test
const supabaseUrl = 'https://wbdsynyrxlkvrkzpfopc.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndiZHN5bnlyeGxrdnJrenBmb3BjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg0NzA4NDcsImV4cCI6MjA3NDA0Njg0N30.Jyo2g1JZhBiRKguliEWO7p219__AcV-f9fXDmIG6ps4'

// Debug logging
console.log('🔧 Supabase URL:', supabaseUrl);
console.log('🔧 Supabase Key (first 20 chars):', supabaseAnonKey.substring(0, 20) + '...');

// Supabase is configured with hardcoded values
console.log('✅ Supabase configured successfully!');

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Auth helper functions
export const auth = {
  // Sign up with email and password
  signUp: async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    })
    return { data, error }
  },

  // Sign in with email and password
  signIn: async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })
    return { data, error }
  },

  // Sign out
  signOut: async () => {
    const { error } = await supabase.auth.signOut()
    return { error }
  },

  // Get current user
  getCurrentUser: async () => {
    const { data: { user } } = await supabase.auth.getUser()
    return user
  },

  // Listen to auth state changes
  onAuthStateChange: (callback: (event: string, session: any) => void) => {
    return supabase.auth.onAuthStateChange(callback)
  }
}

// Database helper functions
export const db = {
  // Get all events
  getEvents: async () => {
    const { data, error } = await supabase
      .from('events')
      .select('*')
      .order('created_at', { ascending: false })
    return { data, error }
  },

  // Get event by ID
  getEvent: async (id: string) => {
    const { data, error } = await supabase
      .from('events')
      .select('*')
      .eq('id', id)
      .single()
    return { data, error }
  },

  // Create event registration
  createRegistration: async (registrationData: any) => {
    const { data, error } = await supabase
      .from('registrations')
      .insert([registrationData])
      .select()
    return { data, error }
  },

  // Get user registrations
  getUserRegistrations: async (userId: string) => {
    // First try to get registrations by user_id
    const { data: userRegistrations, error: userError } = await supabase
      .from('registrations')
      .select('*')
      .eq('user_id', userId)
      .order('created_at', { ascending: false })
    
    if (userError) {
      return { data: null, error: userError }
    }

    // If no registrations found by user_id, try to find by email
    if (!userRegistrations || userRegistrations.length === 0) {
      // Get user email from auth
      const { data: { user } } = await supabase.auth.getUser()
      if (user?.email) {
        const { data: emailRegistrations, error: emailError } = await supabase
          .from('registrations')
          .select('*')
          .eq('member1_email', user.email)
          .order('created_at', { ascending: false })
        
        if (emailError) {
          return { data: null, error: emailError }
        }

        // If we found registrations by email, update them to link to user_id
        if (emailRegistrations && emailRegistrations.length > 0) {
          const { error: updateError } = await supabase
            .from('registrations')
            .update({ user_id: userId })
            .eq('member1_email', user.email)
            .is('user_id', null)
          
          if (updateError) {
            console.error('Error linking registrations to user:', updateError)
          }
          
          return { data: emailRegistrations, error: null }
        }
      }
    }

    return { data: userRegistrations, error: null }
  },

  // Update registration
  updateRegistration: async (id: string, updates: any) => {
    const { data, error } = await supabase
      .from('registrations')
      .update(updates)
      .eq('id', id)
      .select()
    return { data, error }
  },

  // Delete registration
  deleteRegistration: async (id: string) => {
    const { data, error } = await supabase
      .from('registrations')
      .delete()
      .eq('id', id)
    return { data, error }
  },

  // Update user profile
  updateProfile: async (userId: string, profileData: { full_name?: string, phone?: string, college?: string, year_of_study?: number, password?: string }) => {
    const { data, error } = await supabase
      .from('profiles')
      .update(profileData)
      .eq('id', userId)
    return { data, error }
  },

  // Debug function to check all registrations
  getAllRegistrations: async () => {
    const { data, error } = await supabase
      .from('registrations')
      .select('*')
      .order('created_at', { ascending: false })
    return { data, error }
  }
}
