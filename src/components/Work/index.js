import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import './index.css';

function Work () {

    const screenWidth = window.innerWidth;
    
    const [Projects] = useState([
        {
            name: 'IN NO PARTICULAR ORDER',
            images: ['inpo-01.png', 'inpo-02.png', 'inpo-03.png', 'inpo-04.png', 'inpo-05.png', 'inpo-06.png'],
            tags: ['Design', 'Dev', '3D'],
            copy: 'A custom Tumblr design build for designer Sean Browns photojournal In No Particular Order launching its third addition.',
            link: 'https://byseanbrown.tumblr.com/'
        },
        {
            name: "DECENTRALIZED HARDWARE",
            images: ['hardware-01.png', 'hardware-02.png', 'hardware-03.png', 'hardware-04.png', 'hardware-05.png'],
            tags: ['Design', '3D', 'Fabrication'],
            copy: 'A 3D-printed prototype for garment hardware that allows end-users to produce parts from anywhere in the world in single unit production. The prototype is SLS printed Nylon12 and utilizes an SLM printed aluminum press that universally fits soldering irons to secure the hardware.',
            link: 'https://www.instagram.com/p/CndLiR6PNWl/'
        },
        {
            name: 'JESS FORD CARE',
            images: ['jess-ford-01.png', 'jess-ford-02.png', 'jess-ford-03.png', 'jess-ford-04.png', 'jess-ford-05.png'],
            tags: ['Design', 'Dev'],
            copy: 'Booking site for full-spectrum doula, Jess Ford, emphasizing an aggressively minimal UI and stripped-down animation to simplify the UX for a wide range of ages. Built with React, animated with GSAP, and powered by Calendly.',
            link: 'https://jessford.care'
        },
        {
            name: 'R3F-KEROSENE',
            images: ['r3f-kerosene-01.png', 'r3f-kerosene-02.png', 'r3f-kerosene-03.png', 'r3f-kerosene-04.png', 'r3f-kerosene-05.png'],
            tags: ['3D', 'Design', 'Dev'],
            copy: 'A quick-start framework for creating immersive 3D experiences with React and three.js. This project is aimed at onboarding 3D designers to real-time 3D apps with its simple setup and manipulatable structure.',
            link: 'https://r3f-kerosene.vercel.app/'
        },
        {
            name: 'R3F-IMMERSIVE',
            images: ['r3f-immersive-01.png', 'r3f-immersive-02.png', 'r3f-immersive-03.png', 'r3f-immersive-04.png'],
            tags: ['3D', 'AR', 'Design', 'Dev'],
            copy: 'A framework for creating immersive VR/AR experiences using React.js, three.js, and WebXR. The demo is only visible via mobile VR browsers (I recommend Mozilla XR Viewer) or VR headset. A testament to the current limitations of WebXR.',
            link: 'https://r3f-immersive.vercel.app/',
        },
        {
            name: 'LGS STUDIO',
            images: ['lgs-01.png', 'lgs-02.png', 'lgs-03.png', 'lgs-04.png', 'lgs-techsheet.png', 'lgs-packaging.png'],
            tags: ['3D', 'Design', 'Fabrication'],
            copy: 'I worked as visual designer for LA-based ceramic studios, LGS, rendering client projects, delivering wiring technical sheets, and designing custom tooling. Client work included lighting for Nicole Hollis, and packaging for a collaboration with Seth Rogens homegoods brand, HousePlant.',
            link: 'https://www.lgsstudio.com'
        },
        {
            name: 'MULTNOMAH DRUG',
            images: ['garageshot.png', 'product-page.png', 'hero-shot.png', 'packaging.png', 'vote.gif'],
            tags: ['Design', 'Dev', 'Apparel'],
            copy: 'In the summer of 2020, I designed, manufactured, and distributed over 3000 masks with the help of local manufacturers and a houseless advocacy agency. The masks featured a single layer of technical fabric, laser-cut and sewn with minimal processing for rapid production.',
            link: 'https://www.instagram.com/multnomahdrug/',
        },
        {
            name: 'KLYXX CREATIVE',
            images: ['klyxx-01.png', 'klyxx-02.png', 'klyxx-03.png', 'klyxx-04.png'],
            tags: ['Design', 'Dev'],
            copy: 'As Senior Designer at Klyxx, I led a small team of designers through a multitude of client work including apps, landing pages, and promotional. Clients included Made Renovation, KPMG, Elfster, etc.',
            link: 'https://www.klyxx.co/'
        }
    ])

    const workRef = useRef();

    // Case Loading Animations
    useEffect(() => {      
        let ctx = gsap.context(() => {
                let tl = gsap.timeline({});
                    tl.from('.header', {
                        scaleX: 0,
                        duration: 1,
                        ease: 'power4.inOut'
                    });
                    tl.from('.count, .title', {
                        opacity: 0,
                        ease: 'power3.inOut',
                    });
                    tl.from('.content', {
                        scaleY: 0,
                        duration: 1,
                        ease: 'power4.inOut',
                    });
                    tl.from('.tag', {
                        opacity: 0,
                        scale: .5,
                        duration: 1,
                        ease: 'power3.inOut',
                    })
                    tl.from('.copy, .link', {
                        opacity: 0,
                        duration:1,
                        ease: 'power3.inOut',
                    })
                    tl.from('.gallery-img', {
                        opacity: 0,
                        scaleY: 0,
                        duration: 1,
                        ease: 'power3.inOut',
                        stagger: 0.25,
                    })
        }, workRef);
        return() => ctx.revert();
    }, []);

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
                                    {project.images.map((img, i) => (
                                        <img className='gallery-img' src={'./images/' + img} key={i} alt={project.name + ' ' + i} width={screenWidth <= 749 ? 300 : 800} height={screenWidth <= 749 ? 300 : 800}></img>
                                    ))}
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
            ))}
        </div>
    );
}

export default Work;