import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
// import { TwitterIcon, GitHubIcon, InstagramIcon, EmailIcon, LinkedInIcon } from '@mui/icons-material';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './index.css';

function Info () {

    const infoRef = useRef();

    // Page Loading Animation
    useEffect(() => {

        const boxes = gsap.utils.toArray('.link-box');
        const links = gsap.utils.toArray('.link');
        let ctx = gsap.context(() => {
            gsap.fromTo('.bio', {
                opacity: 0,
                clipPath: 'inset(0 0 100% 0)',
            }, {
                clipPath: 'inset(0 0 0% 0)',
                opacity: 1,
                duration: 1,
                ease: 'power3.inOut',
            });
            boxes.forEach((box, i) => {
                gsap.fromTo(box, {
                    // scaleX: 0,
                    clipPath: 'inset(0 0 100% 0)',
                }, {
                    // scaleX: 1,
                    clipPath: 'inset(0 0 0% 0)',
                    duration: 1,
                    delay: i*.5,
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
                    delay: i*.5,
                    ease: 'power4.inOut',
                })
            });
        }, infoRef)
        return () => ctx.revert();
    }, []);


    return (
        <div className='info' ref={infoRef}>
            <div className='bio'>
                Connect with me
            </div>
            <div className='status'>
                I currently have availabilty for new projects, contracts, or full time roles. If you have something in mind or just want to connect, reach out however you prefer!
                </div>
            <div className='link-group'>
                <div className='link-box'><a href="mailto:connorwhitepdx@gmail.com" className='link'><EmailIcon /></a></div>
                <div className='link-box'><a href="https://www.github.com/connorwhite-online" target="_blank" rel="noopener noreferrer" className='link'><GitHubIcon /></a></div>
                <div className='link-box'><a href="https://www.linkedin.com/in/connorwhite-online/" target="_blank" rel="noopener noreferrer" className='link'><LinkedInIcon /></a></div>
                <div className='link-box'><a href="https://www.instagram.com/connorwhite.online" target="_blank" rel="noopener noreferrer" className='link'><InstagramIcon /></a></div>
                <div className='link-box'><a href="https://www.twitter.com/connor_online" target="_blank" rel="noopener noreferrer" className='link'><TwitterIcon /></a></div>
            </div>
        </div>
    );
}

export default Info;