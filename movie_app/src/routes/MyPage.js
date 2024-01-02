import React from 'react';

const MyPage = () => {
  return (
    <div className="write-container">
      <h1 className="write-title">My Sandwich Box! 🚀</h1>
      <p>Here, you can check which sandwich you want to explore in the future.</p>
      <div className="dashboard-options">
       Nickname <input className='nickname-input'/>
       <button>update</button>
      </div>
      <br />
      <div className="dashboard-options">
       My Sandwich Box🧸
      </div>
    </div>
  );
};

export default MyPage;
