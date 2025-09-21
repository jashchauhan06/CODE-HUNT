import React from 'react';
import { Host } from '../types';

interface HostsCardProps {
  hosts: Host[];
}

const HostsCard: React.FC<HostsCardProps> = ({ hosts }) => {
  return (
    <div className="content-card">
      <div className="card-title flex-center gap-2 spread">
        <div className="title-label text-tinted fs-sm">Hosted By</div>
      </div>
      <div className="content">
        <div className="flex-column hosts gap-25">
          {hosts.map((host) => (
            <div key={host.api_id} className="flex-center gap-2">
              <a 
                className="flex-center host-row gap-2 flex-1 hover-brand-link" 
                href={`/user/${host.api_id}`}
              >
                <div className="avatar-wrapper small">
                  <div 
                    style={{ backgroundImage: `url(${host.avatar_url})` }} 
                    className="avatar"
                  >
                    <div style={{ transform: 'scale(0)' }} className="online-indicator-wrapper animated">
                      <div style={{ backgroundColor: 'var(--orange)' }} className="online-indicator"></div>
                    </div>
                  </div>
                </div>
                <div className="min-width-0">
                  <div className="fw-medium text-ellipses">{host.name}</div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HostsCard;
