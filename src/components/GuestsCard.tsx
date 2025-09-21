import React from 'react';
import { FeaturedGuest } from '../types';

interface GuestsCardProps {
  guestCount: number;
  featuredGuests: FeaturedGuest[];
}

const GuestsCard: React.FC<GuestsCardProps> = ({ guestCount, featuredGuests }) => {
  const displayGuests = featuredGuests.slice(0, 6);
  const remainingCount = guestCount - displayGuests.length;

  return (
    <div className="content-card">
      <div className="card-title flex-center gap-2 spread">
        <div className="title-label text-tinted fs-sm">{guestCount} Going</div>
      </div>
      <div className="content">
        <div>
          <button type="button" className="guests-button button-reset">
            <div className="flex-center guests pb-2">
              <div 
                style={{ 
                  '--size': '1.5rem', 
                  '--cutout-avatar-percentage-visible': '0.5', 
                  '--head-margin-percentage': '0.1' 
                } as React.CSSProperties} 
                className="heads flex-center"
              >
                {displayGuests.map((guest, index) => (
                  <div key={guest.api_id} className="head flex-start">
                    <div className="avatar-wrapper small">
                      <div 
                        style={{ backgroundImage: `url(${guest.avatar_url})` }} 
                        className="avatar"
                      >
                        <div style={{ transform: 'scale(0)' }} className="online-indicator-wrapper animated">
                          <div style={{ backgroundColor: 'var(--orange)' }} className="online-indicator"></div>
                        </div>
                      </div>
                    </div>
                    <div className="tooltip"></div>
                  </div>
                ))}
              </div>
            </div>
            <div className="text-tinted fs-sm guests-string animated">
              {displayGuests.length > 0 && (
                <>
                  {displayGuests.slice(0, 2).map(guest => guest.name).join(', ')}
                  {remainingCount > 0 && ` and ${remainingCount} others`}
                </>
              )}
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default GuestsCard;
