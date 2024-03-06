<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: *");
header("Content-Type: application/json");

function fetchDataFromFile() {
    $file = "assets/contact.txt"; // Path to your text file
    $fileContent = file_get_contents($file); // Read the content of the file
    $data = json_decode($fileContent, true); // Decode the JSON content into an associative array
    return $data;
}

// if (strpos($_SERVER['REQUEST_URI'], '/data') !== false) {
//     echo json_encode(fetchData());
// }
echo json_encode(fetchDataFromFile());
?>
