
import React from 'react';
import { Link } from 'react-router-dom';
import './ProfileList.css';

const ProfileList = ({ profiles, onSummaryClick }) => {
  return (
    <div className="profile-list">
      {profiles.map(profile => (
        <div key={profile.id} className="profile-card">
          <img src={`/${profile.photo}`} alt={profile.name} />
          <h3>{profile.name}</h3>
          <p>{profile.description}</p>
          <Link to={`/profile/${profile.id}`} className="view-details-button">View Details</Link>
          <button onClick={() => onSummaryClick(profile)}>Summary</button>
        </div>
      ))}
    </div>
  );
};

export default ProfileList;

