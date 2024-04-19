<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: GET, OPTIONS");
    header("Access-Control-Allow-Headers: Content-Type");
    header("Content-Type: application/json");

    function getHiddenTextFromFile() {
        $file = "assets/hiddenContact.txt";
        if (file_exists($file)) {
            $fileContent = file_get_contents($file);
            if ($fileContent !== false) {
                // Convert the string representation of an array into an actual PHP array
                $dataArray = eval("return $fileContent;");
                return $dataArray;
            } else {
                http_response_code(500);
                echo json_encode(array("error" => "Failed to read file"));
            }
        } else {
            http_response_code(404);
            echo json_encode(array("error" => "File not found"));
        }
    }

    // Output the array directly
    echo json_encode(getHiddenTextFromFile());
?>
