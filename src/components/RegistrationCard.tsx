import React from 'react';
import { TicketInfo } from '../types';

interface RegistrationCardProps {
  ticketInfo: TicketInfo;
  onNavigate?: (path: string) => void;
}

const RegistrationCard: React.FC<RegistrationCardProps> = ({ ticketInfo, onNavigate }) => {
  return (
    <div className="content-card registration-card">
      <div className="card-title">
        <div className="title-label text-tinted fs-sm">Registration</div>
      </div>
      <div className="content">
        <div className="flex-start info-row mb-2">
          <div className="icon rounded standard flex-center-center mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
              <path fill="currentColor" fillRule="evenodd" d="M8 1a.75.75 0 0 1 .75.75v6.5a.75.75 0 0 1-1.5 0v-6.5A.75.75 0 0 1 8 1ZM3.75 8a.75.75 0 0 0-1.5 0v2.5a.75.75 0 0 0 1.5 0V8Zm8.5 0a.75.75 0 0 1 1.5 0v2.5a.75.75 0 0 1-1.5 0V8ZM8 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"></path>
            </svg>
          </div>
          <div>
            <div className="title fw-medium">Registration Open</div>
            <div className="desc text-tinted">Limited spots available. Register now!</div>
          </div>
        </div>
        <div className="mb-2 text-tinted">
          Don't miss out on this amazing event! Click the button below to secure your spot at CODE HUNT X DEMON SLAYER.
        </div>
        <button 
          onClick={() => onNavigate?.('/register')} 
          className="btn flex-center medium primary solid variant-color-primary full-width no-icon" 
          type="button"
        >
          <div className="label">Register Now</div>
        </button>
      </div>
    </div>
  );
};

export default RegistrationCard;
