import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const Dashboard = () => {
  const { user, logout } = useContext(AuthContext);

  const initials = user?.name
    ?.split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase();

  return (
    <div className="dashboard">

      {/* Header */}
      <div className="dashboard-header">
        <h2>My Dashboard</h2>
        <span className="badge-live">Live</span>
      </div>

      {/* Account Row */}
      {user && (
        <div className="account-section">
          <div className="avatar">{initials}</div>
          <div className="account-meta">
            <h3>Hello, {user.name}!</h3>
            <p>{user.email} &nbsp;·&nbsp; ID #{user.id}</p>
          </div>
        </div>
      )}

      {/* Info Grid */}
      {user && (
        <div className="info-grid">
          <div className="info-item">
            <span className="info-label">Full Name</span>
            <span className="info-value">{user.name}</span>
          </div>
          <div className="info-item">
            <span className="info-label">Email Address</span>
            <span className="info-value">{user.email}</span>
          </div>
          <div className="info-item">
            <span className="info-label">User ID</span>
            <span className="info-value">#{user.id}</span>
          </div>
          <div className="info-item">
            <span className="info-label">Account Type</span>
            <span className="info-value">Customer</span>
          </div>
        </div>
      )}

      {/* Overview Section */}
      <div className="overview-section">
        <p className="section-title">Account Overview</p>
        <div className="overview-grid">
          <div className="overview-card">
            <span className="overview-icon">✅</span>
            <span className="label">Status</span>
            <span className="value active">Active</span>
          </div>
          <div className="overview-card">
            <span className="overview-icon">📅</span>
            <span className="label">Member Since</span>
            <span className="value">April 2026</span>
          </div>
          <div className="overview-card">
            <span className="overview-icon">🛡️</span>
            <span className="label">Role</span>
            <span className="value">Customer</span>
          </div>
          <div className="overview-card">
            <span className="overview-icon">🕐</span>
            <span className="label">Last Login</span>
            <span className="value">Just now</span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="dashboard-footer">
        <p className="last-login">
          Session started: <span>Today, {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
        </p>
        <button className="log-out" onClick={logout}>Logout</button>
      </div>

    </div>
  );
};

export default Dashboard;