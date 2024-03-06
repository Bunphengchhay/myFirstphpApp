import React from "react";
function About() {
    return ( 
        <div className="section" style={{textAlign: 'center', color: 'white'}}>
                    <h1> the </h1>
                    <p style={{ fontFamily: 'cursive', fontSize: '60px', margin: 0, transform: 'translateY(-50px)' }}> ESCTASY </p>
                    <p> San Jose, California</p>
                    
            <div style={{display:"flex", justifyContent: 'center'}}>
                <div className="cards">
                    <div>
                        <h1> Moment to share </h1>
                    </div>
                    <div>
                        <p style={{fontSize: '18px'}}> Welcome to Esctasy, San Jose's premier cocktail destination, where European bar traditions blend seamlessly to create a unique experience. From classic cocktails to innovative creations, our expert mixologists craft libations that tantalize the senses. Explore our diverse selection of wines, craft beers, and indulge in our curated snacks and desserts. <br/> <br/>Join us at Esctasy and elevate your night out with sophistication and style. Whether you're seeking a cozy spot for an intimate date night or a lively atmosphere to celebrate with friends, our vibrant ambiance and impeccable service ensure every visit is memorable. Cheers to unforgettable moments!</p>
                    </div>
                </div>
            </div>
            <div style={{width: '100%', display: 'flex', justifyContent: 'center', marginTop: '50px'}}>
            <div style={{width: '700px', height: '1px', backgroundColor: 'white'}}> </div>
            </div>

            <p> Follow us on </p>
            <div id= 'social'>
                <img src="https://cambodianoralhistoryproject.byu.edu/wp-content/uploads/2018/11/instagram-icon-1.png" alt="instagram icon" width="30" height="30"/>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/2048px-2021_Facebook_icon.svg.png" alt="facebook icon" width="30" height="30"/>
            </div>
        </div>
     );
}

export default About;