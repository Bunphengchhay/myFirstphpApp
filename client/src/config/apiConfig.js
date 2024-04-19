// Define the default base URL and API endpoint
// Define the default base URL and API endpoint
const DEFAULT_BASE_URL = 'http://54.67.117.128';
const LOCAL_BASE_URL = 'http://localhost';
const API_ENDPOINT = '/index.php';

// Check if running locally
const isLocal = window.location.hostname === 'localhost';

// Set the base URL accordingly
const BASE_URL = isLocal ? LOCAL_BASE_URL : DEFAULT_BASE_URL;

// Concatenate the base URL and API endpoint
const API_URL = isLocal ? `${BASE_URL}${API_ENDPOINT}` : `${BASE_URL}/api${API_ENDPOINT}`;

export default API_URL;

// const DEFAULT_BASE_URL = 'http://54.67.117.128';
// const LOCAL_BASE_URL = 'http://localhost';
// const API_ENDPOINT = '/index.php';

// // Check if running locally
// const isLocal = window.location.hostname === 'localhost';

// // Set the base URL accordingly
// const BASE_URL = isLocal ? LOCAL_BASE_URL : DEFAULT_BASE_URL;

// // Concatenate the base URL and API endpoint
// const API_URL = `${BASE_URL}${API_ENDPOINT}`;

// // Append '/api' in front of '/index.php' if not running locally
// if (!isLocal) {
//     API_URL = `${BASE_URL}/api${API_ENDPOINT}`;
// }

// export default API_URL;

// // Define the default base URL and API endpoint
// const DEFAULT_BASE_URL = 'http://54.67.117.128';
// const API_ENDPOINT = '/api/index.php';

// // Concatenate the base URL and API endpoint
 //const BASE_URL = process.env.REACT_APP_API_URL || DEFAULT_BASE_URL;
 //const API_URL = `${BASE_URL}${API_ENDPOINT}`;

 //export default API_URL;


// // running local http://localhost/index.php
