import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://qtiknlfjwgcshfrcqznk.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF0aWtubGZqd2djc2hmcmNxem5rIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY0NjQ5MjksImV4cCI6MjA1MjA0MDkyOX0.To8YV4WJK9B9uD63UgIfeDDK7Rl8SEtD-EW-KOr8Kk0';

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(
  supabaseUrl,
  supabaseAnonKey,
  {
    auth: {
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: true,
      storage: localStorage,
      storageKey: 'supabase.auth.token'
    },
    realtime: {
      params: {
        eventsPerSecond: 10
      }
    },
    global: {
      headers: {
        'X-Client-Info': 'dumroo-ai@0.1.0'
      }
    }
  }
);

// Set up auth state change listener
supabase.auth.onAuthStateChange((event, session) => {
  if (event === 'SIGNED_IN') {
    console.log('User signed in successfully');
  } else if (event === 'SIGNED_OUT') {
    // Clear any cached data
    localStorage.removeItem('auth-storage');
    localStorage.removeItem('chat-storage');
    localStorage.removeItem('library-storage');
  } else if (event === 'TOKEN_REFRESHED') {
    console.log('Token refreshed successfully');
  }
});

// Add health check function
export async function checkSupabaseConnection() {
  try {
    const { error } = await supabase.from('users').select('count').limit(1).single();
    return !error;
  } catch (err) {
    console.error('Supabase health check failed:', err);
    return false;
  }
}