import React from 'react';
import { Event, Calendar, Host, FeaturedGuest, TicketInfo } from '../types';
import EventCover from './EventCover';
import EventInfo from './EventInfo';
import RegistrationCard from './RegistrationCard';
import AboutCard from './AboutCard';
import CountdownCard from './CountdownCard';
import HostsCard from './HostsCard';
import GuestsCard from './GuestsCard';

interface EventPageProps {
  event: Event;
  calendar: Calendar;
  hosts: Host[];
  featuredGuests: FeaturedGuest[];
  ticketInfo: TicketInfo;
  onNavigate?: (path: string) => void;
}

const EventPage: React.FC<EventPageProps> = ({
  event,
  calendar,
  hosts,
  featuredGuests,
  ticketInfo,
  onNavigate
}) => {
  return (
    <div className="tint-root dark">
      <div className="event-theme tinted warp warp one-to-one full-page high-contrast">
        <div className="background"></div>
        <div className="background-glow"></div>
        <div className="background-overlay"></div>
        <div className="background-overlay2"></div>
        <div className="background-overlay3"></div>
        <div className="background-overlay4"></div>
        <div className="page-container">
          <div className="event-page-content-wrapper zm-container">
            <div className="event-page-left">
              <EventCover coverUrl={event.cover_url} eventName={event.name} />
            </div>
            <div className="event-page-right flex-1">
              <EventInfo 
                event={event} 
                hosts={hosts} 
                featuredGuests={featuredGuests}
              />
              <CountdownCard eventDate={event.start_at} />
              <RegistrationCard ticketInfo={ticketInfo} onNavigate={onNavigate} />
              <AboutCard event={event} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventPage;
