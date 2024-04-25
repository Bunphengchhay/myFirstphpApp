import React, { useState, useEffect } from "react";
import API_URL from "../config/apiConfig";

function FindUsers() {
    const [users, setUsers] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch(`${API_URL}/rds/getAllUsers`);
                const data = await response.json();
                setUsers(data);
            } catch (error) {
                console.error("Error fetching users:", error);
            }
        };

        fetchUsers();
    }, []);

    // Filter users based on search query
    const filteredUsers = users.filter((user) => {
        const searchRegex = new RegExp(searchQuery, "i");
        return (
            searchRegex.test(user.id) ||
            searchRegex.test(user.first_name) ||
            searchRegex.test(user.last_name) ||
            searchRegex.test(user.email) ||
            searchRegex.test(user.home_address) ||
            searchRegex.test(user.home_phone) ||
            searchRegex.test(user.cell_phone)
        );
    });

    return ( 
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginBottom: '100px'}}>
            {/* Search bar */}
            <div style={{minWidth: '600px', overflow: 'scroll'}}>
            <h1> Welcome to our platform</h1>
            <input
                type="text"
                placeholder="Search users..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />

            {/* Table to display users */}
            <h2>Users</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Home Address</th>
                        <th>Home Phone</th>
                        <th>Cell Phone</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredUsers.map(user => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.first_name}</td>
                            <td>{user.last_name}</td>
                            <td>{user.email}</td>
                            <td>{user.home_address}</td>
                            <td>{user.home_phone}</td>
                            <td>{user.cell_phone}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>
        </div>
     );
}

export default FindUsers;


// import React, { useState, useEffect } from "react";
// import API_URL from "../config/apiConfig";
// function FindUsers() {
//     const [users, setUsers] = useState([]);

//     useEffect(() => {
//         const fetchUsers = async () => {
//             try {
//                 const response = await fetch(`${API_URL}/rds/getAllUsers`);
//                 const data = await response.json();
//                 setUsers(data);
//             } catch (error) {
//                 console.error("Error fetching users:", error);
//             }
//         };

//         fetchUsers();
//     }, []);

//     return ( 
//         <div>
//             <h2>Users</h2>
//             <table>
//                 <thead>
//                     <tr>
//                         <th>ID</th>
//                         <th>First Name</th>
//                         <th>Last Name</th>
//                         <th>Email</th>
//                         <th>Home Address</th>
//                         <th>Home Phone</th>
//                         <th>Cell Phone</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {users.map(user => (
//                         <tr key={user.id}>
//                             <td>{user.id}</td>
//                             <td>{user.first_name}</td>
//                             <td>{user.last_name}</td>
//                             <td>{user.email}</td>
//                             <td>{user.home_address}</td>
//                             <td>{user.home_phone}</td>
//                             <td>{user.cell_phone}</td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//      );
// }

// export default FindUsers;
