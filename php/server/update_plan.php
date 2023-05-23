<?php

include('connect.php');

if (isset($_POST['status']) && isset($_POST['user_code'])) {
  $status = $_POST['status'];
  $user_code = $_POST['user_code'];
  $end_date = $_POST['end_date'];
  $sponsor = $_POST['sponsor'];
  $price = 0;
  if ($status == 'basic') {
    $price = 125;
  } else if ($status == 'medium') {
    $price = 250;
  } else {
    $price = 750;
  }
  $query = "UPDATE users SET status = '$status', star = star - $price, end_date = '$end_date' WHERE code = '$user_code'";
  $result = mysqli_query($con, $query);
  if ($result) {
    $query2 = "UPDATE users SET balance = balance + 3000, author_count = author_count + 1 WHERE code = '$sponsor'";
    $result2 = mysqli_query($con, $query2);
    if ($result2) {
      echo('OK');
    }
  }
}

?>