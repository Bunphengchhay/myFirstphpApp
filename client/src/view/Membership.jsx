import React, {useState } from "react";
import withAuthentication from "../script/withAuthentication";
import { useNavigate } from "react-router-dom";
function Membership() {
    const [logoutInProgress, setLogoutInProgress] = useState(false);
    const navigate = useNavigate();

    return ( 
        <div style={{textAlign: 'center'}}>
            <h3> Welcome to Ecstasy </h3>
            <p> Thank for being a value member!</p>
            <button onClick={() => handleLogout(navigate, setLogoutInProgress)}> Log out </button>
            {logoutInProgress && <p>Logging out...</p>}
        </div>
     );
}
export default withAuthentication(Membership);

async function handleLogout(navigate, setLogoutInProgress) {
    setLogoutInProgress(true); // Set the flag to indicate logout in progress

    try {
        // Perform logout operations asynchronously
        await new Promise((resolve, reject) => {
            localStorage.removeItem('authenticated');
            localStorage.removeItem('userInformation');
            setTimeout(resolve, 1000); // Simulate a delay of 1 second for the logout process
        });
        
        // Reset the flag after logout completes
        setLogoutInProgress(false);

        // Redirect to homepage after a delay of 5 seconds
        setTimeout(() => navigate('/'), 3000);
    } catch (error) {
        console.error('Error during logout:', error);
        // Handle error if necessary
    }
}
