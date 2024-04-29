import React, { useEffect } from 'react';
import '../styles/laserbg.css'


function LaserBg({ containerRef }) {
    useEffect(() => {
        const container = containerRef.current;
        const intervalId = setInterval(() => {
            const sizeW = Math.random() * 12;
            const duration = Math.random() * 3;
            const e = document.createElement('div');
            e.setAttribute('class', 'circle');
            container.appendChild(e);
            e.style.width = 2 + sizeW + 'px';
            e.style.left = Math.random() * container.clientWidth + 'px';
            e.style.animationDuration = 2 + duration + 's';

            setTimeout(() => {
                container.removeChild(e);
            }, 5000);
        }, 200);

        return () => {
            clearInterval(intervalId);
        };
    }, [containerRef]);

    return null;
}

export default LaserBg;