import React, { useRef, useState, useEffect } from 'react';
import { Parallax } from "react-parallax";

function News() {
    const containerRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleScroll = () => {
        const scrollLeft = containerRef.current.scrollLeft;
        const newIndex = Math.round(scrollLeft / containerRef.current.offsetWidth);
        setCurrentIndex(newIndex);
    };

    useEffect(() => {
        containerRef.current.addEventListener('scroll', handleScroll);
        return () => {
            containerRef.current.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToIndex = (index) => {
        containerRef.current.scrollTo({
            left: index * containerRef.current.offsetWidth,
            behavior: 'smooth',
        });
    };

    return (
        <div className="section news" style={{ overflow: 'hidden', position: 'relative' }}>
            <h1 style={{ textAlign: 'center' }}>News feeds</h1>
            <div className= "newsScroll" style={{ display: 'flex', scrollSnapType: 'x mandatory', width: '100%', height: '100vh', overflowX: 'scroll', overflowY: 'hidden' }} ref={containerRef}>
                {imageDT?.map((image, index) => (
                    <Parallax key={index} bgImage={image['link']} strength={500} style={{ minWidth: '100%', flex: '0 0 auto', scrollSnapAlign: 'start' }}>
                        <div style={{ width: '100%', height: '100vh' }}>
                        </div>
                    </Parallax>
                ))}
            </div>
            <div style={{ position: 'absolute', bottom: '20px', left: '50%', transform: 'translateX(-50%)', zIndex: 1000, display: 'flex' }}>
                {[...Array(imageDT.length).keys()].map((index) => (
                    <div key={index} style={{ width: '15px', height: '3px', backgroundColor: currentIndex === index ? 'green' : 'black', marginRight: '10px', cursor: 'pointer' }} onClick={() => scrollToIndex(index)} />
                ))}
            </div>
        </div>
    );
}

export default News;


;




const imageDT = [
    {
        link: "https://i.pinimg.com/564x/73/33/69/73336993f4457dc68cb1d7f84539b4f3.jpg"
    },
    {
        link: 'https://i.pinimg.com/564x/b3/52/c6/b352c6a26a02f2ee4ce3a2e7d6baa32d.jpg'
    },
    {
        link: "https://i.pinimg.com/564x/2e/0a/ca/2e0acaf5bc085e9055d2c6fcc1248a71.jpg"
    },
    {
        link: 'https://i.pinimg.com/564x/9d/98/fd/9d98fda67a8a695e5ff999936ab834c6.jpg'
    },
    {
        link: "https://i.pinimg.com/564x/56/a4/83/56a483b558f62f8fdcaa13b2c91f2cd2.jpg"
    }
]