-- Fix registration table to work without authentication
-- Run this in your Supabase SQL Editor

-- First, drop the foreign key constraint on user_id
ALTER TABLE registrations DROP CONSTRAINT IF EXISTS registrations_user_id_fkey;

-- Make user_id nullable and remove the foreign key reference
ALTER TABLE registrations ALTER COLUMN user_id DROP NOT NULL;

-- Update the column to allow any UUID or NULL
ALTER TABLE registrations ALTER COLUMN user_id TYPE UUID;

-- Optional: Add a comment to explain the change
COMMENT ON COLUMN registrations.user_id IS 'User ID from auth.users (nullable for anonymous registrations)';

-- Insert the test event if it doesn't exist
INSERT INTO events (id, name, description, start_at, end_at, location, cover_url, max_participants, registration_open) 
VALUES (
  '00000000-0000-0000-0000-000000000001',
  'CODE HUNT X DEMON SLAYER',
  'An exciting coding competition with anime theme!',
  '2025-09-23 15:00:00+00',
  '2025-09-23 18:00:00+00',
  'S-08',
  'https://example.com/cover.jpg',
  50,
  true
) ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  description = EXCLUDED.description,
  start_at = EXCLUDED.start_at,
  end_at = EXCLUDED.end_at,
  location = EXCLUDED.location,
  cover_url = EXCLUDED.cover_url,
  max_participants = EXCLUDED.max_participants,
  registration_open = EXCLUDED.registration_open;
