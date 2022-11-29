import React from 'react';
import gsap from 'gsap';
import { NavLink } from 'react-router-dom';
import './index.css';

function Menu () {
    return (
        <div className='menu'>
            <div className='marquee'>
                <div className='ticker'>
                    CONNOR WHITE - INTERACTIVE DESIGNER - DEVELOPER - 3D ARTIST - AUGMENTED REALITY - REALTIME 3D - ANIMATION - ADDITIVE MANUFACTURING
                </div>
            </div>
            <div className='nav'>
                <div>
                    <NavLink to="/" className="nav-link">work</NavLink>
                </div>
                <div>
                    <NavLink to="/info" className="nav-link">info</NavLink>
                </div>
            </div>
        </div>
    );
}

export default Menu;