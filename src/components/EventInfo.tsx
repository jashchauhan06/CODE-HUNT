import React from 'react';
import { Event, Host, FeaturedGuest } from '../types';

interface EventInfoProps {
  event: Event;
  hosts: Host[];
  featuredGuests: FeaturedGuest[];
}

const EventInfo: React.FC<EventInfoProps> = ({ event, hosts, featuredGuests }) => {
  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const formatTime = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });
  };

  return (
    <div className="top-wrapper flex-column gap-2">
      <div className="top-card-content">
        <div className="flex-start spread gap-2 title-wrapper">
          <div className="min-width-0">
            <h1 className="title text-primary mb-3">{event.name}</h1>
          </div>
        </div>
        <div className="meta flex-column flex-start gap-3">
          <div className="row-container">
            <div className="icon-row flex-center gap-3">
              <div className="icon-container flex-center-center rounded overflow-hidden flex-shrink-0">
                <div className="calendar-card">
                  <div className="month">{new Date(event.start_at).toLocaleDateString('en-US', { month: 'short' }).toUpperCase()}</div>
                  <div className="day">{new Date(event.start_at).getDate()}</div>
                </div>
              </div>
              <div className="flex-1">
                <div className="title text-ellipses fw-medium">
                  {formatDate(event.start_at)}
                </div>
                <div className="desc text-ellipses text-tinted">
                  {formatTime(event.start_at)} onwards
                </div>
              </div>
            </div>
          </div>
          <div className="row-container">
            <div className="icon-row flex-center gap-3 location-row">
              <div className="icon-container flex-center-center rounded overflow-hidden flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <div className="flex-1">
                <div className="title text-ellipses fw-medium">
                  <div className="text-ellipses">{event.geo_address_info.address}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventInfo;
