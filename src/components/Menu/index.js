import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { NavLink } from 'react-router-dom';
import './index.css';
import {TextPlugin} from 'gsap/TextPlugin';
gsap.registerPlugin(TextPlugin);

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
            // gsap.fromTo('.ticker1, .ticker2', {
            //     opacity: 0,
            //     x: 50,
            // }, {
            //     opacity: 1,
            //     x: 0,
            //     duration: 1,
            //     delay: 1.5,
            //     ease: 'power3.inOut',
            // });
            gsap.fromTo('.ticker', {
                opacity: 0,
            },{
                opacity: 1,
                duration: 1,
                delay: 1.5,
                })
        }, menuRef);
        return() => ctx.revert();
    }, []);

    useEffect(() => {
        let ctx = gsap.context(() => {
            let tl = gsap.timeline({ repeat: -1, repeatDelay: 1, yoyo: true});
            tl.to('.ticker',{
                text: 'INTERACTIVE DESIGNER',
                duration: 1.5,
                ease: 'power3.inOut',
                delay: 1,
            });
            tl.to('.ticker', {
                text: 'DEVELOPER',
                duration: 1.5,
                ease: 'power3.inOut',
                delay: 1,
            });
            tl.to('.ticker', {
                text: '3D ARTIST',
                duration: 1.5,
                ease: 'power3.inOut',
                delay: 1,
            });
            tl.to('.ticker', {
                text: 'AUGMENTED REALITY',
                duration: 1.5,
                ease: 'power3.inOut',
                delay: 1,
            });
            tl.to('.ticker', {
                text: 'REALTIME 3D',
                duration: 1.5,
                ease: 'power3.inOut',
                delay: 1,
            });
            tl.to('.ticker', {
                text: 'ANIMATION',
                duration: 1.5,
                ease: 'power3.inOut',
                delay: 1,
            });
            tl.to('.ticker', {
                text: 'ADDITIVE MANUFACTURING',
                duration: 1.5,
                ease: 'power3.inOut',
                delay: 1,
            });
        }, menuRef);
        return() => ctx.revert();
    }, []);

    // useEffect(() => {
    //     let ctx = gsap.context(() => {
    //         gsap.fromTo('.ticker1, .ticker2', {
    //             x: 0,
    //         }, {
    //             x: -1500,
    //             duration: 30,
    //             ease: 'none',
    //             repeat: -1,
    //             repeatDelay: 0,
    //         });
    //     }, menuRef);
    //     return() => ctx.revert();
    // }, []);

    return (
        <div className='menu' ref={menuRef}>
            <div className='marquee'>
                {/* <div className='ticker1'>
                    CONNOR WHITE - INTERACTIVE DESIGNER - DEVELOPER - 3D ARTIST - AUGMENTED REALITY - REALTIME 3D - ANIMATION - ADDITIVE MANUFACTURING - 
                </div>
                <div className='ticker2'>
                    CONNOR WHITE - INTERACTIVE DESIGNER - DEVELOPER - 3D ARTIST - AUGMENTED REALITY - REALTIME 3D - ANIMATION - ADDITIVE MANUFACTURING - 
                </div> */}
                <div className='ticker'>
                    CONNOR WHITE
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