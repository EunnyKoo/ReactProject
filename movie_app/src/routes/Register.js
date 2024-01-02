import React, { useState } from 'react';
import './styles/Write.css';

export default function Register() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [userId, setUserId] = useState('');
  const [userPwd, setUserPwd] = useState('');
  const [userConfirmPwd, setUserConfirmPwd] = useState('');
  const [userNickname, setUserNickname] = useState('');

  const handleSubmit = (e) => {
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

    if (userPwd != userConfirmPwd) {
      alert("Confirm your password");
      return;
    }

    // 모달 열기
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
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
            placeholder="Enter your id"
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
            placeholder="Enter the password"
            value={userPwd}
            onChange={(e) => setUserPwd(e.target.value)}
          />
        </div>
        <div className="write-form-group">
          <label htmlFor="tags">Confirm Password</label>
          <input
            type="password"
            id="tags"
            name="tags"
            placeholder="Enter the password"
            value={userConfirmPwd}
            onChange={(e) => setUserConfirmPwd(e.target.value)}
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
