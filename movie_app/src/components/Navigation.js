import React from "react";
import {Link} from 'react-router-dom';
import './styles/Navigation.css';

export default function Navigation() {
    return(
        <div className="nav">
            <Link to="/">Sandwiches</Link>
            <Link to="/write">Share Your Sandwich</Link>
            <Link to="/about">About</Link>
            <Link to="/login">My Sandwich Box</Link>
        </div>
    )
}