import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://hhlxecyysnmzuofqhfkc.supabase.co'
const supabaseAnonKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhobHhlY3l5c25tenVvZnFoZmtjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTgxNzQwOTMsImV4cCI6MjA3Mzc1MDA5M30.Jb-j2oPRPsGxKmY5TR2_OF5ORi5-srBQBF-rXwVFS6M'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
