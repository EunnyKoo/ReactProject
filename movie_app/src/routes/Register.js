import React, { useState } from 'react';
import './styles/Write.css';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const navigate = useNavigate();
  const [isModalOpen, setModalOpen] = useState(false);
  const [userId, setUserId] = useState('');
  const [userPwd, setUserPwd] = useState('');
  const [userNickname, setUserNickname] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!userId.trim()) {
      alert("Write your ID");
      return;
    }
    if (!userNickname.trim()) {
      alert("Write your nickname");
      return;
    }
    if (!userPwd.trim()) {
      alert("Write your password");
      return;
    }
 
    if (userId.length < 5) {
      alert("ID should be at least 5 characters long");
      return;
    }
    if (userNickname.length < 5) {
      alert("Nickname should be at least 5 characters long");
      return;
    }
    if (userPwd.length < 6) {
      alert("Password should be at least 6 characters long");
      return;
    }
    if (!/[A-Z]/.test(userPwd) || !/\d/.test(userPwd)) {
      alert("Password should contain at least one uppercase letter, and one number");
      return;
    }
     
    try {
      const response = await fetch('http://localhost:5001/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: userId, nickname: userNickname, password: userPwd }),
      });
    
      if (response.ok) {
        const data = await response.json();
        setModalOpen(true);
      } else {
        try {
          const errorData = await response.json();
          alert(`Registration failed: ${errorData.error || 'Unknown error'}`);
        } catch (error) {
          alert(`Registration failed: ${response.statusText}`);
        }
      }
    } catch (error) {
      console.error('Registration request failed:', error);
      alert('Registration failed. Please try again later.');
    }
  };

  const closeModal = () => {
    setUserId('');
    setUserPwd('');
    setUserNickname('');

    setModalOpen(false);

    navigate('/MyPage');
  };

  return (
    <div className="write-container">
      <h1 className="write-title">Do you want to join my sandwich journey? 🙊</h1>
      <form className="write-form" onSubmit={handleSubmit}>
        <div className="write-form-group">
          <label htmlFor="title">ID</label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="ID must be at least 5 characters long"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
          />
        </div>
        <div className="write-form-group">
          <label htmlFor="tags">Nickname</label>
          <input
            type="text"
            id="tags"
            name="tags"
            placeholder="Enter the nickname"
            value={userNickname}
            onChange={(e) => setUserNickname(e.target.value)}
          />
        </div>
        <div className="write-form-group">
          <label htmlFor="tags">Password</label>
          <input
            type="password"
            id="tags"
            name="tags"
            placeholder="Password must be at least 6 characters including at least one uppercase letter, and one number"
            value={userPwd}
            onChange={(e) => setUserPwd(e.target.value)}
          />
        </div>
        <button type="submit" className="write-submit-button">
          Register
        </button>
      </form>

      {isModalOpen && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <p>You can join my sandwich journey now! 🙉🤝</p>
          </div>
        </div>
      )}
    </div>
  );
}
