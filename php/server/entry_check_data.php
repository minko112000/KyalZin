<?php

include('connect.php');

$status = [
  'email_status' => '',
  'phone_status' => '',
  'sponsor_status' => '',
];

if (!empty($_GET['email'])) {
  $email = $_GET['email'];
  $right = $_GET['email'];
  $query = "SELECT * FROM users WHERE email = '$email'";
  $result = mysqli_query($con, $query);
  if (mysqli_num_rows($result) == 0) {
    $status['email_status'] = 200;
  } else {
    $status['email_status'] = 0;
  }
}

if (!empty($_GET['phone'])) {
  $phone = $_GET['phone'];
  $right = $_GET['phone'];
  $query = "SELECT * FROM users WHERE phone = '$phone'";
  $result = mysqli_query($con, $query);
  if (mysqli_num_rows($result) == 0) {
    $status['phone_status'] = 200;
  } else {
    $status['phone_status'] = 0;
  }
}

if (!empty($_GET['sponsor'])) {
  $sponsor = $_GET['sponsor'];
  $right = $_GET['sponsor'];
  $query = "SELECT * FROM users WHERE code = '$sponsor'";
  $result = mysqli_query($con, $query);
  if (mysqli_num_rows($result) != 0) {
    $status['sponsor_status'] = 200;
  } else {
    $status['sponsor_status'] = 0;
  }
}

echo(json_encode($status));

?>