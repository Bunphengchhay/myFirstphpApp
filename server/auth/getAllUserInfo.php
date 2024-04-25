<?php
// Set headers for API requests
header("Access-Control-Allow-Origin: *"); // Specify allowed domain(s)
header("Access-Control-Allow-Methods: GET, OPTIONS"); // Adjust as needed
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

    // Perform query to select all users
    $sql = "SELECT id, first_name, last_name, email, home_address, home_phone, cell_phone FROM users";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        // Fetch all rows as associative array
        $users = $result->fetch_all(MYSQLI_ASSOC);
        
        // Remove password field from each user
        foreach ($users as &$user) {
            unset($user['password']);
        }

        // Output users data as JSON
        echo json_encode($users);
    } else {
        // No users found
        http_response_code(404);
        echo json_encode(array('error' => 'No users found'));
    }

    // Close connection
    $conn->close();

} catch (Exception $e) {
    // Handle exceptions
    http_response_code($e->getCode());
    echo json_encode(array('error' => $e->getMessage()));
}
?>
