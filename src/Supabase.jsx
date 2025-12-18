
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://qkjskbvybojbbwffysky.supabase.co'
const supabaseKey = 'sb_publishable_XrfZWLRwePmlgZ9RUa_MSg_JiXF51wo'
export const supabase = createClient(supabaseUrl, supabaseKey)