import React from 'react';
import './styles/Write.css';

export default function Register() {
  return (
    <div className="write-container">
      <h1 className="write-title">Do you want to join my sandwich journey? 🙊</h1>
      <form className="write-form">
        <div className="write-form-group">
          <label htmlFor="title">ID</label>
          <input type="text" id="title" name="title" placeholder="Enter your id" />
        </div>
        <div className="write-form-group">
          <label htmlFor="tags">Nickname</label>
          <input type="text" id="tags" name="tags" placeholder="Enter the nickname" />
        </div>
        <div className="write-form-group">
          <label htmlFor="tags">PASSWORD</label>
          <input type="text" id="tags" name="tags" placeholder="Enter the password" />
        </div>
        <button type="submit" className="write-submit-button">Register</button>
      </form>
    </div>
  );
}
