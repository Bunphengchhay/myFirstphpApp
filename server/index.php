<?php
// Set headers for API requests
header("Access-Control-Allow-Origin: *"); // Specify allowed domain(s)
header("Access-Control-Allow-Methods: GET, POST, OPTIONS"); // Adjust as needed
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
        echo json_encode(array("error" => "File not found !"));
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

function testEnv(){
    // require_once('test.php');
    echo "<p> hello world</p>";
}

function getHiddenText(){
    require_once('readHiddenText.php');
}

function getFakeAuth(){
    require_once('auth.php');
}

function curlAllInfo(){
    require_once('curlInfo.php');
}

function createUser(){
    require_once('./auth/addnewuser.php');
}

function getAllUsers(){
    require_once('./auth/getAllUserInfo.php');
}

// Check the requested API path
$path = isset($_SERVER['PATH_INFO']) ? $_SERVER['PATH_INFO'] : '';

// // Output JSON data
//echo json_encode(fetchDataFromFile());
//Perform actions based on the API path
switch ($path) {
    case '/curlInfo':
        echo curlAllInfo();
        break;
    case '/test':
        echo testEnv();
        break;
    case '/hidden':
        echo getHiddenText();
        break;
    case '/rds/getAllUsers':
        // create user
        echo getAllUsers();
        break;
    case '/rds/createuser':
        // create user
        echo createUser();
        break;
    case '/rds':
        // Return data from RDS
        echo fetchDataFromRDS();
        break;
    case '/auth':
        echo getFakeAuth();
        break;
    default:
        // Output JSON data
        echo json_encode(fetchDataFromFile());
        break;
}

?>

