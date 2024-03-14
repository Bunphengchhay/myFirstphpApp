import React from "react";
import Login from "../components/login";
import { Link } from "react-router-dom";
function Auth(props) {
    return (
        <div className="auth" style={{textAlign: 'center'}}>
            <h3> Welcome to Ecstasy </h3>
            <p> Please login or Create new Account</p>
            <div style={{display: "flex", justifyContent: 'space-around'}}>
                <Link to="/login" style={{borderStyle:'none', backgroundColor: 'transparent', textDecoration: 'none', cursor: 'pointer', color: 'white', backgroundColor: 'green', padding: 5, borderRadius: 5}}>Login</Link>
                <Link to="/signup" style={{borderStyle:'none', backgroundColor: 'transparent', textDecoration: 'underline', cursor: 'pointer', color: 'red', padding: 5}}>Create Account</Link>
            </div>

        </div>
      )
}

export default Auth;