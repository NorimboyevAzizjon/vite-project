import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

// Check if Supabase is configured
export const isSupabaseConfigured = supabaseUrl.startsWith('https://') && supabaseAnonKey.length > 0;

// Create a dummy client if not configured to prevent crashes
export const supabase = isSupabaseConfigured 
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

// Warning in console if not configured
if (!isSupabaseConfigured) {
  console.warn(
    '⚠️ Supabase is not configured. Please add your Supabase URL and Anon Key to .env file:\n' +
    'VITE_SUPABASE_URL=https://your-project.supabase.co\n' +
    'VITE_SUPABASE_ANON_KEY=your-anon-key'
  );
}
