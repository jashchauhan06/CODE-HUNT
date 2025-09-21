-- STEP 4: Insert sample data and create functions (run this fourth)
-- Copy and paste this into Supabase SQL Editor

-- Insert sample event data
INSERT INTO events (name, description, start_at, end_at, location, cover_url, max_participants, registration_open) VALUES
('CODE HUNT X DEMON SLAYER', 'An exciting coding competition with anime theme!', '2025-09-23 15:00:00+00', '2025-09-23 18:00:00+00', 'S-08', 'https://example.com/cover.jpg', 50, true);

-- Create function to handle new user signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, full_name)
  VALUES (NEW.id, COALESCE(NEW.raw_user_meta_data->>'full_name', NEW.email));
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create trigger for new user signup
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();
