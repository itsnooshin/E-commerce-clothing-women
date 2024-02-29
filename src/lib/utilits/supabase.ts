import { createClient } from '@supabase/supabase-js';
const supabaseUrl = 'https://vbvdajzlbaysznoviuwa.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZidmRhanpsYmF5c3pub3ZpdXdhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDcyMDU3NTksImV4cCI6MjAyMjc4MTc1OX0.T8lPw1urPvFDpAKi1irXxYIdO-G45YXGSbRL3UZTo4U';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
