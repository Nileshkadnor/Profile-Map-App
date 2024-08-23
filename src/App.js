

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProfileList from './components/ProfileList';
import Map from './components/Map';
import AdminPanel from './components/AdminPanel';
import Navbar from './components/Navbar';
import ProfileDetails from './components/ProfileDetails'; 
import './App.css';

const App = () => {
  const [profiles, setProfiles] = useState([
    { id: 1, name: 'Nilesh Kadnor', photo: 'profile2.jpeg', description: 'Software Engineer', location: { lat: 37.7749, lng: -122.4194 } },
    { id: 2, name: 'Manoj', photo: 'profile2.jpeg', description: 'Product Manager', location: { lat: 40.7128, lng: -74.0060 } },
    { id: 3, name: 'Tushar', photo: 'profile2.jpeg', description: 'Software Engineer', location: { lat: 37.7749, lng: -122.4194 } },
    { id: 4, name: 'Siddhesh', photo: 'profile2.jpeg', description: 'Product Manager', location: { lat: 40.7128, lng: -74.0060 } },
    { id: 5, name: 'Rohan', photo: 'profile2.jpeg', description: 'Software Engineer', location: { lat: 37.7749, lng: -122.4194 } },
    { id: 6, name: 'Bhushan', photo: 'profile2.jpeg', description: 'Product Manager', location: { lat: 40.7128, lng: -74.0060 } },
  ]);

  const [selectedLocation, setSelectedLocation] = useState(null);
  const [filteredProfiles, setFilteredProfiles] = useState(profiles);

  const handleSummaryClick = (profile) => {
    setSelectedLocation(profile.location);
  };

  const handleSearch = (query) => {
    const filtered = profiles.filter(profile => profile.name.toLowerCase().includes(query.toLowerCase()));
    setFilteredProfiles(filtered);
  };

  return (
    <Router>
      <div className="app">
        <Navbar onSearch={handleSearch} />
        <Routes>
          <Route path="/" element={
            <div>
              <ProfileList profiles={filteredProfiles} onSummaryClick={handleSummaryClick} />
              {selectedLocation && <Map location={selectedLocation} />}
            </div>
          } />
          <Route path="/admin" element={<AdminPanel profiles={profiles} setProfiles={setProfiles} />} />
          <Route path="/profile/:id" element={<ProfileDetails profiles={profiles} />} /> {/* Add route for profile details */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
