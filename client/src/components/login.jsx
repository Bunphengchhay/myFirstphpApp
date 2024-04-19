import '../styles/main.css'
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';
import API_URL from "../config/apiConfig";


function Login() {
    const [loading, setLoading] = useState(false);
    // State to hold the form values
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const navigate = useNavigate();
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    // Handle changes in form inputs
    const handleChange = (e) => {
        const { name, value } = e.target; // Get the name and value from the event target
        setFormData(prevState => ({
            ...prevState,
            [name]: value, // Update the corresponding field in the state
        }));
    };
// const handleSubmit = async (e) => {
//     e.preventDefault();
//     const queryString = `?username=${formData.email}&password=${formData.password}`;

//     setLoading(true); // Set loading state to true

//     try {
//         // const response = await fetch(`${API_URL}/rds${queryString}`);
//         const response = await fetch(`${API_URL}/auth${queryString}`);
//         if (response.ok) {
//             const data = await response.json();
//             console.log('API Response:', data);

//             // Set localStorage items
//             localStorage.setItem('authenticated', true);
//             localStorage.setItem('userInformation', JSON.stringify(data));
//             setIsAuthenticated(true);

//             // Redirect to /membership
//             navigate('/membership');
//         } else {
//             console.error('Error:', response.statusText);
//         }
//     } catch (error) {
//         console.error('Error:', error);
//     } finally {
//         setLoading(false); // Reset loading state
//     }
// };

// const handleSubmit = async (e) => {
//     e.preventDefault();
//     const queryString = `?username=${formData.email}&password=${formData.password}`;

//     setLoading(true); // Set loading state to true

//     try {
//         // const response = await fetch(`${API_URL}/rds${queryString}`);
//         const response = await fetch(`${API_URL}/auth${queryString}`);
//         if (response.ok) {
//             const data = await response.text(); // Get HTML content as text

//             // Check if authentication was successful using the HTML content
//             if (data) {
//                 // Set localStorage items
//                 localStorage.setItem('authenticated', true);
//                 setIsAuthenticated(true);

//                 // Redirect to /membership
//                 // navigate('/membership');
//                 navigate('/membership', { htmlData: data });
//             } else {
//                 // Display authentication failure message
//                 console.error('Authentication failed:', data);
//             }
//         } else {
//             console.error('Error:', response.statusText);
//         }
//     } catch (error) {
//         console.error('Error:', error);
//     } finally {
//         setLoading(false); // Reset loading state
//     }
// };

const handleSubmit = async (e) => {
    e.preventDefault();
    const queryString = `?username=${formData.email}&password=${formData.password}`;

    setLoading(true); // Set loading state to true

    try {
        const response = await fetch(`${API_URL}/auth${queryString}`);
        if (response.ok) {
            const data = await response.json();

            if (data.status === "success") {
                // Set localStorage items
                localStorage.setItem('authenticated', 'true');
                localStorage.setItem('names', JSON.stringify(data.names)); // Store names array in localStorage
                setIsAuthenticated(true);
                setLoading(false); // Reset loading state
                // Navigate to membership after data is set
                console.log(localStorage.getItem('names'))
                navigate('/membership');
            } else {
                console.error('Authentication failed:', data.message);
            }
        } else {
            console.error('Error:', response.statusText);
        }
    } catch (error) {
        console.error('Error:', error);
        setLoading(false); // Reset loading state
    }
};







    return ( 
        <div className="login">
            <h3> Welcome to Ecstasy</h3>
            <p> Login</p>
            <div className= 'myForm'>
                <form id = 'formLogin' onSubmit ={handleSubmit}>
                         <div style={{display: 'flex'}} id = 'eachForm'> 
                            <label htmlFor="email">Email:</label>
                            <input 
                                type="text" 
                                id="email" 
                                name="email" 
                                placeholder="Email"
                                value={formData.email}
                                onChange={handleChange}/>
                        </div>
                        <div style={{display: 'flex'}} id = 'eachForm'> 
                            <label htmlFor="password">Password:</label>
                            <input 
                                type="password" 
                                id="password" 
                                name="password" 
                                placeholder="Password"
                                value={formData.password}
                                onChange={handleChange}
                            />
                        </div>
                        {!loading &&<div style={{width: '100%', display: 'flex', justifyContent: 'center'}}> 
                            <button type="submit" style={{margin: '10px', backgroundColor: 'darkgreen', color: 'white'}}>Submit</button>
                            <p style={{margin: '10px', textDecoration: 'underline'}}> Forget Password</p>
                        </div>}
                        {loading && <p> Loading...</p>}
                </form>
            </div>
            <Link to="/signup" style={{borderStyle:'none', backgroundColor: 'transparent', textDecoration: 'underline', cursor: 'pointer'}}>Create Account</Link>
        </div>
     );
}

export default Login;