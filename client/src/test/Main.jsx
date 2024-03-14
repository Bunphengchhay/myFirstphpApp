import React from 'react';
import { useState, useEffect } from 'react';
import Navigation from '../navigation/navigation';
import "../styles/main.css"
import { Parallax } from 'react-parallax';
import image1 from '../assets/Cocktail.gif'
import Home from '../view/home';
import About from '../view/about';
import Product from '../view/product';
import Contact from '../view/contact';
import News from '../view/news';
const image2 = "https://i.pinimg.com/564x/ff/91/cb/ff91cb251c5eb901b69ea315cfad45cc.jpg";
const image3 = "https://i.pinimg.com/564x/dc/77/31/dc7731faf0d29961a037f0ba09d8f72e.jpg";
function Main() {
  const [scrollPosition, setScrollPosition] = useState(0);
    useEffect(() => {
        const handleScroll = () => {
            const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
            setScrollPosition(scrollPercentage);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

  return (
    <div>
      {/* <Navigation/> */}
      <div className={scrollPosition > 10 ? 'container scroll' : 'container'}>
        <div id = "home"> <Parallax bgImage={image1} strength={500}><Home/></Parallax> </div>
        <div id = "about"> <Parallax bgImage={image2} strength={500}><About/></Parallax> </div>
        <div id = "product"> <Parallax  bgImage={image3} strength={500}> <Product/></Parallax></div>
        <News id = "news" className='newsTwo'/>
      </div>
       <Contact id = "contact"/>
    </div>
  );
}

export default Main;
