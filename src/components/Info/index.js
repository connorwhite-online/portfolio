import React, { startTransition, useEffect, useRef } from 'react';
import gsap from 'gsap';
import './index.css';

function Info () {

    const infoRef = useRef();

    // Page Loading Animation
    useEffect(() => {

        const boxes = gsap.utils.toArray('.link-box');
        const links = gsap.utils.toArray('.link');
        let ctx = gsap.context(() => {
            gsap.fromTo('.bio, .link-group', {
                scaleX: 0,
            }, {
                scaleX: 1,
                duration: 1,
                ease: 'power4.inOut',
            });
            gsap.fromTo('h1', {
                opacity: 0,
            }, {
                opacity: 1,
                duration: 1,
                delay: .5,
                ease: 'power3.inOut',
            });
            boxes.forEach((box, i) => {
                gsap.fromTo(box, {
                    scaleX: 0,
                }, {
                    scaleX: 1,
                    duration: 1,
                    delay: i*.25,
                    ease: 'power4.inOut',
                })
            });
            links.forEach((link, i) => {
                gsap.fromTo(link, {
                    opacity: 0,
                    y: 50,
                }, {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    delay: i*.25,
                    ease: 'power4.inOut',
                })
            });
        }, infoRef)
        return () => ctx.revert();
    }, []);


    return (
        <div className='info' ref={infoRef}>
            <div className='bio'>
                <h1>
                    Hi, I go by Connor.<br />Thanks for taking the time to check out some of my work. I’m a creative technologist primarily interested in real-time 3D applications like augmented reality and visual communication for e-commerce. I believe in technology as a means of improving the human experience, not distracting from it.
                </h1>
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