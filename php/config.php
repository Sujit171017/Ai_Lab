<?php
// =====================================
//  DATABASE CONFIG — php/config.php
// =====================================

define('DB_HOST', 'localhost');
define('DB_USER', 'root');       // আপনার MySQL username
define('DB_PASS', '');           // আপনার MySQL password
define('DB_NAME', 'bd_dreamtour_db');

function getDB() {
    $conn = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME);
    if ($conn->connect_error) {
        die(json_encode(['success' => false, 'message' => 'Database connection failed.']));
    }
    $conn->set_charset('utf8mb4');
    return $conn;
}

function jsonResponse($success, $message, $data = []) {
    header('Content-Type: application/json');
    echo json_encode(array_merge(['success' => $success, 'message' => $message], $data));
    exit;
}

function clean($conn, $val) {
    return $conn->real_escape_string(htmlspecialchars(trim($val)));
}
?>
