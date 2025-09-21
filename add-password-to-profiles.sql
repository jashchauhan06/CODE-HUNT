-- Add password field to profiles table
-- Run this in your Supabase SQL Editor

-- Add password column to profiles table
ALTER TABLE profiles ADD COLUMN IF NOT EXISTS password VARCHAR(255);

-- Add a comment to explain the field
COMMENT ON COLUMN profiles.password IS 'User password (stored for registration purposes)';

-- Update the profiles table to allow password storage
-- Note: This is for demonstration purposes only
-- In production, passwords should be hashed before storage
