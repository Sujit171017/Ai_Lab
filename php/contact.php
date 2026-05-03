<?php
// contact.php
require_once 'config.php';
if ($_SERVER['REQUEST_METHOD'] !== 'POST') jsonResponse(false, 'Invalid request.');
$conn    = getDB();
$name    = clean($conn, $_POST['name'] ?? '');
$email   = clean($conn, $_POST['email'] ?? '');
$subject = clean($conn, $_POST['subject'] ?? '');
$message = clean($conn, $_POST['message'] ?? '');
if (!$name || !$email || !$subject || !$message) jsonResponse(false, 'All fields are required.');
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) jsonResponse(false, 'Invalid email address.');
if ($conn->query("INSERT INTO contact_messages (name,email,subject,message,created_at) VALUES ('$name','$email','$subject','$message',NOW())")) {
    jsonResponse(true, 'Message sent! We\'ll reply within 24 hours.');
} else {
    jsonResponse(false, 'Failed to send. Please try again.');
}
$conn->close();
?>
