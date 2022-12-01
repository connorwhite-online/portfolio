import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { NavLink } from 'react-router-dom';
import './index.css';

function Menu () {

    const menuRef = useRef();

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.fromTo('.nav, .marquee', {
                scaleX: 0,
            }, {
                scaleX: 1,
                duration: 1,
                ease: 'power4.inOut'
            });
            gsap.fromTo('.nav-link', {
                opacity: 0,
                scaleY: -50,
            }, {
                opacity: 1,
                scaleY: 0,
                duration: 1,
                delay: 1,
                ease: 'power3.inOut',
            });
            gsap.fromTo('.ticker', {
                opacity: 0,
                x: 50,
            }, {
                opacity: 1,
                x: 0,
                duration: 1,
                delay: 1.5,
                ease: 'power3.inOut',
            });
        }, menuRef)
    }, []);

    return (
        <div className='menu' ref={menuRef}>
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