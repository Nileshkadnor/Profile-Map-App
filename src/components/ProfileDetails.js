

import React from 'react';
import { useParams } from 'react-router-dom';

const ProfileDetails = ({ profiles }) => {
  const { id } = useParams();
  const profile = profiles.find(profile => profile.id === parseInt(id, 10));

  if (!profile) {
    return <p>Profile not found!</p>;
  }

  
  const photoUrl = profile.photo ? `/${profile.photo}` : 'default-profile.jpg'; 
  const contactInfo = profile.contactInfo || 'No contact information available'; 
  const interests = profile.interests && Array.isArray(profile.interests) ? profile.interests.join(', ') : 'No interests listed'; 

  
  const lat = profile.location ? profile.location.lat : 'N/A';
  const lng = profile.location ? profile.location.lng : 'N/A';

  return (
    <div className="profile-details">
      <h2>{profile.name}</h2>
      <img src={photoUrl} alt={profile.name} />
      <p><strong>Description:</strong> {profile.description}</p>
      <p><strong>Location:</strong> Lat: {lat}, Lng: {lng}</p>
      <p><strong>Contact Information:</strong> {contactInfo}</p>
      <p><strong>Interests:</strong> {interests}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default ProfileDetails;

