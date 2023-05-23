<?php

include('connect.php');
session_start();

$likes = array();

if (isset($_POST['likes'])) {
  $user_code = $_POST['user_code'];
  $query = "SELECT * FROM likes WHERE user_code = $user_code";
  $result = mysqli_query($con, $query);
  if ($result) {
    while($row = mysqli_fetch_assoc($result)) {
      $likes[] = $row;
    }
  }
}

echo(json_encode($likes));

?>