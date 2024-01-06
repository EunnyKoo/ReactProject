import React, { useState } from 'react';
import './styles/Game.css';

const Game = () => {
  const [secretSandwich, setSecretSandwich] = useState(chooseRandomSandwich());
  const [userGuess, setUserGuess] = useState('');
  const [message, setMessage] = useState('');

  function chooseRandomSandwich() {
    const sandwiches = [
      'Carrot Sandwich',
    ];

    return sandwiches[Math.floor(Math.random() * sandwiches.length)];
  }

  const handleGuess = () => {
    const guess = userGuess.trim();

    if (!guess) {
      setMessage('Please enter a valid sandwich name.');
    } else {
      if (guess.toLowerCase() === secretSandwich.toLowerCase()) {
        setMessage('Congratulations! You guessed the correct sandwich name! ❤️');
        setSecretSandwich(chooseRandomSandwich());
      } else {
        setMessage(`Oops! Try again. Hint: It is one of the sandwiches in the list and one of 🐰's favourite food`);
      }
      setUserGuess('');
    }
  };

  return (
    <div>
      <h3>Guess Eun's fav sandwich</h3>
      <p>{message}</p>
      <input
        type="text"
        value={userGuess}
        onChange={(e) => setUserGuess(e.target.value)}
        placeholder="Enter your guess"
        style={{ marginRight: '15px' }} 
        />
        <br />
        <button onClick={handleGuess} className='guess-button'>
        Guess
        </button>
    </div>
  );
};

export default Game;
