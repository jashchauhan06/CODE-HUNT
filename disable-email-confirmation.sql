-- Disable email confirmation in Supabase
-- Run this in your Supabase SQL Editor

-- Update auth settings to disable email confirmation
UPDATE auth.config 
SET 
  enable_signup = true,
  enable_email_confirmations = false,
  enable_email_change_confirmations = false
WHERE id = 1;

-- Alternative: If the above doesn't work, try this approach
-- Go to Authentication > Settings in your Supabase dashboard
-- and uncheck "Enable email confirmations"

-- Also ensure that email validation is not too strict
-- You can also check Authentication > Settings > Email Templates
-- and make sure the validation rules are not blocking common email formats
