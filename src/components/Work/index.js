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
            copy: 'project',
            link: 'https://r3f-kerosene.vercel.app/'
        },
        {
            name: 'R3F-IMMERSIVE',
            folder: 'r3f-immersive',
            tags: ['3D', 'AR', 'Design', 'Dev'],
            copy: 'project',
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
            copy: 'project',
            link: 'https://www.instagram.com/multnomahdrug/',
        },
        {
            name: 'KLYXX CREATIVE',
            folder: 'klyxx',
            tags: ['Design', 'Dev'],
            copy: 'project',
            link: 'https://www.klyxx.co/'
        }
    ])

    return (
        <div className='work'>
            
        </div>
    );
}

export default Work;