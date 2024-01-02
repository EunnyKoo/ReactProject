import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './styles/Detail.css';

const Detail = () => {
  const [sandwichDetails, setSandwichDetails] = useState({});
  const { title, cafeLocation, summary, poster, ingredients, rating } = sandwichDetails;
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:5001/sandwiches/${id}`)
      .then(response => {
        setSandwichDetails(response.data);
      })
      .catch(error => {
        console.error('Error fetching sandwich details:', error);
      });
  }, []); 

  return (
    <div className="detail-container">
      {sandwichDetails && (
        <>
          <h2>{title}</h2>
          <p>⭐{rating} / {cafeLocation}</p>
          <img src={poster} alt={title} title={title} />
          <p>🥗Ingredients: { ingredients && ingredients.join(', ')}</p>
          <p>{summary}</p>
        </>
      )}
    </div>
  );
};

export default Detail;
