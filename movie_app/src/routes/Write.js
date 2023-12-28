// Write.js
import React from 'react';
import './styles/Write.css';

export default function Write() {
  return (
    <div className="write-container">
      <h1 className="write-title">🥪Share Your Sandwich Info🥪</h1>
      <form className="write-form">
        <div className="write-form-group">
          <label htmlFor="title">Sandwich</label>
          <input type="text" id="title" name="title" placeholder="Enter the name of the sandwich you want to share with me!" />
        </div>
        <div className="write-form-group">
          <label htmlFor="tags">Location</label>
          <input type="text" id="tags" name="tags" placeholder="Enter the location or the name of the place" />
        </div>
        <div className="write-form-group">
          <label htmlFor="content">Content</label>
          <textarea id="content" name="content" placeholder="Share the reason why you recommend me!"></textarea>
        </div>
        <button type="submit" className="write-submit-button">Publish</button>
      </form>
    </div>
  );
}
