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
            🔥 Code Hunt x Demon Slayer 🔥

The demons 👹 of riddles and puzzles have invaded your campus 🏛️and only true Slayers can defeat them. Armed with logic 🧠 as your blade and wit as your breathing style, you must hunt down clues 🔍 scattered across the college.

Each riddle ❓ cracked is a demon conquered ⚔️, bringing you closer to the final secret 🏆. Only the sharpest hunters will rise to the rank of Hashira of Code.
          </div>
        )}
      </div>
    </div>
  );
};

export default AboutCard;
