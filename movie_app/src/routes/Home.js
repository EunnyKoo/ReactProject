import './styles/Home.css';
import React from 'react';
import axios from 'axios';
import Sandwich from '../components/Sandwich';

class Home extends React.Component {
  state = {
    isLoading: true,
    sandwiches: [], 
  };

  getSandwiches = async () => {
    try {
      const response = await axios.get('http://localhost:5000/sandwiches');
      this.setState({ sandwiches: response.data, isLoading: false });
    } catch (error) {
      console.error('Error fetching sandwiches:', error);
      this.setState({ isLoading: false });
    }
  };

  componentDidMount() {
    this.getSandwiches();
  }

  render() {
    const { isLoading, sandwiches } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
          <div className="sandwiches">
            {sandwiches.map((sandwich) => (
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
  }
}


export default Home;
