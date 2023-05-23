<?php

include('connect.php');
session_start();

$save = array();

if (isset($_POST['save'])) {
  $user_code = $_POST['user_code'];
  $query = "SELECT * FROM save WHERE user_code = $user_code";
  $result = mysqli_query($con, $query);
  if ($result) {
    while($row = mysqli_fetch_assoc($result)) {
      $save[] = $row;
    }
  }
}

echo(json_encode($save));

?>