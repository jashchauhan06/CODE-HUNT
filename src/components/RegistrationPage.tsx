import React from 'react';
import RegistrationForm from './RegistrationForm';

interface RegistrationPageProps {
  onNavigate?: (path: string) => void;
}

const RegistrationPage: React.FC<RegistrationPageProps> = ({ onNavigate }) => {
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
          <div className="registration-page-wrapper">
            <div className="back-button-container">
              <button 
                onClick={() => onNavigate?.('/')} 
                className="back-button"
              >
                ← Back to Event
              </button>
            </div>
            <RegistrationForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
