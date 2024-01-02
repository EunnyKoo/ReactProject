import React, { useState } from 'react';
import './styles/Write.css';
import axios from 'axios';

export default function Write() {
  const [formData, setFormData] = useState({
    title: '',
    tags: '',
    content: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:5001/send-email', formData);

      setFormData({
        title: '',
        tags: '',
        content: '',
      });

      alert('Email sent successfully!');
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Failed to send email. Please try again later.');
    }
  };

  return (
    <div className="write-container">
      <h1 className="write-title">🥪Share Your Sandwich Info🥪</h1>
      <form className="write-form" onSubmit={handleSubmit}>
        <div className="write-form-group">
          <label htmlFor="title">Sandwich</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter the name of the sandwich you want to share with me!"
          />
        </div>
        <div className="write-form-group">
          <label htmlFor="tags">Location</label>
          <input
            type="text"
            id="tags"
            name="tags"
            value={formData.tags}
            onChange={handleChange}
            placeholder="Enter the location or the name of the place"
          />
        </div>
        <div className="write-form-group">
          <label htmlFor="content">Content</label>
          <textarea
            id="content"
            name="content"
            value={formData.content}
            onChange={handleChange}
            placeholder="Share the reason why you recommend me!"
          ></textarea>
        </div>
        <button type="submit" className="write-submit-button">
          Publish
        </button>
      </form>
    </div>
  );
}
