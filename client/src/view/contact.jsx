import React from "react";
import { useState, useEffect } from "react";
import API_URL from "../config/apiConfig";
function Contact() {
    const [data, setData] = useState(null);
    useEffect(() => {
      // Fetch data from the API endpoint
      // fetch(`${API_URL}/index.php`)
      fetch(API_URL)
        .then(response => {
          if (!response.ok) {
            throw new Error('Failed to fetch data');
          }
          return response.json();
        })
        .then(data => {
          setData(data);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    }, []);
    return ( 
        <div className="contact">
            <h1> contact </h1>
            <p> {data?.fname} {data?.lname}</p>
            <p> {data?.email}</p>
            <br/>
            <div style={{width: '90%', height: '1px', backgroundColor: 'black', marginLeft: '4%', marginRight: '4%'}}> </div>
            <div>
                <br/>
                <p style={{fontSize: '10px', color: 'grey'}}> Notice: This portfolio website is for demonstration purposes. All rights to the respective owners of third-party content are acknowledged. If you have any concerns or inquiries, please contact me</p>
                <br/>
                <p> San Jose State University</p>
                <p> CMPE 272, Enterprise Software Engineering</p>
                <p> Spring 2024 </p>
               <br/>
               <p style={{fontSize: '10px'}}>© 2024 Bunpheng Chhay. All Rights Reserved</p>

            </div>
        </div>
     );
}

export default Contact;