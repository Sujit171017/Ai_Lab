<?php
require_once 'config.php';
if ($_SERVER['REQUEST_METHOD'] !== 'POST') jsonResponse(false, 'Invalid request.');
$conn  = getDB();
$email = clean($conn, $_POST['email'] ?? '');
if (!$email || !filter_var($email, FILTER_VALIDATE_EMAIL)) jsonResponse(false, 'Please enter a valid email.');
$check = $conn->query("SELECT id FROM newsletter WHERE email = '$email'");
if ($check && $check->num_rows > 0) jsonResponse(false, 'You are already subscribed!');
if ($conn->query("INSERT INTO newsletter (email, subscribed_at) VALUES ('$email', NOW())")) {
    jsonResponse(true, 'Subscribed! Welcome to Bangladesh Dream Tour.');
} else {
    jsonResponse(false, 'Subscription failed. Please try again.');
}
$conn->close();
?>
