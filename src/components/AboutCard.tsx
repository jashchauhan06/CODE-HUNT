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
              <h3 className="about-title">🔥 CODE HUNT X DEMON SLAYER 🔥</h3>
              
              <div className="about-section">
                <h4>🎯 Event Overview</h4>
                <p>
                  Join us for an epic coding adventure inspired by the legendary Demon Slayer series! 
                  This isn't just another coding competition – it's a journey where you'll become a 
                  digital Hashira, wielding the power of code to defeat the demons of complex algorithms 
                  and challenging puzzles.
                </p>
              </div>

              <div className="about-section">
                <h4>⚔️ What to Expect</h4>
                <ul className="about-list">
                  <li><strong>Multi-Level Challenges:</strong> Navigate through increasingly difficult coding problems, each representing a different demon to defeat</li>
                  <li><strong>Team Collaboration:</strong> Form teams of up to 4 members and work together like the Demon Slayer Corps</li>
                  <li><strong>Real-Time Leaderboard:</strong> Watch your team climb the ranks as you solve challenges</li>
                  <li><strong>Interactive Elements:</strong> Discover hidden clues and Easter eggs throughout the campus</li>
                  <li><strong>Prizes & Recognition:</strong> Win amazing prizes and earn the title of "Hashira of Code"</li>
                </ul>
              </div>

              <div className="about-section">
                <h4>🎓 Who Can Participate</h4>
                <p>
                  This event is open to all students from Symbiosis International (Deemed University). 
                  Whether you're a beginner coder or an experienced programmer, there's a challenge 
                  level perfect for you. No prior experience with Demon Slayer required – just bring 
                  your passion for coding and problem-solving!
                </p>
              </div>

              <div className="about-section">
                <h4>🏆 Event Format</h4>
                <p>
                  <strong>Duration:</strong> 3+ hours of intense coding action<br/>
                  <strong>Location:</strong> SO-8 & SO-2 Labs<br/>
                  <strong>Team Size:</strong> 1-4 members per team<br/>
                  <strong>Languages:</strong> Python, Java, C++, JavaScript, and more<br/>
                  <strong>Difficulty:</strong> Beginner to Advanced levels
                </p>
              </div>

              <div className="about-section highlight-box">
                <h4>🌟 Special Features</h4>
                <p>
                  Experience the magic of Demon Slayer through coding! Each challenge is themed around 
                  different characters and breathing techniques. Master the Water Breathing of clean code, 
                  the Flame Breathing of efficient algorithms, and the Thunder Breathing of lightning-fast 
                  problem-solving!
                </p>
              </div>

              <div className="about-section">
                <h4>📝 Registration Details</h4>
                <p>
                  Registration is now open! Limited spots available, so secure your team's place in this 
                  epic coding adventure. Don't miss your chance to become a legend in the world of 
                  competitive programming!
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
