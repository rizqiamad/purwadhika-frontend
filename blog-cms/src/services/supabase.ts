import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://mafzuomcgmwxdyoqdpuc.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1hZnp1b21jZ213eGR5b3FkcHVjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE0NjU3ODAsImV4cCI6MjA0NzA0MTc4MH0.YFyNRYQWfKkwxBaz5Ic29l_mW976vLbJLVR7BTSK3L8'
// const supabaseKey = process.env.SUPABASE_KEY || 'key'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase