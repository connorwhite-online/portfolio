import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import './index.css';

function Work () {

    const screenWidth = window.innerWidth;
    
    // Project Directory
    const [Projects] = useState([
        {
            name: 'Blackbird',
            images: ['blackbird-01.mp4', 'blackbird-02.png', 'blackbird-03.png', 'blackbird-04.png', 'blackbird-05.png'],
            tags: ['3D', 'Design', 'iOS'],
            copy: '3D assets for Web3 restaurant loyalty app Blackbird. I designed and modeled the tokens, and created custom metal materials optimized for glTF export so they could be deployed in various UX scenarios throughout the iOS app.',
            link: 'https://www.blackbird.xyz/'
        },
        {
            name: 'SQ FT',
            images: ['sqft-01.mp4', 'sqft-02.png', 'sqft-03.png'],
            tags: ['Design', 'Dev', '3D', 'Shopify'],
            copy: 'E-com site for the launch of SQ FT Magazine, from designer and tastemaker Sean Brown. The site features a Shopify backend and an interactive 3D model of the magazine that reacts to the user cursor.',
            link: 'https://readsqft.com/'
        },
        {
            name: 'INITIAL THOUGHTS',
            images: ['oit-01.mp4', 'oit-02.png', 'oit-03.png'],
            tags: ['Design', 'Dev'],
            copy: 'Agency landing page for Initial Thoughts, a creative strategy and design studio with clients ranging from SZA to Ciroc. I designed the site based on a portfolio layout from Désirée Deleau and built it using React and GSAP.',
            link: 'https://ourinitialthoughts.com'
        },
        {
            name: 'MANIPULATE',
            images: ['manipulate.mp4', 'manipulate-01.png', 'manipulate-02.png', 'manipulate-03.png', 'manipulate-04.png'],
            tags: ['Machine Learning', '3D', 'Dev'],
            copy: 'A machine learning experiment that allows users to manipulate 3D objects with their hands. The project uses hand tracking to detect the position of the users hands and maps the position to the rotation of the 3D object. Built with React, three.js, and Tensorflow.js.',
            link: 'https://twitter.com/connor_online/status/1650968335750942722'
        },
        {
            name: 'IN NO PARTICULAR ORDER',
            images: ['inpo-01.mp4', 'inpo-01.png', 'inpo-02.png', 'inpo-03.png', 'inpo-04.png', 'inpo-05.png', 'inpo-06.png'],
            tags: ['Design', 'Dev', '3D'],
            copy: 'A custom Tumblr design and build celebrating the third edition of In No Particular Order, a photojournal by designer and creative director Sean Brown.',
            link: 'https://byseanbrown.tumblr.com/'
        },
        {
            name: "DECENTRALIZED HARDWARE",
            images: ['hardware-01.mp4', 'hardware-01.png', 'hardware-05.png'],
            tags: ['Design', '3D', 'Physical'],
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
            tags: ['3D', 'Design', 'Physical'],
            copy: 'I worked as visual designer for LA-based ceramic studios, LGS, rendering client projects, delivering wiring technical sheets, and designing custom tooling. Client work included lighting for Nicole Hollis, and packaging for a collaboration with Seth Rogens homegoods brand, HousePlant.',
            link: 'https://www.lgsstudio.com'
        },
        {
            name: 'MULTNOMAH DRUG',
            images: ['garageshot.png', 'product-page.png', 'hero-shot.png', 'packaging.png'],
            tags: ['Design', 'Dev', 'Physical'],
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

    // State to hold selected tags
    const [selectedTags, setSelectedTags] = useState([]);

    // Get all unique tags from the projects
    const allTags = [...new Set(Projects.flatMap(project => project.tags))];

    const handleTagClick = (tag) => {
        if (selectedTags.includes(tag)) {
            setSelectedTags(prev => prev.filter(t => t !== tag));
        } else {
            setSelectedTags(prev => [...prev, tag]);
        }
    }

    // Filtered projects based on selected tags
    const filteredProjects = Projects.filter(project => {
        if (selectedTags.length === 0) return true;
        return selectedTags.some(tag => project.tags.includes(tag));
    });

    // Clear tags function
    const clearTags = () => {
        setSelectedTags([]);
    }

    const workRef = useRef();

    // Case Loading Animations
    useEffect(() => {      
        let ctx = gsap.context(() => {
                let tl = gsap.timeline({});
                    tl.from('.tag-filters', {
                        scaleX: 0,
                        duration: 1,
                        ease: 'power4.inOut'
                    });
                    tl.from('.filter-tag', {
                        opacity: 0,
                        scale: 0.75,
                        duration: 1,
                        ease: 'power3.inOut',
                        stagger: 0.25,
                    });
                    tl.from('.header', {
                        scaleX: 0,
                        duration: 1,
                        ease: 'power4.inOut'
                    });
                    tl.from('.content', {
                        scaleY: 0,
                        duration: 1,
                        ease: 'power4.inOut',
                    });
                    tl.from('.count, .title', {
                        opacity: 0,
                        duration: 1,
                        ease: 'power3.inOut',
                    });
                    tl.from('.tag', {
                        opacity: 0,
                        scale: .5,
                        duration: 1,
                        ease: 'power3.inOut',
                    });
                    tl.from('.copy, .link-container', {
                        opacity: 0,
                        duration: 1,
                        ease: 'power3.inOut',
                    });
                    tl.from('.gallery-img', {
                        // opacity: 0,
                        // scaleY: 0,
                        clipPath: 'inset(0 0 100% 0)',
                        duration: 1,
                        ease: 'power3.inOut',
                        stagger: 0.25,
                    });
        }, workRef);
        return() => ctx.revert();
    }, []);

    return (
        <div className='work' ref={workRef}>
            <div className="tag-filters">
                {allTags.map((tag, index) => (
                    <div key={index} className={`filter-tag ${selectedTags.includes(tag) ? 'selected' : ''}`} onClick={() => handleTagClick(tag)}>{tag}</div>
                ))}
                {selectedTags.length > 0 && <div className='filter-tag selected' onClick={clearTags}>Clear All</div>}
            </div>
            {filteredProjects.map((project, index) => (
                    <div className='case' key={project.name}>
                        <div className='header'>
                            <div className='count'>{index +1}</div>
                            <div className='title'>{project.name}</div>
                        </div>
                        <div className='content'>
                            <div className='gallery'>
                                <div className='images'>
                                {project.images.map((media, i) => {
                                    const extension = media.split('.').pop().toLowerCase();

                                    return extension === 'png' || extension === 'jpg' || extension === 'jpeg' || extension === 'gif'
                                    ? <img className='gallery-img' src={'./images/' + media} key={i} alt={project.name + ' ' + i} width={screenWidth <= 749 ? 300 : 800} height={screenWidth <= 749 ? 300 : 800} />
                                    : (extension === 'mp4' || extension === 'mov')
                                    ? <video className='gallery-img' width={screenWidth <= 749 ? 300 : 800} height={screenWidth <= 749 ? 300 : 800} autoPlay loop muted playsInline key={i}>
                                        <source src={'./images/' + media} type={`video/${extension}`} />
                                        Your browser does not support the video tag.
                                    </video>
                                    : null
                                })}
                                </div> 
                            </div>
                            <div className='details'>
                                <div className='tags'>
                                    {project.tags.map((tag, index) => (
                                        <div className='tag' key={index}>{tag}</div>
                                    ))}
                                </div>
                                <div className='copy'>{project.copy}</div>
                                <div className='link-container'><a className='linkout' href={project.link} target="_blank" rel="noopener noreferrer">view live project →</a></div>
                            </div>
                        </div>
                    </div>
            ))}
        </div>
    );
}

export default Work;