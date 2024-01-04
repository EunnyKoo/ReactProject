import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styles/MyPage.css';

const MyPage = () => {
  const [monthlySandos, setMonthlySandos] = useState([]);

  useEffect(() => {
    const getMonthlySandos = async () => {
      try {
        const response = await axios.get('http://localhost:5001/monthlySandos');
        setMonthlySandos(response.data);
      } catch (error) {
        console.log('Error fetching monthly sandwiches:', error);
      }
    };
    getMonthlySandos();
  }, []);

  return (
    <div className="mypage-container">
      <h1 className="mypage-title">Eun Koo's Sandwich Box🚀</h1>
      <p>This is Eun Koo's monthly sandwich box only open to registered viewers! 🤗❤️🥪</p>
      <div className="dashboard-options">
        <div className="card-container">
          {monthlySandos.map(post => (
            <div key={post.id} className="card">
              <h3>{post.title}</h3>
              <h4>{post.name} </h4>
              <img src={post.poster} alt={post.title} title={post.title} />
              <h5>{post.cafeLocation} </h5>
              <p>{post.summary}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyPage;