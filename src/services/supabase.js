import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = 'https://nutgdshqznvglmwgxzee.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im51dGdkc2hxem52Z2xtd2d4emVlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTExMzIyNzksImV4cCI6MjAwNjcwODI3OX0.q3iYYFI9O6PWE9YOVH_DK4HvqVpAy-fVxfq2OOOktW4';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
