// Event-related types
export interface Event {
  api_id: string;
  calendar_api_id: string;
  cover_url: string;
  end_at: string;
  event_type: 'independent';
  hide_rsvp: boolean;
  location_type: 'offline';
  name: string;
  one_to_one: boolean;
  recurrence_id: string | null;
  show_guest_list: boolean;
  start_at: string;
  timezone: string;
  url: string;
  user_api_id: string;
  visibility: 'public';
  waitlist_enabled: boolean;
  virtual_info: {
    has_access: boolean;
  };
  geo_address_info: {
    type: 'manual';
    address: string;
    mode: 'shown';
  };
  geo_address_visibility: 'public';
  coordinate: null;
  description_mirror?: {
    type: 'doc';
    content: any[];
  };
}

export interface Calendar {
  access_level: 'public';
  api_id: string;
  avatar_url: string;
  coordinate: null;
  cover_image_url: string;
  description_short: string | null;
  event_submission_restriction: 'none';
  geo_city: null;
  geo_country: null;
  geo_region: null;
  google_measurement_id: null;
  instagram_handle: null;
  is_blocked: boolean;
  launch_status: 'launched';
  linkedin_handle: null;
  plus_active: boolean;
  meta_pixel_id: null;
  name: string;
  personal_user_api_id: string;
  refund_policy: null;
  show_subscriber_count: boolean;
  slug: null;
  social_image_url: null;
  stripe_account_id: null;
  tax_config: null;
  tiktok_handle: null;
  timezone: null;
  tint_color: string;
  track_meta_ads: boolean;
  twitter_handle: null;
  verified_at: null;
  website: null;
  youtube_handle: null;
  payment_methods: any[];
  solana_treasury_address: null;
  charges_enabled: null;
  is_personal: boolean;
}

export interface Host {
  api_id: string;
  avatar_url: string;
  bio_short: string | null;
  instagram_handle: string | null;
  last_online_at: string | null;
  linkedin_handle: string | null;
  name: string;
  tiktok_handle: string | null;
  timezone: string;
  twitter_handle: string | null;
  username: string | null;
  website: string | null;
  youtube_handle: string | null;
  is_visible: boolean;
  access_level: 'manager';
}

export interface FeaturedGuest {
  api_id: string;
  avatar_url: string;
  bio_short: string | null;
  instagram_handle: string | null;
  last_online_at: string | null;
  linkedin_handle: string | null;
  name: string;
  tiktok_handle: string | null;
  timezone: string;
  twitter_handle: string | null;
  username: string | null;
  website: string | null;
  youtube_handle: string | null;
}

export interface TicketType {
  api_id: string;
  cents: number | null;
  currency: string | null;
  description: string | null;
  ethereum_token_requirements: any[];
  event_api_id: string;
  is_flexible: boolean;
  is_hidden: boolean;
  max_capacity: number | null;
  membership_restriction: string | null;
  min_cents: number | null;
  position: string;
  name: string;
  require_approval: boolean;
  type: 'free';
  valid_end_at: string | null;
  valid_start_at: string | null;
  num_tickets_registered: number;
  currency_info: null;
  num_guests: number;
  is_disabled: boolean;
}

export interface RegistrationQuestion {
  id: string;
  label: string;
  options?: string[];
  required: boolean;
  question_type: 'dropdown' | 'text';
}

export interface EventData {
  kind: 'event';
  data: {
    api_id: string;
    accepts_usdc_for_usd: boolean;
    calendar: Calendar;
    meta_pixel_id: null;
    coupon: null;
    google_measurement_id: null;
    stripe_account_id: null;
    payment_methods: any[];
    event: Event;
    start_at: string;
    guest_data: {
      email: null;
      name: null;
      ticket_key: null;
      approval_status: null;
      proxy_key: null;
      event_tickets: any[];
      payments: any[];
    };
    featured_guests: FeaturedGuest[];
    has_available_ticket_types: boolean;
    refund_policy: null;
    guest_count: number;
    ticket_count: number;
    hosts: Host[];
    referred_by: null;
    cover_image: {
      vibrant_color: null;
      colors: string[];
    };
    sessions: any[];
    ticket_types: TicketType[];
    featured_infos: any[];
    categories: any[];
    ticket_info: {
      price: null;
      is_free: boolean;
      max_price: null;
      is_sold_out: boolean;
      spots_remaining: number;
      is_near_capacity: boolean;
      require_approval: boolean;
      currency_info: null;
    };
    subscribed_to_calendar: boolean;
    event_invite: null;
    role: null;
    sold_out: boolean;
    locale: string;
    theme_meta: {
      theme: 'warp';
    };
    tint_color: string;
    can_register_for_multiple_tickets: boolean;
    font_title: string;
    description_mirror: {
      type: 'doc';
      content: any[];
    };
    eth_address_requirement: null;
    name_requirement: 'full-name';
    phone_number_requirement: 'required';
    solana_address_requirement: null;
    registration_questions: RegistrationQuestion[];
    is_flagged: boolean;
    show_unlock_code_option: boolean;
    membership_tiers: any[];
    membership_info: null;
  };
}

export interface TicketInfo {
  price: number | null;
  is_free: boolean;
  max_price: number | null;
  is_sold_out: boolean;
  spots_remaining: number;
  is_near_capacity: boolean;
  require_approval: boolean;
  currency_info: null;
}

export interface AppProps {
  initialUserData: null;
  randomSeed: number;
  countryCode: string;
  latitude: string;
  longitude: string;
  sha: string;
  initialLocale: string;
  initialMessages: null;
  pageProps: {
    initialData: EventData;
  };
}
