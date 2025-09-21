import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { db } from '../lib/supabase';

interface TeamMember {
  name: string;
  prn: string;
  year: string;
  section: string;
  otherSection?: string;
  email: string;
  phone: string;
}

interface Registration {
  id: string;
  team_name: string;
  members: TeamMember[];
  member1_email: string;
  member1_phone: string;
  status: string;
  created_at: string;
}

interface DashboardProps {
  onNavigate?: (path: string) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onNavigate }) => {
  const { user, signOut } = useAuth();
  const [registrations, setRegistrations] = useState<Registration[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchUserRegistrations();
    debugAllRegistrations();
  }, []);

  const debugAllRegistrations = async () => {
    try {
      const { data, error } = await db.getAllRegistrations();
      console.log('All registrations in database:', { data, error });
    } catch (err) {
      console.error('Error fetching all registrations:', err);
    }
  };

  const fetchUserRegistrations = async () => {
    if (!user) return;
    
    try {
      setLoading(true);
      console.log('Fetching registrations for user:', user.id, user.email);
      
      const { data, error } = await db.getUserRegistrations(user.id);
      
      console.log('Registration fetch result:', { data, error });
      
      if (error) {
        console.error('Error fetching registrations:', error);
        setError('Failed to load registrations');
        return;
      }
      
      console.log('Setting registrations:', data);
      setRegistrations(data || []);
    } catch (err) {
      console.error('Error:', err);
      setError('An unexpected error occurred');
    } finally {
      setLoading(false);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut();
      onNavigate?.('/');
    } catch (err) {
      console.error('Sign out error:', err);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'approved':
        return '#51cf66';
      case 'pending':
        return '#ffd43b';
      case 'rejected':
        return '#ff6b6b';
      default:
        return '#868e96';
    }
  };

  if (loading) {
    return (
      <div className="tint-root dark">
        <div className="event-theme tinted warp warp one-to-one full-page high-contrast">
          <div className="page-container">
            <div className="dashboard-loading">
              <div className="spinner-large"></div>
              <p>Loading your dashboard...</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="tint-root dark">
      <div className="event-theme tinted warp warp one-to-one full-page high-contrast">
        <div className="page-container">
          <div className="dashboard-wrapper">
            {/* Header */}
            <div className="dashboard-header">
              <div className="dashboard-title">
                <h1>Welcome to Your Dashboard</h1>
                <p>Manage your team registrations and view member information</p>
              </div>
              <div className="dashboard-actions">
                <button
                  onClick={handleSignOut}
                  className="signout-button"
                >
                  Sign Out
                </button>
              </div>
            </div>

            {/* User Info */}
            <div className="user-info-card">
              <h3>Account Information</h3>
              <div className="user-details">
                <p><strong>Email:</strong> {user?.email}</p>
                <p><strong>User ID:</strong> {user?.id}</p>
                <p><strong>Total Teams:</strong> {registrations.length}</p>
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <div className="error-message">
                {error}
              </div>
            )}

            {/* Registrations List */}
            <div className="registrations-section">
              <h2>Your Team Registrations</h2>
              
              {registrations.length === 0 ? (
                <div className="no-registrations">
                  <p>No team registrations found.</p>
                  <button
                    onClick={() => onNavigate?.('/register')}
                    className="register-button"
                  >
                    Register a Team
                  </button>
                </div>
              ) : (
                <div className="registrations-grid">
                  {registrations.map((registration) => (
                    <div key={registration.id} className="registration-card">
                      <div className="registration-header">
                        <h3>{registration.team_name}</h3>
                        <span 
                          className="status-badge"
                          style={{ backgroundColor: getStatusColor(registration.status) }}
                        >
                          {registration.status.toUpperCase()}
                        </span>
                      </div>
                      
                      <div className="registration-meta">
                        <p><strong>Registered:</strong> {formatDate(registration.created_at)}</p>
                        <p><strong>Contact Email:</strong> {registration.member1_email}</p>
                        <p><strong>Contact Phone:</strong> {registration.member1_phone}</p>
                      </div>

                      <div className="team-members">
                        <h4>Team Members ({registration.members.length})</h4>
                        <div className="members-list">
                          {registration.members.map((member, index) => (
                            <div key={index} className="member-card">
                              <div className="member-header">
                                <h5>Member {index + 1}</h5>
                                {index === 0 && <span className="team-lead">Team Lead</span>}
                              </div>
                              <div className="member-details">
                                <p><strong>Name:</strong> {member.name}</p>
                                <p><strong>PRN:</strong> {member.prn}</p>
                                <p><strong>Year:</strong> {member.year}</p>
                                <p><strong>Section:</strong> {member.section}{member.otherSection && ` (${member.otherSection})`}</p>
                                {member.email && <p><strong>Email:</strong> {member.email}</p>}
                                {member.phone && <p><strong>Phone:</strong> {member.phone}</p>}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Quick Actions */}
            <div className="quick-actions">
              <button
                onClick={() => onNavigate?.('/register')}
                className="action-button primary"
              >
                Register New Team
              </button>
              <button
                onClick={() => onNavigate?.('/')}
                className="action-button secondary"
              >
                Back to Event
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
