<?php
session_start();
require_once 'config.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') jsonResponse(false, 'Invalid request.');

$conn        = getDB();
$name        = clean($conn, $_POST['name'] ?? '');
$email       = clean($conn, $_POST['email'] ?? '');
$phone       = clean($conn, $_POST['phone'] ?? '');
$travelers   = clean($conn, $_POST['travelers'] ?? '');
$tour        = clean($conn, $_POST['tour'] ?? '');
$travel_date = clean($conn, $_POST['travel_date'] ?? '');
$requests    = clean($conn, $_POST['requests'] ?? '');
$payment     = clean($conn, $_POST['payment'] ?? '');

if (!$name || !$email || !$phone || !$tour || !$travel_date || !$travelers)
    jsonResponse(false, 'Please fill in all required fields.');
if (!filter_var($email, FILTER_VALIDATE_EMAIL))
    jsonResponse(false, 'Please enter a valid email address.');
if (strtotime($travel_date) < strtotime('today'))
    jsonResponse(false, 'Travel date must be in the future.');

$booking_id = 'BDT-' . strtoupper(substr(md5(uniqid()), 0, 6));

$sql = "INSERT INTO bookings (booking_id, name, email, phone, travelers, tour, travel_date, special_requests, payment_method, status, created_at)
        VALUES ('$booking_id','$name','$email','$phone','$travelers','$tour','$travel_date','$requests','$payment','pending',NOW())";

if ($conn->query($sql)) {
    jsonResponse(true, "Booking confirmed! Your ID is $booking_id. We'll contact you within 24 hours.", ['booking_id' => $booking_id]);
} else {
    jsonResponse(false, 'Booking failed. Please try again.');
}
$conn->close();
?>
