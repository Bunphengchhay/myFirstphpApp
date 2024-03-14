<?php
	header("Access-Control-Allow-Origin: *"); // Specify allowed domain(s)
	header("Access-Control-Allow-Methods: GET, OPTIONS"); // Adjust as needed
	header("Access-Control-Allow-Headers: Content-Type"); // Adjust as needed
	header("Content-Type: application/json");
	
	require_once __DIR__ . '/vendor/autoload.php';

	$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
	$dotenv->load();

	$host = $_ENV['DB_HOST'] ?? '';
	$username = $_ENV['DB_USERNAME'] ?? '';
	$password = $_ENV['DB_PASSWORD'] ?? '';
	$database = $_ENV['DB_DATABASE'] ?? '';
	$inputEmail = $_GET['email'] ?? '';
	$inputPassword = $_GET['password'] ?? '';
	
	echo $host;
	echo $username;
	echo $password;
	echo $database;

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
	// Check if email or password is missing
	echo "test";

    //if (empty($host) || empty($username) || empty($password) || empty($database)){
    //   hhtp_response_code(500)
    //   echo json_encode(array('error' => 'Missing Credential'));	
   // }
  // Close connection


// Close connection
$stmt->close();
$conn->close();

?>
