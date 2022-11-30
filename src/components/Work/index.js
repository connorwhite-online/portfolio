import React, { useState } from 'react';
import gsap from 'gsap';
import './index.css';

function Work () {

    const [Projects] = useState([
        {
            name: 'JESS FORD CARE',
            folder: 'jessford',
            tags: ['Design', 'Dev'],
            copy: 'project',
            link: 'https://jessford.care'
        },
        {
            name: 'R3F-KEROSENE',
            folder: 'r3f-kerosene',
            tags: ['3D', 'Design', 'Dev'],
            copy: 'Quick-start framework for performant, real-time 3D apps using React.js to create reusable components from three.js scenes and models.',
            link: 'https://r3f-kerosene.vercel.app/'
        },
        {
            name: 'R3F-IMMERSIVE',
            folder: 'r3f-immersive',
            tags: ['3D', 'AR', 'Design', 'Dev'],
            copy: 'A framework for creating immersive VR/AR experiences using React.js, three.js, and WebXR. The demo is only visible via mobile VR browsers (I recommend Mozilla XR Viewer) or VR headset. A testament to the current limitations of WebXR.',
            link: 'https://r3f-immersive.vercel.app/',
        },
        {
            name: 'LGS STUDIO',
            folder: 'lgs',
            tags: ['3D', 'Design', 'Fabrication'],
            copy: 'project',
            link: 'https://www.lgsstudio.com'
        },
        {
            name: 'MULTNOMAH DRUG',
            folder: 'multnomahdrug',
            tags: ['Design', 'Dev', 'Apparel'],
            copy: 'In the summer of 2020, I designed, manufactured, and distributed over 3000 masks with the help of local manufacturers and a houseless advocacy agency.',
            link: 'https://www.instagram.com/multnomahdrug/',
        },
        {
            name: 'KLYXX CREATIVE',
            folder: 'klyxx',
            tags: ['Design', 'Dev'],
            copy: 'Design and Webflow development for NYC-based creative agency. My role included in-depth case studies of previous work as well as new presentation assets.',
            link: 'https://www.klyxx.co/'
        }
    ])
    
    return (
        <div className='work'>
            {Projects.map((project, index) => (
                <div className='case' key={index}>
                    <div className='header'>
                        <div className='count'>0{index +1}</div>
                        <div className='title'>{project.name}</div>
                    </div>
                    <div className='content'>
                        <div className='gallery'>
                            <div className='images'>

                            </div>
                            <div className='drag'>DRAG</div>
                            {/* enter image function */}   
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