import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { db, auth } from '../lib/supabase';

interface Member {
  name: string;
  prn: string;
  year: string;
  section: string;
  otherSection: string;
  email: string;
  phone: string;
}

const RegistrationForm: React.FC = () => {
  const { user } = useAuth();
  const [teamName, setTeamName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [members, setMembers] = useState<Member[]>([
    { name: '', prn: '', year: '', section: '', otherSection: '', email: '', phone: '' },
    { name: '', prn: '', year: '', section: '', otherSection: '', email: '', phone: '' },
    { name: '', prn: '', year: '', section: '', otherSection: '', email: '', phone: '' },
    { name: '', prn: '', year: '', section: '', otherSection: '', email: '', phone: '' }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleMemberChange = (index: number, field: keyof Member, value: string) => {
    const newMembers = [...members];
    newMembers[index] = { ...newMembers[index], [field]: value };
    setMembers(newMembers);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setSuccess(false);

    try {
      // Filter out empty members first
      const validMembers = members.filter(member => 
        member.name.trim() && member.prn.trim() && member.year && member.section && member.email.trim() && member.phone.trim()
      );

      // Check if user is logged in
      if (!user) {
        // Validate password fields for new user registration
        if (!password || !confirmPassword) {
          setError('Please enter password and confirm password.');
          return;
        }
        
        if (password !== confirmPassword) {
          setError('Passwords do not match.');
          return;
        }
        
        if (password.length < 6) {
          setError('Password must be at least 6 characters long.');
          return;
        }
        
        // Get email from member 1
        const member1Email = validMembers[0]?.email;
        if (!member1Email) {
          setError('Please enter email for member 1.');
          return;
        }
        
        // Create user account first
        console.log('Creating user account with email:', member1Email);
        const { data: authData, error: authError } = await auth.signUp(member1Email, password);
        
        if (authError) {
          console.error('Auth error:', authError);
          // If account creation fails, continue with anonymous registration
          console.log('Account creation failed, proceeding with anonymous registration');
          // Don't return, continue with null user_id
        } else {
          console.log('User account created:', authData);
          
          // Save password to profiles table
          if (authData.user) {
            try {
              const { error: profileError } = await db.updateProfile(authData.user.id, {
                full_name: validMembers[0]?.name || '',
                phone: validMembers[0]?.phone || '',
                college: 'Your College', // You can add a college field to the form
                year_of_study: parseInt(validMembers[0]?.year || '1'),
                password: password // Store password in profiles
              });
              
              if (profileError) {
                console.error('Profile update error:', profileError);
              } else {
                console.log('Password saved to profiles table');
              }
            } catch (err) {
              console.error('Error saving password to profiles:', err);
            }
          }
        }
      }

      if (validMembers.length === 0) {
        setError('Please fill in at least one team member.');
        return;
      }

      // Prepare registration data
      const registrationData = {
        event_id: '00000000-0000-0000-0000-000000000001', // Updated to use proper UUID
        user_id: user ? user.id : null, // Use null for anonymous registrations
        team_name: teamName,
        members: validMembers,
        member1_email: validMembers[0]?.email || '',
        member1_phone: validMembers[0]?.phone || '',
        member2_email: validMembers[1]?.email || '',
        member2_phone: validMembers[1]?.phone || '',
        member3_email: validMembers[2]?.email || '',
        member3_phone: validMembers[2]?.phone || '',
        member4_email: validMembers[3]?.email || '',
        member4_phone: validMembers[3]?.phone || ''
      };

      console.log('Submitting registration:', registrationData);

      // Save to Supabase
      const { data, error: dbError } = await db.createRegistration(registrationData);

      if (dbError) {
        console.error('Database error:', dbError);
        console.error('Error details:', JSON.stringify(dbError, null, 2));
        setError(`Registration failed: ${dbError.message}`);
        return;
      }

      console.log('Registration successful:', data);
      console.log('Data saved to Supabase:', data);
      setSuccess(true);
      setTeamName('');
      setPassword('');
      setConfirmPassword('');
      setMembers([
        { name: '', prn: '', year: '', section: '', otherSection: '', email: '', phone: '' },
        { name: '', prn: '', year: '', section: '', otherSection: '', email: '', phone: '' },
        { name: '', prn: '', year: '', section: '', otherSection: '', email: '', phone: '' },
        { name: '', prn: '', year: '', section: '', otherSection: '', email: '', phone: '' }
      ]);

    } catch (err) {
      console.error('Registration error:', err);
      setError('An unexpected error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const renderMemberForm = (member: Member, index: number) => (
    <div key={index} className="member-form">
      <h3 className="member-title">Name of MEMBER {index + 1} *</h3>
      <div className="form-row">
        <div className="form-group">
          <input
            type="text"
            value={member.name}
            onChange={(e) => handleMemberChange(index, 'name', e.target.value)}
            className="form-input"
            placeholder={`Enter name of member ${index + 1}`}
            required
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label className="form-label">PRN of member {index + 1} *</label>
          <input
            type="text"
            value={member.prn}
            onChange={(e) => handleMemberChange(index, 'prn', e.target.value)}
            className="form-input"
            placeholder="Enter PRN"
            required
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label className="form-label">Year *</label>
          <select
            value={member.year}
            onChange={(e) => handleMemberChange(index, 'year', e.target.value)}
            className="form-select"
            required
          >
            <option value="">Select Year</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label className="form-label">Section *</label>
          <select
            value={member.section}
            onChange={(e) => handleMemberChange(index, 'section', e.target.value)}
            className="form-select"
            required
          >
            <option value="">Select Section</option>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="D">D</option>
            <option value="E">E</option>
            <option value="F">F</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>

      {member.section === 'Other' && (
        <div className="form-row">
          <div className="form-group">
            <input
              type="text"
              value={member.otherSection}
              onChange={(e) => handleMemberChange(index, 'otherSection', e.target.value)}
              className="form-input"
              placeholder="Please specify section"
              required
            />
          </div>
        </div>
      )}

      <div className="form-row">
        <div className="form-group">
          <label className="form-label">Email ID of member {index + 1} *</label>
          <input
            type="email"
            value={member.email}
            onChange={(e) => handleMemberChange(index, 'email', e.target.value)}
            className="form-input"
            placeholder="Enter email address"
            required
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label className="form-label">Phone Number of Member {index + 1} *</label>
          <input
            type="tel"
            value={member.phone}
            onChange={(e) => handleMemberChange(index, 'phone', e.target.value)}
            className="form-input"
            placeholder="Enter phone number"
            required
          />
        </div>
      </div>
    </div>
  );

  return (
    <div className="registration-form-container">
      <div className="registration-form-header">
        <h1 className="form-title">CODE HUNT X DEMON SLAYER</h1>
        <h2 className="form-subtitle">Team Registration Form</h2>
            <p className="form-description">
              Fill in the details below to register your team for the event. All fields marked with * are required.
              {!user && (
                <span className="account-note">
                  <br />Note: If account creation fails, your team will still be registered successfully.
                </span>
              )}
            </p>
      </div>

      <form onSubmit={handleSubmit} className="registration-form">
        {error && (
          <div className="error-message">
            {error}
          </div>
        )}
        
        {success && (
          <div className="success-message">
            Registration submitted successfully! Your team has been registered for the event.
          </div>
        )}

        <div className="team-section">
          <h3 className="section-title">Team Information</h3>
          <div className="form-row">
            <div className="form-group">
              <label className="form-label">Team Name *</label>
              <input
                type="text"
                value={teamName}
                onChange={(e) => setTeamName(e.target.value)}
                className="form-input"
                placeholder="Enter your team name"
                required
              />
            </div>
          </div>
        </div>

        {!user && (
          <div className="account-section">
            <h3 className="section-title">Create Account</h3>
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Password *</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="form-input"
                  placeholder="Enter password (min 6 characters)"
                  required
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Confirm Password *</label>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="form-input"
                  placeholder="Confirm your password"
                  required
                />
              </div>
            </div>
          </div>
        )}

        <div className="members-section">
          <h3 className="section-title">Team Members (Up to 4 members)</h3>
          {members.map((member, index) => renderMemberForm(member, index))}
        </div>

        <div className="form-actions">
          <button 
            type="submit" 
            className={`submit-button ${isLoading ? 'loading' : ''}`}
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <div className="spinner"></div>
                Registering...
              </>
            ) : (
              'Register Team'
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;
