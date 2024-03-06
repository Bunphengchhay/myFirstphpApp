// Define the default base URL and API endpoint
const DEFAULT_BASE_URL = 'http://54.67.117.128';
const API_ENDPOINT = '/api/index.php';

// Concatenate the base URL and API endpoint
const BASE_URL = process.env.REACT_APP_API_URL || DEFAULT_BASE_URL;
const API_URL = `${BASE_URL}${API_ENDPOINT}`;

export default API_URL;
