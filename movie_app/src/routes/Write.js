// Write.js
import React from 'react';
import './Write.css';

export default function Write() {
  return (
    <div className="write-container">
      <h1 className="write-title">🥪Share Your Sandwich Info🥪</h1>
      <form className="write-form">
        <div className="write-form-group">
          <label htmlFor="title">Title:</label>
          <input type="text" id="title" name="title" placeholder="Enter your blog post title" />
        </div>
        <div className="write-form-group">
          <label htmlFor="tags">Location:</label>
          <input type="text" id="tags" name="tags" placeholder="Enter the location" />
        </div>
        <div className="write-form-group">
          <label htmlFor="content">Content:</label>
          <textarea id="content" name="content" placeholder="Start writing your blog post..."></textarea>
        </div>
        <button type="submit" className="write-submit-button">Publish</button>
      </form>
    </div>
  );
}
