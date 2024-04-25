<?php

// Function to fetch data from the text file
function fetchTextData() {
    $textUrl = "https://manjeshprasad.com/Assignment2/textfiles/loginInfo.txt";
    $textData = file_get_contents($textUrl);
    return explode("\n", trim($textData));
}
function fetchSecondData() {
    $textUrl = "https://manjeshprasad.com/Assignment2/textfiles/loginInfo.txt";
    $textData = file_get_contents($textUrl);
    return explode("\n", trim($textData));
}

// Function to fetch data from the HTML response and extract names
function fetchAndExtractNames() {
    $htmlUrl = "https://hugecrab.com/curl/";

    // Initialize cURL session
    $curl = curl_init();
    curl_setopt($curl, CURLOPT_URL, $htmlUrl);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    
    // Execute cURL request
    $htmlData = curl_exec($curl);

    // Close cURL session
    curl_close($curl);

    // Initialize DOMDocument
    $dom = new DOMDocument();
    
    // Load HTML data into DOMDocument
    @$dom->loadHTML($htmlData);

    // Extract text content from <pre> tags
    $preTags = $dom->getElementsByTagName('pre');
    $names = [];

    // Iterate through <pre> tags and extract text content
    foreach ($preTags as $preTag) {
        $names[] = $preTag->textContent;
    }

    return $names;
}

// Function to process names
function processNames($names) {
    $cleanedNames = [];
    foreach ($names as $name) {
        $cleanedNames[] = trim(preg_replace('/\s+/', ' ', $name));
    }
    return $cleanedNames;
}

// Fetch and process data for company A (text file)
$companyA = fetchTextData();

// Fetch and process data for company B (HTML response)
$companyB = fetchAndExtractNames();
$companyB = processNames($companyB);
$companyC = fetchSecondData();

// Construct the final response JSON
$response = [
    'status' => 'success',
    'company_A' => $companyA,
    'company_B' => $companyB,
    'company_C' => $companyC
];

// Encode the response JSON
$jsonResponse = json_encode($response, JSON_PRETTY_PRINT);

// Set the content type header
header('Content-Type: application/json');

// Output the response JSON
echo $jsonResponse;
?>