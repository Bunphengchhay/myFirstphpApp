// import React, {useEffect, useState } from "react";
// import withAuthentication from "../script/withAuthentication";
// import { useLocation, useNavigate } from "react-router-dom";
// function Membership() {
//     const [logoutInProgress, setLogoutInProgress] = useState(false);
//     const navigate = useNavigate();
//     const [names, setNames] = useState([]);

//     useEffect(() => {
//         const storedNames = localStorage.getItem('names');
//         if (storedNames) {
//             setNames(JSON.parse(storedNames));
//         }
//     }, []);
//     return ( 
//         <div style={{textAlign: 'center'}}>
//             <h3> Welcome to Ecstasy </h3>
//             <p> Thank for being a value member!</p>
//             <br/>
//             <p> Members Name</p>
//             {names && names.map((name, index) => (
//                 <p key={index}>{name}</p>
//             ))}
//             <br />
//             <button onClick={() => handleLogout(navigate, setLogoutInProgress)}> Log out </button>
//             {logoutInProgress && <p>Logging out...</p>}
//         </div>
//      );
// }
// export default withAuthentication(Membership);

// async function handleLogout(navigate, setLogoutInProgress) {
//     setLogoutInProgress(true); // Set the flag to indicate logout in progress

//     try {
//         // Perform logout operations asynchronously
//         await new Promise((resolve, reject) => {
//             localStorage.removeItem('authenticated');
//             localStorage.removeItem('userInformation');
//             localStorage.removeItem('names');
//             setTimeout(resolve, 1000); // Simulate a delay of 1 second for the logout process
//         });
        
//         // Reset the flag after logout completes
//         setLogoutInProgress(false);

//         // Redirect to homepage after a delay of 5 seconds
//         setTimeout(() => navigate('/'), 3000);
//     } catch (error) {
//         console.error('Error during logout:', error);
//         // Handle error if necessary
//     }
// }

import React, {useEffect, useState } from "react";
import withAuthentication from "../script/withAuthentication";
import { useLocation, useNavigate } from "react-router-dom";

function Membership({ names }) {
    const [logoutInProgress, setLogoutInProgress] = useState(false);
    const navigate = useNavigate();
    // let location = useLocation();
    // const testData = localStorage.getItem('names')
    const handleLogout = () => {
        setLogoutInProgress(true);

        try {
            localStorage.removeItem('authenticated');
            localStorage.removeItem('names');
            setTimeout(() => {
                setLogoutInProgress(false);
                navigate('/');
            }, 3000);
        } catch (error) {
            console.error('Error during logout:', error);
        }
    };

    // useEffect(()=>{
    //     console.log(testData)
    // }, [testData])

    return ( 
        <div style={{textAlign: 'center'}}>
            <h3> Welcome to Ecstasy </h3>
            <p> Thank for being a value member!</p>
            <br/>
            <p> Members Name</p>
            {names && names.map((name, index) => (
                <p key={index}>{name}</p>
            ))}
            <br />
            <button onClick={() => handleLogout(navigate, setLogoutInProgress)}> Log out </button>
            {logoutInProgress && <p>Logging out...</p>}
        </div>
     );
}

export default withAuthentication(Membership);

