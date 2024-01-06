import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styles/MyPage.css';
import Chart from '../components/Chart';
import Game from '../components/Game';


const MyPage = () => {
  const [monthlySandos, setMonthlySandos] = useState([]);
  const [bestSandos, setBestSandos] = useState([]);

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

  useEffect(() => {
    const getBestSandos = async () => {
      try {
        const response = await axios.get('http://localhost:5001/sandwiches');
        setBestSandos(response.data);
      } catch (error) {
        console.log('Error fetching monthly sandwiches:', error);
      }
    };
    getBestSandos();
  }, []);

  return (
    <div className="mypage-container">
      <h1 className="mypage-title">My Sandwich Box🚀</h1>
      <a href='/' className='logout-a'>Logout</a>
      <p>This is Eun Koo's monthly sandwich box only open to registered viewers! 🤗❤️🥪</p>
      <div className="this-month-div">January 2024</div>
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
        <br />
        <div className="graph-container">
          <div className="this-month-div">Which sandwich got the highest rating?</div>
          <div className="card">
            <Chart data={bestSandos} />
          </div>
          <br />
        </div>
        <div className="graph-container">
          <div className="card">
            <Game />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPage;