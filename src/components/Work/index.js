import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import './index.css';
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger);


function Work () {

    const [Projects] = useState([
        {
            name: 'JESS FORD CARE',
            folder: './images/jessford',
            tags: ['Design', 'Dev'],
            copy: 'project',
            link: 'https://jessford.care'
        },
        {
            name: 'R3F-KEROSENE',
            folder: './images/r3f-kerosene',
            tags: ['3D', 'Design', 'Dev'],
            copy: 'Quick-start framework for performant, real-time 3D apps using React.js to create reusable components from three.js scenes and models.',
            link: 'https://r3f-kerosene.vercel.app/'
        },
        {
            name: 'R3F-IMMERSIVE',
            folder: './images/r3f-immersive',
            tags: ['3D', 'AR', 'Design', 'Dev'],
            copy: 'A framework for creating immersive VR/AR experiences using React.js, three.js, and WebXR. The demo is only visible via mobile VR browsers (I recommend Mozilla XR Viewer) or VR headset. A testament to the current limitations of WebXR.',
            link: 'https://r3f-immersive.vercel.app/',
        },
        {
            name: 'LGS STUDIO',
            folder: './images/lgs',
            tags: ['3D', 'Design', 'Fabrication'],
            copy: 'project',
            link: 'https://www.lgsstudio.com'
        },
        {
            name: 'MULTNOMAH DRUG',
            folder: './images/multnomahdrug',
            tags: ['Design', 'Dev', 'Apparel'],
            copy: 'In the summer of 2020, I designed, manufactured, and distributed over 3000 masks with the help of local manufacturers and a houseless advocacy agency.',
            link: 'https://www.instagram.com/multnomahdrug/',
        },
        {
            name: 'KLYXX CREATIVE',
            folder: './images/klyxx',
            tags: ['Design', 'Dev'],
            copy: 'Design and Webflow development for NYC-based creative agency. My role included in-depth case studies of previous work as well as new presentation assets.',
            link: 'https://www.klyxx.co/'
        }
    ])

    const workRef = useRef();

    useEffect(() => {
        
        let ctx = gsap.context(() => {
            let projects = gsap.utils.toArray('.case');
            projects.forEach((project) => {
                gsap.fromTo('.header', {
                    scaleX: 0,
                }, {
                    scaleX: 1,
                    duration: 1,
                    ease: 'power4.inOut'
                });
                gsap.fromTo('.count, .title', {
                    opacity: 0,
                    scaleY: 0,
                }, {
                    scrollTrigger: project,
                    delay: 1,
                    opacity: 1,
                    scaleY: 1,
                    ease: 'power3.inOut',
                });
                gsap.fromTo('.content', {
                    scaleY: 0,
                }, {
                    delay: 1,
                    scaleY: 1,
                    duration: 1,
                    ease: 'power4.inOut',
                });
                gsap.fromTo(' .tag, .copy, .link, .images', {
                    opacity: 0,
                    x: 50,
                }, {
                    delay: 2,
                    duration: 1,
                    opacity: 1,
                    x: 0,
                    ease: 'power3.inOut',
                    stagger: 0.25,
                })
            });
        }, workRef);
        return() => ctx.revert();
        
    }, []);

    // const importedPhotos = import(`../path/to/folder/${project.folder}/*`);
    
    return (
        <div className='work' ref={workRef}>
            {Projects.map((project, index) => (
                <div className='case' key={index}>
                    <div className='header'>
                        <div className='count'>0{index +1}</div>
                        <div className='title'>{project.name}</div>
                    </div>
                    <div className='content'>
                        <div className='gallery'>
                            <div className='images'>
                                {/* enter image function */} 
                            </div> 
                        </div>
                        <div className='details'>
                            <div className='tags'>
                                {project.tags.map((tag, index) => (
                                    <div className='tag' key={index}>{tag}</div>
                                ))}
                            </div>
                            <div className='copy'>{project.copy}</div>
                            <div><a className='link' href={project.link} target="_blank" rel="noopener noreferrer">view live case →</a></div>
                        </div>
                    </div>
                </div>
            ))};
        </div>
    );
}

export default Work;