import React, { useState, useEffect } from 'react';
import { AppProps } from './types';
import { AuthProvider } from './contexts/AuthContext';
import Navigation from './components/Navigation';
import EventPage from './components/EventPage';
import RegistrationPage from './components/RegistrationPage';
import LoginPage from './components/LoginPage';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';
import './styles/App.css';

const App: React.FC<AppProps> = ({ pageProps }) => {
  const { initialData } = pageProps;
  const { event, calendar, hosts, featured_guests, ticket_info } = initialData.data;
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleNavigation = (path: string) => {
    window.history.pushState({}, '', path);
    setCurrentPath(path);
  };

  const renderPage = () => {
    switch (currentPath) {
      case '/register':
        return <RegistrationPage onNavigate={handleNavigation} />;
      case '/login':
        return <LoginPage onNavigate={handleNavigation} />;
      case '/dashboard':
        return <Dashboard onNavigate={handleNavigation} />;
      case '/':
      default:
        return (
          <EventPage
            event={event}
            calendar={calendar}
            hosts={hosts}
            featuredGuests={featured_guests}
            ticketInfo={ticket_info}
            onNavigate={handleNavigation}
          />
        );
    }
  };

  return (
    <AuthProvider>
      <div className="theme-root dark">
        <div className="page-wrapper wide-page-wrapper">
          <Navigation onNavigate={handleNavigation} />
          <div className="page-content">
            {renderPage()}
          </div>
          <Footer />
        </div>
      </div>
    </AuthProvider>
  );
};

export default App;
