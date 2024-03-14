import '../styles/main.css'
import React, { useState } from "react";
import { Link } from 'react-router-dom';
function SignUp() {
    // State to hold the form values
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        cpassword:'',
    });

    // Handle changes in form inputs
    const handleChange = (e) => {
        const { name, value } = e.target; // Get the name and value from the event target
        setFormData(prevState => ({
            ...prevState,
            [name]: value, // Update the corresponding field in the state
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.password !== formData.cpassword) {
            alert("Passwords do not match.");
            return;
        }
        console.log("Form Data Submitted:", formData);
        // Perform additional form validation, submission to backend here
    };

    return ( 
        <div className="login">
            <h3> Welcome to Ecstasy</h3>
            <p> SIGN UP </p>
            <div className= 'myForm'>
                <form id = 'formLogin' onSubmit ={handleSubmit}>
                        <div style={{display: 'flex'}} id = 'eachForm'> 
                            <label htmlFor="firstName">First Name:</label>
                            <input 
                                type="text" 
                                id="firstName" 
                                name="firstName" 
                                placeholder="First Name"
                                value={formData.firstName}
                                onChange={handleChange}/>
                        </div>
                        <div style={{display: 'flex'}} id = 'eachForm'> 
                            <label htmlFor="lastName">Last Name:</label>
                            <input 
                                type="text" 
                                id="lastName" 
                                name="lastName" 
                                placeholder="Last Name"
                                value={formData.lastName}
                                onChange={handleChange}/>
                        </div>
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
                        <div style={{display: 'flex'}} id = 'eachForm'> 
                            <label htmlFor="cpassword">Confirm Password:</label>
                            <input 
                                type="password" 
                                id="cpassword" 
                                name="cpassword" 
                                placeholder="Confirm Password"
                                value={formData.cpassword}
                                onChange={handleChange}
                            />
                        </div>
                        <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}> 
                            <button type="submit" style={{margin: '10px', backgroundColor: 'darkgreen', color: 'white'}}>Submit</button>
                            <Link to="/membership" style={{margin: '10px', borderStyle:'none', backgroundColor: 'transparent', textDecoration: 'underline', cursor: 'pointer', color: 'darkgreen'}}> Login</Link>
                        </div>
                </form>
            </div>
        </div>
     );
}

export default SignUp;