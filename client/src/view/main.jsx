import React from 'react';
import Home from './home';
import Navigation from '../navigation/navigation';
import About from './about';
import Product from './product';
import "../styles/main.css";
import { Parallax } from "react-parallax";
import { Element } from 'react-scroll';
import { useState, useEffect } from 'react';
import Contact from './contact';
import News from './news';
import image1 from '../assets/Cocktail.gif'

// const image1 = "https://i.pinimg.com/564x/43/fd/49/43fd49df886982623d56594ceb7786e8.jpg";
const image2 = "https://i.pinimg.com/564x/ff/91/cb/ff91cb251c5eb901b69ea315cfad45cc.jpg";
const image3 = "https://i.pinimg.com/564x/dc/77/31/dc7731faf0d29961a037f0ba09d8f72e.jpg";
const image4 = "https://images.pexels.com/photos/2437299/pexels-photo-2437299.jpeg";
function Main() {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [newsHeight, setNewHeight] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
            setScrollPosition(scrollPercentage);
            const divElement = document.getElementById('news'); // Replace 'your-div-id' with the actual id of your div
            const rect = divElement.clientHeight;
            const middlePosition = (rect.top + rect.bottom) / 2;
            setNewHeight(middlePosition);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);


    return (
        <div>
            <Navigation positionScroll = {scrollPosition} />
            {/* <div className="fixed-box"> */}
                {/* <div className="container-wrapper"> */}
                    <div className={scrollPosition > 10 ? 'container scroll' : 'container'}>
          
                        <Element name="home">
                            <Parallax bgImage={image1} strength={500}
                            >
                                <Home />
                            </Parallax>
                        </Element>
                        <Element name="about">
                            <Parallax bgImage={image2} strength={500}
                            >
                                <About />
                            </Parallax>
                        </Element>
                        <Element name="product">
                            <Parallax bgImage={image3} strength={500}>
                                <Product />
                            </Parallax>
                        </Element>
                        <Element name="news" id = 'news' className={scrollPosition > newsHeight ? 'newsTwo': ''}>
                            <Parallax strength={500}>
                                <News />
                            </Parallax>
                        </Element>

                    </div>
                    <Element name="contact">
                                <Contact />
                    </Element>
                {/* </div> */}
            {/* </div> */}
        </div>
    );
}

export default Main;