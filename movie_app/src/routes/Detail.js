import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './styles/Detail.css';

const Detail = () => {
  const [sandwichDetails, setSandwichDetails] = useState({});
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
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

    axios.get(`http://localhost:5001/comments/${id}`)
      .then(response => {
        setComments(response.data);
      })
      .catch(error => {
        console.error('Error fetching comments:', error);
      });
  }, [id]);

  const handleCommentSubmit = () => {
    axios.post(`http://localhost:5001/comments/${id}`, { comment: newComment })
      .then(response => {
        setComments([...comments, response.data]);
        setNewComment('');
      })
      .catch(error => {
        console.error('Error submitting comment:', error);
      });
  };

  return (
    <div className="detail-container">
      {sandwichDetails && (
        <>
          <h2>{title}</h2>
          <p>⭐{rating} / {cafeLocation}</p>
          <p>{summary}</p>
          <img src={poster} alt={title} title={title} />
          <p className='ingredients-p'>🥗Ingredients: {ingredients && ingredients.join(', ')}</p>
          
          <div>
            <h3>Comments</h3>
            <ul className="comment-list">
              {comments.map(comment => (
                <li key={comment.id} className="comment-list-item">
                  <span className="comment-text">{comment.text}</span>
                </li>
              ))}
            </ul>
            <textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Add your comment..."
              className='comment-textarea'
            />
            <button onClick={handleCommentSubmit} className='comment-btn'>Submit Comment</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Detail;
