import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import csiLogo from '../images/csi-logo.png';

interface NavigationProps {
  onNavigate?: (path: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ onNavigate }) => {
  const { user } = useAuth();

  return (
    <div className="nav-wrapper animated">
      <div className="background animated"></div>
      <nav className="flex-center spread gap-2">
        <div className="left-wrapper flex-center gap-2">
          <img
            src={csiLogo}
            alt="CSI Logo"
            className="csi-logo"
          />
          <div className="csi-text">
            <div className="csi-title">CSI STUDENT BRANCH PRESENTS</div>
          </div>
        </div>
        <div className="right-wrapper min-width-0">
          <div className="time fs-sm mono-number relative">
            <span> </span>
          </div>
          {user ? (
            <button
              onClick={() => onNavigate?.('/dashboard')}
              className="btn primary signin-btn"
            >
              Dashboard
            </button>
          ) : (
            <button
              onClick={() => onNavigate?.('/login')}
              className="btn primary signin-btn"
            >
              Sign In
            </button>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
