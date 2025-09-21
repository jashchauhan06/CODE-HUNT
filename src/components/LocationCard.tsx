import React from 'react';
import { Event } from '../types';

interface LocationCardProps {
  event: Event;
}

const LocationCard: React.FC<LocationCardProps> = ({ event }) => {
  return (
    <div className="content-card">
      <div className="card-title">
        <div className="title-label text-tinted fs-sm">Location</div>
      </div>
      <div className="content">
        <div className="flex-start info-row">
          <div className="icon rounded standard flex-center-center mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
              <g fill="none" fillRule="evenodd" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5">
                <path d="M2 6.854C2 11.02 7.04 15 8 15s6-3.98 6-8.146C14 3.621 11.314 1 8 1S2 3.62 2 6.854"></path>
                <path d="M9.5 6.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"></path>
              </g>
            </svg>
          </div>
          <div className="fw-medium">{event.geo_address_info.address}</div>
        </div>
      </div>
    </div>
  );
};

export default LocationCard;
