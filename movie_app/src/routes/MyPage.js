import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Write.css';

export default function MyPage() {
  return (
    <div className="write-container">
      <h1 className="write-title">Do you want to collect the sandwiches?💕</h1>
      <form className="write-form">
        <div className="write-form-group">
          <label htmlFor="title">ID</label>
          <input type="text" id="title" name="title" placeholder="Enter your id" />
        </div>
        <div className="write-form-group">
          <label htmlFor="tags">Password</label>
          <input type="text" id="tags" name="tags" placeholder="Enter the password" />
        </div>
        <button type="submit" className="write-submit-button">LOGIN</button>
      </form>
      <br />
      <Link to='/register' className='register-button'>JOIN IN</Link>
    </div>
  );
}
