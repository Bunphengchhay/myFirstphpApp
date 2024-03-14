<?php
require_once __DIR__ . '/vendor/autoload.php';

$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv->load();

$host = $_ENV['DB_HOST'] ?? '';
$username = $_ENV['DB_USERNAME'] ?? '';
$password = $_ENV['DB_PASSWORD'] ?? '';
$database = $_ENV['DB_DATABASE'] ?? '';

$inputEmail = $_GET['email'] ?? '';
$inputPassword = $_GET['password'] ?? '';

// Check if email or password is missing
if (empty($inputEmail) || empty($inputPassword)) {
    http_response_code(400);
    echo json_encode(array('error' => 'Email or password is empty'));
    exit;
}

// Create connection
$conn = new mysqli($host, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    http_response_code(500);
    echo json_encode(array('error' => 'Database connection failed'));
    exit;
}

// Perform query to select user by email
$sql = "SELECT firstname, lastname, email, password FROM user_information WHERE email = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("s", $inputEmail);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();
    $dbPassword = trim($row['password']); // Trim whitespace characters
    if (trim($inputPassword) === $dbPassword) {
        // Passwords match, access granted
        echo json_encode(array(
            'status' => 'ok',
            'access' => 'granted',
            'firstname' => $row['firstname'],
            'lastname' => $row['lastname'],
            'email' => $row['email']
        ));
    } else {
        // Passwords don't match, access failed
        http_response_code(401);
        echo json_encode(array(
            'status' => '401',
            'access' => 'denied'
        ));
    }
} else {
    // User not found
    http_response_code(404);
    echo json_encode(array(
        'status' => '404',
        'access' => 'denied'
    ));
}

// Close connection
$stmt->close();
$conn->close();
?>
