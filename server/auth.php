<?php
// Set headers for API requests
header("Access-Control-Allow-Origin: *"); // Specify allowed domain(s)
header("Access-Control-Allow-Methods: GET, POST, OPTIONS"); // Adjust as needed
header("Access-Control-Allow-Headers: Content-Type"); // Adjust as needed
header("Content-Type: application/json");

function checkCredentials($username, $password) {
    // Load JSON file
    $json = file_get_contents('./authentication/auth.json');
    $data = json_decode($json, true);

    // Check each entry in the "Auth" array
    foreach ($data['Auth'] as $auth) {
        // If username matches
        if ($auth['email'] === $username) {
            // Check if password matches
            if ($auth['password'] === $password) {
                return true; // Credentials are valid
            } else {
                return false; // Incorrect password
            }
        }
    }
    return false; // Username not found
}

function getNamesFromFile($filePath) {
    // Read the file and split its contents into an array of lines
    $names = file($filePath, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
    return $names;
}

// Usage example
$username = $_GET['username'] ?? null;
$password = $_GET['password'] ?? null;

if ($username && $password) {
    if (checkCredentials($username, $password)) {
        // Path to the membership file
        $filePath = './authentication/membership.txt';
        $names = getNamesFromFile($filePath);
        // Return JSON response with status success and names
        echo json_encode(["status" => "success", "names" => $names]);
    } else {
        // Return JSON response with error message
        echo json_encode(["status" => "error", "message" => "Invalid username or password"]);
    }
} else {
    // Return JSON response with error message
    echo json_encode(["status" => "error", "message" => "Please provide both username and password"]);
}
?>
