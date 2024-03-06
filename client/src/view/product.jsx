import React from "react";
import { Button } from "react-scroll";

function Product() {
    return ( 
    <div className="section" style={{textAlign: 'center', color: 'white'}}>
        <h1> Menu </h1>
        <p> Enjoy our specialty </p>
        <div id="menu">
            <div>
            {cocktail.map((item, index) => (
                <div key={index} style={{margin: '5px'}}>
                    <img src={item.link} alt="cocktails" width={200} height={200} />
                    <p>{item.text}</p>
                </div>
            ))}
            </div>
            
        </div>
        <Button style={{textDecoration: 'underline', background: 'none', color: 'white', borderStyle: 'none', marginTop: '100px'}}> Click here for more </Button>
    </div> );
}

export default Product;

const cocktail = [
    {
        link: "https://i.pinimg.com/564x/25/46/ca/2546cafb0faa6a10019b81e94464e52e.jpg",
        text: 'Ceylon Arrack'
    },
    {
        link: "https://i.pinimg.com/564x/67/c5/01/67c5011599321e0640a50e5b0eac72a9.jpg",
        text: "Winter blanket"
    },
    {
        link: 'https://i.pinimg.com/564x/50/62/76/5062764356ebcd093314c2fb9b2fe395.jpg',
        text: 'Night Vesper'
    },
    {
        link: "https://i.pinimg.com/564x/53/dd/3e/53dd3e945ea63926fc2e544da0a69377.jpg",
        text: "Martini"
    },
    {
        link: "https://i.pinimg.com/564x/88/e0/39/88e0391fa37f8df2025f5df579aad024.jpg",
        text: "Dubai Venue"
    },
    {
        link: "https://i.pinimg.com/564x/2e/ff/d5/2effd51c4716492050d4729cfe65a050.jpg",
        text: "Carousel Showcase"
    }
]