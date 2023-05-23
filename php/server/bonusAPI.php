<?php

include('connect.php');
session_start();
$username = $_SESSION['username'];

if (isset($_POST['bonus_type'])) {
  $bonus_type = $_POST['bonus_type'];
  
  if ($bonus_type == '10_author_invited') {
    $query = "UPDATE users SET balance = balance + 20000, author_count = author_count - 10 WHERE username = '$username'";
  }
  
  $result = mysqli_query($con, $query);
  if ($result) {
    echo('OK');
  }
}

?>