<?php
// Set headers for API requests
header("Access-Control-Allow-Origin: *"); // Specify allowed domain(s)
header("Access-Control-Allow-Methods: POST, OPTIONS"); // Adjust as needed
header("Access-Control-Allow-Headers: Content-Type"); // Adjust as needed
header("Content-Type: application/json");
require_once __DIR__ . '/../vendor/autoload.php';

// $dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv = Dotenv\Dotenv::createImmutable(__DIR__ . '/../');
$dotenv->load();

$host = $_ENV['DB_HOST'] ?? '';
$username = $_ENV['DB_USERNAME'] ?? '';
$password = $_ENV['DB_PASSWORD'] ?? '';
$database = $_ENV['DB_DATABASE'] ?? '';


try {
    // Create connection
    $conn = new mysqli($host, $username, $password, $database);
    
    // Check connection
    if ($conn->connect_error) {
        throw new Exception('Database connection failed', 500);
    }

    // Debug: Inspect received POST data
    var_dump($_POST);

    // Extract data from POST parameters
    $firstName = $_POST['first_name'] ?? '';
    $lastName = $_POST['last_name'] ?? '';
    $email = $_POST['email'] ?? '';
    $password = $_POST['password'] ?? '';

    var_dump($_POST['first_name']);
    var_dump($lastName);
    var_dump($email);
    var_dump($password);

    // // Validate required fields
    // if (empty($firstName) || empty($lastName) || empty($email) || empty($password)) {
    //     throw new Exception('Missing required fields', 400);
    // }

    // // Check if email already exists
    // $checkSql = "SELECT * FROM users WHERE email = ?";
    // $checkStmt = $conn->prepare($checkSql);
    // $checkStmt->bind_param("s", $email);
    // $checkStmt->execute();
    // $checkResult = $checkStmt->get_result();

    // if ($checkResult->num_rows > 0) {
    //     // Email already exists in the database
    //     http_response_code(409); // HTTP status code for Conflict
    //     echo json_encode(array('status' => 'fail', 'message' => 'User already exists'));
    // } else {
    //     // Perform query to insert new user
    //     $insertSql = "INSERT INTO users (first_name, last_name, email, password) VALUES (?, ?, ?, ?)";
    //     $insertStmt = $conn->prepare($insertSql);
    //     $insertStmt->bind_param("ssss", $firstName, $lastName, $email, $password);

    //     if ($insertStmt->execute()) {
    //         // User created successfully
    //         http_response_code(201); // HTTP status code for Created
    //         echo json_encode(array('status' => 'ok', 'message' => 'User created successfully'));
    //     } else {
    //         // Failed to create user
    //         http_response_code(500);
    //         echo json_encode(array('error' => 'Failed to create user'));
    //     }

    //     // Close insert statement
    //     $insertStmt->close();
    // }

    // // Close connection
    // $checkStmt->close();
    // $conn->close();

} catch (Exception $e) {
    // Handle exceptions
    http_response_code($e->getCode());
    echo json_encode(array('error' => $e->getMessage()));
}
?>
