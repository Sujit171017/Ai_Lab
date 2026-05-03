<?php
session_start();
require_once 'config.php';
if ($_SERVER['REQUEST_METHOD'] !== 'POST') jsonResponse(false, 'Invalid request.');
$conn     = getDB();
$name     = clean($conn, $_POST['name'] ?? '');
$email    = clean($conn, $_POST['email'] ?? '');
$phone    = clean($conn, $_POST['phone'] ?? '');
$password = $_POST['password'] ?? '';
if (!$name || !$email || !$password) jsonResponse(false, 'Name, email and password are required.');
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) jsonResponse(false, 'Invalid email address.');
if (strlen($password) < 8) jsonResponse(false, 'Password must be at least 8 characters.');
$check = $conn->query("SELECT id FROM users WHERE email = '$email'");
if ($check && $check->num_rows > 0) jsonResponse(false, 'An account with this email already exists.');
$hash = password_hash($password, PASSWORD_DEFAULT);
$phone_clean = clean($conn, $phone);
if ($conn->query("INSERT INTO users (name, email, phone, password_hash) VALUES ('$name','$email','$phone_clean','$hash')")) {
    jsonResponse(true, 'Account created successfully! Please log in.');
} else {
    jsonResponse(false, 'Registration failed. Please try again.');
}
$conn->close();
?>
