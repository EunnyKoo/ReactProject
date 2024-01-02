import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Detail = ({ match }) => {
  const [sandwichDetails, setSandwichDetails] = useState(null);

  useEffect(() => {
    const { id } = match.params;
    console.log("ID:", id);

    axios.get(`http://localhost:5001/sandwiches/${id}`)
      .then(response => {
        console.log(response.data);
        setSandwichDetails(response.data);
      })
      .catch(error => {
        console.error('Error fetching sandwich details:', error);
      });
  }, [match.params]); // match.params를 의존성 배열에 추가

  const { title, cafeLocation, summary, poster, ingredients } = sandwichDetails;

  return (
    <div>
      <h2>{title}</h2>
      <p>Cafe Location: {cafeLocation}</p>
      <p>Summary: {summary}</p>
      <p>Ingredients: {ingredients.join(', ')}</p>
      <img src={poster} alt={title} title={title} />
    </div>
  );
};

export default Detail;
