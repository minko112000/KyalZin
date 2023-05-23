<?php

include("connect.php");
session_start();

if (!empty($_POST['login-email']) && !empty($_POST['login-password'])) {
  $login_email = $_POST['login-email'];
  $login_password = md5($_POST['login-password']);
  $query = "SELECT * FROM users WHERE email = '$login_email' AND password = '$login_password'";
  $result = mysqli_query($con, $query);
  if (mysqli_num_rows($result) == 1) {
    $user = mysqli_fetch_array($result);
    $username = $user['username'];
    $_SESSION['username'] = $username;
    echo $username;
  } else {
    echo(0);
  }
} else {
  if (!empty($_POST['password'])) {
    $code = rand(10000000000, 99999999999);
    $fname = $_POST['fname'];
    $lname = $_POST['lname'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $sponsor = $_POST['sponsor'];
    ($sponsor == '')? $sponsor = '00000000000' : $sponsor = $_POST['sponsor'];
    $gender = $_POST['gender'];
    $dob = $_POST['dob'];
    $password = md5($_POST['password']);
    $username = md5($email.$code);
    $query = "INSERT INTO users (username, code, fname, lname, email, phone, gender, dob, start_date, sponsor, password)
              VALUES ('$username', '$code', '$fname', '$lname', '$email', '$phone', '$gender', '$dob', NOW(), '$sponsor', '$password')";
    $result = mysqli_query($con, $query);
    if ($result) {
      $query2 = "UPDATE users SET member = member + 1 WHERE code = '$sponsor'";
      $result2 = mysqli_query($con, $query2);
      if ($result2) {
        echo(1);
      }
    }
  }
}

  

?>