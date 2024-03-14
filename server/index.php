<?php
// Set headers for API requests
header("Access-Control-Allow-Origin: *"); // Specify allowed domain(s)
header("Access-Control-Allow-Methods: GET, OPTIONS"); // Adjust as needed
header("Access-Control-Allow-Headers: Content-Type"); // Adjust as needed
header("Content-Type: application/json");

// Function to fetch data from file
function fetchDataFromFile() {
    $file = "assets/contact.txt"; // Path to your text file
    if (file_exists($file)) {
        $fileContent = file_get_contents($file); // Read the content of the file
        if ($fileContent !== false) {
            $data = json_decode($fileContent, true); // Decode the JSON content into an associative array
            if ($data !== null) {
                return $data;
            } else {
                http_response_code(500); // Internal Server Error
                echo json_encode(array("error" => "Failed to decode JSON"));
            }
        } else {
            http_response_code(500); // Internal Server Error
            echo json_encode(array("error" => "Failed to read file"));
        }
    } else {
        http_response_code(404); // Not Found
        echo json_encode(array("error" => "File not found"));
    }
}

// Handle OPTIONS requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200); // OK
    exit;
}

function fetchDataFromRDS(){
    require_once('RDSlogin.php');
}

// Check the requested API path
$path = isset($_SERVER['PATH_INFO']) ? $_SERVER['PATH_INFO'] : '';

// // Output JSON data
// echo json_encode(fetchDataFromFile());
// Perform actions based on the API path
switch ($path) {
    case '/rds':
        // Return data from RDS
        fetchDataFromRDS();
        break;
    default:
        // Output JSON data
        echo json_encode(fetchDataFromFile());
        break;
}
?>

