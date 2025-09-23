import React from 'react';
import { Event } from '../types';

interface AboutCardProps {
  event: Event;
}

const AboutCard: React.FC<AboutCardProps> = ({ event }) => {
  // Parse the description from the description_mirror content
  const parseDescription = (content: any[]): string => {
    if (!content || !Array.isArray(content)) return '';

    return content.map((item: any) => {
      if (item.type === 'paragraph' && item.content) {
        return item.content.map((p: any) => p.text || '').join('');
      }
      return '';
    }).join('\n\n');
  };

  const description = parseDescription(event.description_mirror?.content || []);
  const hasDescription = description.trim().length > 0;

  return (
    <div className="content-card">
      <div className="card-title">
        <div className="title-label text-tinted fs-sm">About Event</div>
      </div>
      <div className="content">
        {hasDescription ? (
          <div className="spark-content">
            <div dangerouslySetInnerHTML={{ __html: description.replace(/\n/g, '<br>') }} />
          </div>
        ) : (
          <div className="text-tinted">
            <div className="about-event-content">
              <h3 className="about-title">⚔️ Unsheathe your keyboards, Slayers! ⚔️</h3>

              <div className="about-section">
                <p>
                  The scent of demonic bugs is in the air, and a new mission has arrived! The CSI Student Chapter calls upon the sharpest minds to join the corps.
                </p>
                
                <p>
                  <strong>Get ready for CodeHunt X Demon Slayer!</strong><br/>
                  Master your 'Code Breathing' techniques, hunt down every last error, and rise to the rank of Hashira. This isn't just a competition; it's the Final Selection.
                </p>

                <p className="motto">
                  <em>Code like a Hashira. Hunt like a Slayer.</em>
                </p>

                <div className="event-details">
                  <p><strong>🗓 Date:</strong> Tuesday, 23 Sep 2025</p>
                  <p><strong>⏰ Time:</strong> 3:00 PM onwards</p>
                  <p><strong>📍 Venue:</strong> SO-8 & SO-2</p>
                  <p><strong>🔗 Venue Links:</strong></p>
                  <p><a href="https://codehunt-hashira.vercel.app/" target="_blank" rel="noopener noreferrer" style={{color: '#8B5CF6', textDecoration: 'underline'}}>S-08 - Hashira Training</a></p>
                  <p><a href="https://code-hunt-demon-website.vercel.app/" target="_blank" rel="noopener noreferrer" style={{color: '#8B5CF6', textDecoration: 'underline'}}>S-02 - Demon Squad</a></p>
                </div>

                <div className="event-notes">
                  <h4>Note:</h4>
                  <ul>
                    <li>You can participate in a Team of 4. Assemble your squad!</li>
                    <li>Attendance will be given to each participant</li>
                    <li>This time each and every participant will also get Participation Certificate</li>
                  </ul>
                </div>

                <p className="call-to-action">
                  <strong>Don't let the bugs win! Join the hunt.</strong>
                </p>
              </div>

            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AboutCard;
