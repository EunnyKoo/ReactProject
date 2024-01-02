import React from "react";
import PropTypes from 'prop-types';
import './Sandwich.css';
import {Link} from 'react-router-dom';

export default function Sandwich({id, title, cafeLocation, summary, poster, ingredients, rating}) {
    return (
        <div className="sandwich">
            <Link 
                to={{
                    pathname: `/sandwich-detail/${id}`,
                    state: {id, title, cafeLocation, summary, poster, ingredients, rating},
                }}
            >
            <img src={poster} alt={title} title={title}/>
            <div className="sandwich__data">
                <h3 className="sandwich__title">{title}</h3>
                <p className="sandwich__cafeLocation">⭐{rating} / {cafeLocation}</p>
                <p className="sandwich__summary">{summary.slice(0, 350)}...</p>
            </div>
            </Link>
        </div>    
    );
}

Sandwich.propTypes = { 
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    cafeLocation: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
    rating: PropTypes.string.isRequired,
};
