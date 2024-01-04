import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './styles/Write.css';

export default function LogIn() {
  const [userId, setUserId] = useState('');
  const [userPwd, setUserPwd] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userId === 'eun' && userPwd === 'koo') {
      navigate('/mypage');
    } else {
      alert('Invalid credentials. Please try again.');
    }
  };

  return (
    <div className="write-container">
      <h1 className="write-title">Join the Monthly Newsletter💕</h1>
      <form className="write-form" onSubmit={handleSubmit}>
        <div className="write-form-group">
          <label htmlFor="title">ID</label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Enter your id"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
          />
        </div>
        <div className="write-form-group">
          <label htmlFor="tags">Password</label>
          <input
            type="password"
            id="tags"
            name="tags"
            placeholder="Enter the password"
            value={userPwd}
            onChange={(e) => setUserPwd(e.target.value)}
          />
        </div>
        <button type="submit" className="write-submit-button">
          LOGIN
        </button>
      </form>
      <br />
      <Link to="/register" className="register-button">
        JOIN IN
      </Link>
    </div>
  );
}