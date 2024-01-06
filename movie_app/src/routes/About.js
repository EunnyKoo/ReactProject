import React from 'react';
import './styles/About.css';
import koo from "./styles/koo.png";

export default function About() {
    return (
        <div className='about__container'>
            <p>Embarking on a quest for a million sandwiches! 🥪 <br />
                Welcome to my sandwich odyssey,
                where I'm on a mission to uncover
                the world's most extraordinary sandwiches. <br />
                Who's hungry for adventure and ready to join me on this delectable journey? <br />
                Let's turn each sandwich into a story together! 🌯✨</p>
            <div className='img__container'>
                <img src={koo} alt="kookoosand" className='kookoosand-img' />
            </div>
            <span>-Eun Koo</span>
        </div>
    );
}
