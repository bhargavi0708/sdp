import React, { useState } from 'react';
import './Account.css';

const Settings = () => {
  const [settings, setSettings] = useState({
    notifications: {
      email: true,
      push: true,
      sms: false
    },
    privacy: {
      showProfile: true,
      showAchievements: true,
      showTeam: true
    },
    preferences: {
      language: 'English',
      theme: 'light',
      timezone: 'Asia/Kolkata'
    },
    security: {
      twoFactorAuth: false,
      sessionTimeout: '30'
    }
  });

  const handleToggle = (category, setting) => {
    setSettings(prev => ({
      ...prev,
      [category]: {
        ...prev[category],
        [setting]: !prev[category][setting]
      }
    }));
  };

  const handleChange = (category, setting, value) => {
    setSettings(prev => ({
      ...prev,
      [category]: {
        ...prev[category],
        [setting]: value
      }
    }));
  };

  const handleSave = () => {
    // Add API call to save settings
    alert('Settings saved successfully!');
  };

  return (
    <div className="settings-container">
      <h1 className="section-title">Account Settings</h1>

      <div className="settings-grid">
        {/* Notifications Section */}
        <div className="settings-section">
          <h2>
            <i className="fas fa-bell"></i>
            Notifications
          </h2>
          <div className="settings-options">
            <div className="setting-item">
              <div className="setting-info">
                <h3>Email Notifications</h3>
                <p>Receive updates about events and registrations</p>
              </div>
              <label className="toggle-switch">
                <input
                  type="checkbox"
                  checked={settings.notifications.email}
                  onChange={() => handleToggle('notifications', 'email')}
                />
                <span className="toggle-slider"></span>
              </label>
            </div>

            <div className="setting-item">
              <div className="setting-info">
                <h3>Push Notifications</h3>
                <p>Get instant updates in your browser</p>
              </div>
              <label className="toggle-switch">
                <input
                  type="checkbox"
                  checked={settings.notifications.push}
                  onChange={() => handleToggle('notifications', 'push')}
                />
                <span className="toggle-slider"></span>
              </label>
            </div>

            <div className="setting-item">
              <div className="setting-info">
                <h3>SMS Alerts</h3>
                <p>Receive text messages for important updates</p>
              </div>
              <label className="toggle-switch">
                <input
                  type="checkbox"
                  checked={settings.notifications.sms}
                  onChange={() => handleToggle('notifications', 'sms')}
                />
                <span className="toggle-slider"></span>
              </label>
            </div>
          </div>
        </div>

        {/* Privacy Section */}
        <div className="settings-section">
          <h2>
            <i className="fas fa-user-shield"></i>
            Privacy
          </h2>
          <div className="settings-options">
            <div className="setting-item">
              <div className="setting-info">
                <h3>Profile Visibility</h3>
                <p>Make your profile visible to other users</p>
              </div>
              <label className="toggle-switch">
                <input
                  type="checkbox"
                  checked={settings.privacy.showProfile}
                  onChange={() => handleToggle('privacy', 'showProfile')}
                />
                <span className="toggle-slider"></span>
              </label>
            </div>

            <div className="setting-item">
              <div className="setting-info">
                <h3>Show Achievements</h3>
                <p>Display your sports achievements</p>
              </div>
              <label className="toggle-switch">
                <input
                  type="checkbox"
                  checked={settings.privacy.showAchievements}
                  onChange={() => handleToggle('privacy', 'showAchievements')}
                />
                <span className="toggle-slider"></span>
              </label>
            </div>

            <div className="setting-item">
              <div className="setting-info">
                <h3>Team Information</h3>
                <p>Show your team affiliations</p>
              </div>
              <label className="toggle-switch">
                <input
                  type="checkbox"
                  checked={settings.privacy.showTeam}
                  onChange={() => handleToggle('privacy', 'showTeam')}
                />
                <span className="toggle-slider"></span>
              </label>
            </div>
          </div>
        </div>

        {/* Preferences Section */}
        <div className="settings-section">
          <h2>
            <i className="fas fa-sliders-h"></i>
            Preferences
          </h2>
          <div className="settings-options">
            <div className="setting-item">
              <div className="setting-info">
                <h3>Language</h3>
                <p>Choose your preferred language</p>
              </div>
              <select
                value={settings.preferences.language}
                onChange={(e) => handleChange('preferences', 'language', e.target.value)}
                className="settings-select"
              >
                <option value="English">English</option>
                <option value="Hindi">Hindi</option>
                <option value="Telugu">Telugu</option>
              </select>
            </div>

            <div className="setting-item">
              <div className="setting-info">
                <h3>Theme</h3>
                <p>Select your preferred theme</p>
              </div>
              <select
                value={settings.preferences.theme}
                onChange={(e) => handleChange('preferences', 'theme', e.target.value)}
                className="settings-select"
              >
                <option value="light">Light</option>
                <option value="dark">Dark</option>
              </select>
            </div>

            <div className="setting-item">
              <div className="setting-info">
                <h3>Time Zone</h3>
                <p>Set your local time zone</p>
              </div>
              <select
                value={settings.preferences.timezone}
                onChange={(e) => handleChange('preferences', 'timezone', e.target.value)}
                className="settings-select"
              >
                <option value="Asia/Kolkata">India (IST)</option>
                <option value="UTC">UTC</option>
                <option value="America/New_York">US Eastern</option>
              </select>
            </div>
          </div>
        </div>

        {/* Security Section */}
        <div className="settings-section">
          <h2>
            <i className="fas fa-shield-alt"></i>
            Security
          </h2>
          <div className="settings-options">
            <div className="setting-item">
              <div className="setting-info">
                <h3>Two-Factor Authentication</h3>
                <p>Add an extra layer of security</p>
              </div>
              <label className="toggle-switch">
                <input
                  type="checkbox"
                  checked={settings.security.twoFactorAuth}
                  onChange={() => handleToggle('security', 'twoFactorAuth')}
                />
                <span className="toggle-slider"></span>
              </label>
            </div>

            <div className="setting-item">
              <div className="setting-info">
                <h3>Session Timeout</h3>
                <p>Automatically log out after inactivity</p>
              </div>
              <select
                value={settings.security.sessionTimeout}
                onChange={(e) => handleChange('security', 'sessionTimeout', e.target.value)}
                className="settings-select"
              >
                <option value="15">15 minutes</option>
                <option value="30">30 minutes</option>
                <option value="60">1 hour</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="settings-actions">
        <button onClick={handleSave} className="save-settings">
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default Settings; 