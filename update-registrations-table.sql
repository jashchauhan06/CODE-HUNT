-- Update registrations table to include email and phone for all 4 team members
-- Run these commands in your Supabase SQL Editor

-- Add email columns for members 2, 3, and 4
ALTER TABLE public.registrations 
ADD COLUMN member2_email VARCHAR(255),
ADD COLUMN member3_email VARCHAR(255),
ADD COLUMN member4_email VARCHAR(255);

-- Add phone columns for members 2, 3, and 4
ALTER TABLE public.registrations 
ADD COLUMN member2_phone VARCHAR(20),
ADD COLUMN member3_phone VARCHAR(20),
ADD COLUMN member4_phone VARCHAR(20);

-- Add indexes for better query performance (optional)
CREATE INDEX IF NOT EXISTS idx_registrations_member2_email ON public.registrations(member2_email);
CREATE INDEX IF NOT EXISTS idx_registrations_member3_email ON public.registrations(member3_email);
CREATE INDEX IF NOT EXISTS idx_registrations_member4_email ON public.registrations(member4_email);

-- Verify the table structure
SELECT column_name, data_type, is_nullable 
FROM information_schema.columns 
WHERE table_name = 'registrations' 
AND table_schema = 'public'
ORDER BY ordinal_position;
