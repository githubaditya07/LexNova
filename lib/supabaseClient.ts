import { createClient } from '@supabase/supabase-js'

const url = process.env.NEXT_PUBLIC_SUPABASE_URL
const anon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

// Only create a browser client — avoid running createClient during server-side build
export const supabase = (typeof window !== 'undefined' && url && anon)
	? createClient(url, anon)
	: null
