


import React, { useState } from 'react';
import './AdminPanel.css';

const AdminPanel = ({ profiles, setProfiles }) => {
  const [form, setForm] = useState({ name: '', photo: '', description: '', lat: '', lng: '' });
  const [editingProfile, setEditingProfile] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingProfile) {
      
      setProfiles(profiles.map(profile =>
        profile.id === editingProfile.id ? { ...editingProfile, ...form, location: { lat: parseFloat(form.lat), lng: parseFloat(form.lng) } } : profile
      ));
      setEditingProfile(null);
    } else {
      
      setProfiles([
        ...profiles,
        {
          id: profiles.length + 1,
          name: form.name,
          photo: form.photo,
          description: form.description,
          location: { lat: parseFloat(form.lat), lng: parseFloat(form.lng) }
        }
      ]);
    }
    setForm({ name: '', photo: '', description: '', lat: '', lng: '' });
  };

  const handleEdit = (profile) => {
    setForm({ name: profile.name, photo: profile.photo, description: profile.description, lat: profile.location.lat, lng: profile.location.lng });
    setEditingProfile(profile);
  };

  const handleDelete = (id) => {
    setProfiles(profiles.filter(profile => profile.id !== id));
  };

  return (
    <div className="admin-panel">
      <h1>Admin Panel</h1>
      <form onSubmit={handleSubmit} className="profile-form">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="photo"
          placeholder="Photo URL"
          value={form.photo}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="lat"
          placeholder="Latitude"
          value={form.lat}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="lng"
          placeholder="Longitude"
          value={form.lng}
          onChange={handleChange}
          required
        />
        <button type="submit">{editingProfile ? 'Update Profile' : 'Add Profile'}</button>
      </form>
      <ul className="profile-list">
        {profiles.map(profile => (
          <li key={profile.id}>
            <img src={profile.photo} alt={profile.name} className="profile-pic" />
            <div className="profile-info">
              <h2>{profile.name}</h2>
              <p>{profile.description}</p>
            </div>
            <button onClick={() => handleEdit(profile)}>Edit</button>
            <button onClick={() => handleDelete(profile.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminPanel;
