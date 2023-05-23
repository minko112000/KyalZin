<?php

include('connect.php');
session_start();
$username = $_SESSION['username'];

if (isset($_POST['type'])) {
  $query = '';
  $code = $_POST['code'];
  $type = $_POST['type'];
  $edit_text = $_POST['edit_text'];
  $fname = $_POST['fname'];
  $lname = $_POST['lname'];
  $old_p = md5($_POST['old_p']);
  $new_p = md5($_POST['new_p']);
  $gender = $_POST['gender'];
  
  if ($type == 'password') {
    $query_check = "SELECT * FROM users WHERE username = '$username' AND password = '$old_p'";
    $result_check = mysqli_query($con, $query_check);
    if (mysqli_num_rows($result_check) == 1) {
      $query = "UPDATE users SET password = '$new_p' WHERE username = '$username'";
      $result = mysqli_query($con, $query);
      if ($result) {
        echo('OK');
      }
    } else {
      echo('PASSWORD_ERR');
    }
  } else {
    
    if ($type == 'email') {
      $query_check = "SELECT * FROM users WHERE email = '$edit_text'";
      $result_check = mysqli_query($con, $query_check);
      if (mysqli_num_rows($result_check) == 0) {
        $query = "UPDATE users SET $type = '$edit_text' WHERE username = '$username'";
        $result = mysqli_query($con, $query);
        if ($result) {
          echo('OK');
        }
      } else {
        echo('EMAIL_ERR');
      }
    } else if ($type == 'phone') {
      $query_check = "SELECT * FROM users WHERE phone = '$edit_text'";
      $result_check = mysqli_query($con, $query_check);
      if (mysqli_num_rows($result_check) == 0) {
        $query = "UPDATE users SET $type = '$edit_text' WHERE username = '$username'";
        $result = mysqli_query($con, $query);
        if ($result) {
          echo('OK');
        }
      } else {
        echo('PHONE_ERR');
      }
    } else {
      if ($type == 'name') {
        $query1 = "UPDATE users SET fname = '$fname', lname = '$lname' WHERE username = '$username'";
        $result1 = mysqli_query($con, $query1);
        if ($result1) {
          $name = $fname .' ' . $lname;
          $query = "UPDATE contents SET name = '$name' WHERE code = '$code'";
        }
      } else if ($type == 'gender') {
        $query = "UPDATE users SET gender = '$gender' WHERE username = '$username'";
      } else {
        $query = "UPDATE users SET $type = '$edit_text' WHERE username = '$username'";
      }
      $result = mysqli_query($con, $query);
      if ($result) {
        echo('OK');
      }
    }
    
  }
  
}

?>