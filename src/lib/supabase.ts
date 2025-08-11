import { createClient } from '@supabase/supabase-js';
import type { Database } from '../types/supabase';

// Use environment variables with fallback
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://qtiknlfjwgcshfrcqznk.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF0aWtubGZqd2djc2hmcmNxem5rIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY0NjQ5MjksImV4cCI6MjA1MjA0MDkyOX0.To8YV4WJK9B9uD63UgIfeDDK7Rl8SEtD-EW-KOr8Kk0';

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Supabase credentials not found. Please check your environment variables.');
}

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true,
    storage: typeof window !== 'undefined' ? localStorage : undefined,
    storageKey: 'supabase.auth.token',
    flowType: 'pkce'
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
});