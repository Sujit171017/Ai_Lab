<?php
// login.php
session_start();
require_once 'config.php';
if ($_SERVER['REQUEST_METHOD'] !== 'POST') jsonResponse(false, 'Invalid request.');
$conn     = getDB();
$email    = clean($conn, $_POST['email'] ?? '');
$password = $_POST['password'] ?? '';
if (!$email || !$password) jsonResponse(false, 'Please enter email and password.');
$result = $conn->query("SELECT id, name, password_hash FROM users WHERE email = '$email' LIMIT 1");
if ($result && $result->num_rows === 1) {
    $user = $result->fetch_assoc();
    if (password_verify($password, $user['password_hash'])) {
        $_SESSION['user_id']   = $user['id'];
        $_SESSION['user_name'] = $user['name'];
        jsonResponse(true, 'Login successful! Redirecting...', ['name' => $user['name']]);
    } else {
        jsonResponse(false, 'Incorrect password.');
    }
} else {
    jsonResponse(false, 'No account found with that email.');
}
$conn->close();
?>
