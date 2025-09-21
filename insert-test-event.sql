-- Insert test event for registration testing
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
