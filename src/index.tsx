import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './styles/index.css';

// Mock data - in a real app, this would come from props or API
const mockAppProps = {
  initialUserData: null,
  randomSeed: 0.0017733042322045645,
  countryCode: "NL",
  latitude: "50.86583",
  longitude: "6.06250",
  sha: "1dabcf9a13e571fc9ad94b9c1184a55448e6bb8e",
  initialLocale: "en",
  initialMessages: null,
  pageProps: {
    initialData: {
      kind: "event" as const,
      data: {
        api_id: "evt-zcPXvy2Kc72fyzj",
        accepts_usdc_for_usd: false,
        calendar: {
          access_level: "public" as const,
          api_id: "cal-dZTLL9lkSiltDrc",
          avatar_url: "https://cdn.lu.ma/avatars-default/community_avatar_8.png",
          coordinate: null,
          cover_image_url: "https://example.com/default-pattern.png",
          description_short: null,
          event_submission_restriction: "none" as const,
          geo_city: null,
          geo_country: null,
          geo_region: null,
          google_measurement_id: null,
          instagram_handle: null,
          is_blocked: false,
          launch_status: "launched" as const,
          linkedin_handle: null,
          plus_active: false,
          meta_pixel_id: null,
          name: "Personal",
          personal_user_api_id: "usr-QcTGFy1CXXOIu1k",
          refund_policy: null,
          show_subscriber_count: false,
          slug: null,
          social_image_url: null,
          stripe_account_id: null,
          tax_config: null,
          tiktok_handle: null,
          timezone: null,
          tint_color: "#F31A7C",
          track_meta_ads: false,
          twitter_handle: null,
          verified_at: null,
          website: null,
          youtube_handle: null,
          payment_methods: [],
          solana_treasury_address: null,
          charges_enabled: null,
          is_personal: true
        },
        meta_pixel_id: null,
        coupon: null,
        google_measurement_id: null,
        stripe_account_id: null,
        payment_methods: [],
        event: {
          api_id: "evt-zcPXvy2Kc72fyzj",
          calendar_api_id: "cal-dZTLL9lkSiltDrc",
          cover_url: "images/cover-image.png",
          end_at: "2025-09-23T11:00:00.000Z",
          event_type: "independent" as const,
          hide_rsvp: false,
          location_type: "offline" as const,
          name: "CODE HUNT X DEMON SLAYER",
          one_to_one: true,
          recurrence_id: null,
          show_guest_list: true,
          start_at: "2025-09-23T09:30:00.000Z",
          timezone: "Asia/Calcutta",
          url: "8jqzfrl9",
          user_api_id: "usr-QcTGFy1CXXOIu1k",
          visibility: "public" as const,
          waitlist_enabled: true,
          virtual_info: {
            has_access: false
          },
          geo_address_info: {
            type: "manual" as const,
            address: "Location: S-02 and S-08",
            mode: "shown" as const
          },
          geo_address_visibility: "public" as const,
          coordinate: null
        },
        start_at: "2025-09-22T09:30:00.000Z",
        guest_data: {
          email: null,
          name: null,
          ticket_key: null,
          approval_status: null,
          proxy_key: null,
          event_tickets: [],
          payments: []
        },
        featured_guests: [
          {
            api_id: "usr-0k3hmiKBUVZ2fV1",
            avatar_url: "https://cdn.lu.ma/avatars-default/avatar_23.png",
            bio_short: null,
            instagram_handle: null,
            last_online_at: null,
            linkedin_handle: null,
            name: "Anuj Dhamankar",
            tiktok_handle: null,
            timezone: "Asia/Kolkata",
            twitter_handle: null,
            username: null,
            website: null,
            youtube_handle: null
          },
          {
            api_id: "usr-3jKbLou8GGHdFej",
            avatar_url: "https://cdn.lu.ma/avatars-default/avatar_5.png",
            bio_short: null,
            instagram_handle: null,
            last_online_at: null,
            linkedin_handle: null,
            name: "Swanandi Thakre",
            tiktok_handle: null,
            timezone: "Asia/Kolkata",
            twitter_handle: null,
            username: null,
            website: null,
            youtube_handle: null
          }
        ],
        has_available_ticket_types: true,
        refund_policy: null,
        guest_count: 27,
        ticket_count: 27,
        hosts: [
          {
            api_id: "usr-QcTGFy1CXXOIu1k",
            avatar_url: "https://cdn.lu.ma/avatars-default/avatar_9.png",
            bio_short: null,
            instagram_handle: null,
            last_online_at: "2025-09-21T14:12:36.972Z",
            linkedin_handle: null,
            name: "HARSH KUMAR",
            tiktok_handle: null,
            timezone: "Asia/Kolkata",
            twitter_handle: null,
            username: null,
            website: null,
            youtube_handle: null,
            is_visible: true,
            access_level: "manager" as const
          },
          {
            api_id: "usr-QjqDljaLu6xhADM",
            avatar_url: "https://cdn.lu.ma/avatars-default/avatar_25.png",
            bio_short: null,
            instagram_handle: null,
            last_online_at: "2025-09-21T13:18:13.388Z",
            linkedin_handle: null,
            name: "Maheen Meshram",
            tiktok_handle: null,
            timezone: "Asia/Kolkata",
            twitter_handle: null,
            username: null,
            website: null,
            youtube_handle: null,
            is_visible: true,
            access_level: "manager" as const
          },
          {
            api_id: "usr-LJSvuqJEVbtOHaz",
            avatar_url: "https://cdn.lu.ma/avatars-default/avatar_2.png",
            bio_short: null,
            instagram_handle: null,
            last_online_at: "2025-09-21T12:29:25.892Z",
            linkedin_handle: null,
            name: "Sparsh Goswami ",
            tiktok_handle: null,
            timezone: "Asia/Kolkata",
            twitter_handle: null,
            username: null,
            website: null,
            youtube_handle: null,
            is_visible: true,
            access_level: "manager" as const
          }
        ],
        referred_by: null,
        cover_image: {
          vibrant_color: null,
          colors: ["#182834", "#fdfdfb", "#31697b", "#73babe"]
        },
        sessions: [],
        ticket_types: [
          {
            api_id: "evtticktyp-NBp6uBTs2JMZdby",
            cents: null,
            currency: null,
            description: null,
            ethereum_token_requirements: [],
            event_api_id: "evt-zcPXvy2Kc72fyzj",
            is_flexible: false,
            is_hidden: false,
            max_capacity: null,
            membership_restriction: null,
            min_cents: null,
            position: "8",
            name: "Standard",
            require_approval: true,
            type: "free" as const,
            valid_end_at: null,
            valid_start_at: null,
            num_tickets_registered: 27,
            currency_info: null,
            num_guests: 27,
            is_disabled: false
          }
        ],
        featured_infos: [],
        categories: [],
        ticket_info: {
          price: null,
          is_free: false,
          max_price: null,
          is_sold_out: true,
          spots_remaining: 0,
          is_near_capacity: false,
          require_approval: true,
          currency_info: null
        },
        subscribed_to_calendar: false,
        event_invite: null,
        role: null,
        sold_out: true,
        locale: "en",
        theme_meta: {
          theme: "warp" as const
        },
        tint_color: "#682FFF",
        can_register_for_multiple_tickets: false,
        font_title: "roc-grotesk",
        description_mirror: {
          type: "doc" as const,
          content: [
            {
              type: "paragraph",
              content: [
                { text: "Have you ever imagined building your own ", type: "text" },
                { text: "radar system", type: "text", marks: [{ type: "bold" }] },
                { text: " just like the ones used in aircrafts, ships, and futuristic machines? 📡✨", type: "text" }
              ]
            },
            {
              type: "paragraph",
              content: [
                { type: "hard_break" },
                { text: "Now's your chance to turn imagination into reality!", type: "text" }
              ]
            },
            {
              type: "paragraph",
              content: [
                { text: "Join us for ", type: "text" },
                { text: "CODE HUNT X DEMON SLAYER", type: "text", marks: [{ type: "bold" }] },
                { text: ", a hands-on workshop by ", type: "text" },
                { text: "Smart Tech Club (Robotics & IoT Club)", type: "text", marks: [{ type: "bold" }] },
                { text: " where you'll explore the exciting world of ", type: "text" },
                { text: "Robotics and IoT", type: "text", marks: [{ type: "bold" }] },
                { text: ".", type: "text" }
              ]
            },
            {
              type: "paragraph",
              content: [
                { text: "In this session, you will:", type: "text" }
              ]
            },
            {
              type: "bullet_list",
              content: [
                {
                  type: "list_item",
                  content: [
                    {
                      type: "paragraph",
                      content: [
                        { text: "Learn how to use an ", type: "text" },
                        { text: "ESP32", type: "text", marks: [{ type: "bold" }] },
                        { text: " microcontroller with an ", type: "text" },
                        { text: "Ultrasonic Sensor", type: "text", marks: [{ type: "bold" }] }
                      ]
                    }
                  ]
                },
                {
                  type: "list_item",
                  content: [
                    {
                      type: "paragraph",
                      content: [
                        { text: "Create a live ", type: "text" },
                        { text: "Radar GUI", type: "text", marks: [{ type: "bold" }] },
                        { text: " to detect and visualize objects 🎯", type: "text" }
                      ]
                    }
                  ]
                },
                {
                  type: "list_item",
                  content: [
                    {
                      type: "paragraph",
                      content: [
                        { text: "Connect with ", type: "text" },
                        { text: "ThinkSpace Cloud", type: "text", marks: [{ type: "bold" }] },
                        { text: " to send and analyze real-time data ☁️", type: "text" }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              type: "paragraph",
              content: [
                { text: "👨‍🏫 Workshop Lead: Dr. Giridhar Urkude", type: "text" }
              ]
            },
            {
              type: "paragraph",
              content: [
                { text: "📅 Date: 22 Sept 2025", type: "text" }
              ]
            },
            {
              type: "paragraph",
              content: [
                { text: "🕒 Time: 3:00 PM – 4:40 PM", type: "text" }
              ]
            },
            {
              type: "paragraph",
              content: [
                { text: "📍 Venue: Lab 5", type: "text" },
                { type: "hard_break" },
                { type: "hard_break" },
                { text: "Whether you're a beginner curious about IoT or a tech enthusiast ready to build something futuristic, this event will give you the perfect blend of ", type: "text" },
                { text: "learning + practical experience", type: "text", marks: [{ type: "bold" }] },
                { text: ". 🚀", type: "text" }
              ]
            },
            {
              type: "paragraph",
              content: [
                { text: "✨ Get ready to step into the world of ", type: "text" },
                { text: "radars, signals, and cloud-powered innovation", type: "text", marks: [{ type: "bold" }] },
                { text: "!", type: "text" }
              ]
            }
          ]
        },
        eth_address_requirement: null,
        name_requirement: "full-name" as const,
        phone_number_requirement: "required" as const,
        solana_address_requirement: null,
        registration_questions: [
          {
            id: "8hcwm7js",
            label: "Semester",
            options: ["I", "III", "V", "VII"],
            required: true,
            question_type: "dropdown" as const
          },
          {
            id: "kxv25q35",
            label: "PRN",
            required: true,
            question_type: "text" as const
          }
        ],
        is_flagged: false,
        show_unlock_code_option: false,
        membership_tiers: [],
        membership_info: null
      }
    }
  }
};

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<App {...mockAppProps} />);
} else {
  console.error('Root element not found');
}
