/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SUPABASE_URL: "https://qtiknlfjwgcshfrcqznk.supabase.co";
  readonly VITE_SUPABASE_ANON_KEY: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF0aWtubGZqd2djc2hmcmNxem5rIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY0NjQ5MjksImV4cCI6MjA1MjA0MDkyOX0.To8YV4WJK9B9uD63UgIfeDDK7Rl8SEtD-EW-KOr8Kk0";
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
