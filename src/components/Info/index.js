import React from 'react';
import gsap from 'gsap';
import './index.css';

function Info () {

    return (
        <div className='info'>
            <div className='bio'>
                Hi, I go by Connor.<br />Thanks for taking the time to check out some of my work. I’m a creative technologist primarily interested in real-time 3D applications like augmented reality and visual communication for e-commerce. I believe in technology as a means of improving the human experience, not distracting from it.
            </div>
            <div className='link-group'>
                <div className='link-box'><a href="mailto:connorwhitepdx@gmail.com" className='link'>E-MAIL</a></div>
                <div className='link-box'><a href="https://www.github.com/connorwhite-online" target="_blank" rel="noopener noreferrer" className='link'>GITHUB</a></div>
                <div className='link-box'><a href="https://www.linkedin.com/in/connorwhite-online/" target="_blank" rel="noopener noreferrer" className='link'>LINKEDIN</a></div>
                <div className='link-box'><a href="https://www.instagram.com/connorwhite.online" target="_blank" rel="noopener noreferrer" className='link'>INSTAGRAM</a></div>
                <div className='link-box'><a href="https://www.twitter.com/connor_online" target="_blank" rel="noopener noreferrer" className='link'>TWITTER</a></div>
            </div>
        </div>
    );
}

export default Info;