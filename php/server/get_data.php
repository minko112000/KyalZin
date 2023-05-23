<?php

include('connect.php');
session_start();

$data = [
  'id' => '',
  'code' => '',
  'fname' => '',
  'lname' => '',
  'profile' => '',
  'account_type' => '',
  'status' => '',
  'balance' => '',
  'statuss' => '',
  'star' => '',
  'pen' => '',
  'author_count' => '',
  'follower' => '',
  'earning' => '',
  'member' => '',
  'email' => '',
  'phone' => '',
  'gender' => '',
  'dob' => '',
  'start_date' => '',
  'end_date' => '',
  'sponsor' => ''
  ];
$query;

if (isset($_GET['username'])) {
  if ($_GET['username'] == $_SESSION['username']) {
    $username = $_SESSION['username'];
    $query = "SELECT * FROM users WHERE username = '$username'";
  }
}

if (isset($_GET['user_code'])) {
  $user_code = $_GET['user_code'];
  $query = "SELECT * FROM users WHERE code = '$user_code'";
}

$result = mysqli_query($con, $query);
if (mysqli_num_rows($result) == 1) {
  $row = mysqli_fetch_array($result);
  $data['id'] = $row['id'];
  $data['code'] = $row['code'];
  $data['fname'] = $row['fname'];
  $data['lname'] = $row['lname'];
  $data['profile'] = $row['profile'];
  $data['account_type'] = $row['account_type'];
  $data['status'] = $row['status'];
  $data['balance'] = $row['balance'];
  $data['statuss'] = $row['status'];
  $data['star'] = $row['star'];
  $data['pen'] = $row['pen'];
  $data['author_count'] = $row['author_count'];
  $data['follower'] = $row['follower'];
  $data['earning'] = $row['earning'];
  $data['member'] = $row['member'];
  $data['email'] = $row['email'];
  $data['phone'] = $row['phone'];
  $data['gender'] = $row['gender'];
  $data['dob'] = $row['dob'];
  $data['start_date'] = $row['start_date'];
  $data['end_date'] = $row['end_date'];
  $data['sponsor'] = $row['sponsor'];
} else {
  echo(0);
}

echo json_encode($data);

?>