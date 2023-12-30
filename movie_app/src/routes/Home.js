// Home.js

import './styles/Home.css';
import React, { useState } from 'react';
import axios from 'axios';
import Sandwich from '../components/Sandwich';
import SearchBar from '../components/SearchBar';

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [sandwiches, setSandwiches] = useState([]);
  const [filteredSandwiches, setFilteredSandwiches] = useState([]);

  const getSandwiches = async () => {
    try {
      const response = await axios.get('http://localhost:5000/sandwiches');
      setSandwiches(response.data);
      setFilteredSandwiches(response.data);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching sandwiches:', error);
      setIsLoading(false);
    }
  };

  const handleSearch = (searchTerm) => {
    const filtered = sandwiches.filter((sandwich) =>
      sandwich.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredSandwiches(filtered);
  };

  React.useEffect(() => {
    getSandwiches();
  }, []);

  return (
    <section className="container">
      <SearchBar onSearch={handleSearch} />
      {isLoading ? (
        <div className="loader">
          <span className="loader__text">Loading...</span>
        </div>
      ) : (
        <div className="sandwiches">
          {filteredSandwiches.map((sandwich) => (
            <Sandwich
              key={sandwich.id}
              id={sandwich.id}
              title={sandwich.title}
              cafeLocation={sandwich.cafeLocation}
              summary={sandwich.summary}
              poster={sandwich.poster}
              ingredients={sandwich.ingredients}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default Home;
