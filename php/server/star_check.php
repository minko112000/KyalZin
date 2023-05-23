<?php

include('connect.php');
session_start();

$star = array();

if (isset($_POST['star'])) {
  $user_code = $_POST['user_code'];
  $query = "SELECT * FROM star WHERE user_code = $user_code";
  $result = mysqli_query($con, $query);
  if ($result) {
    while($row = mysqli_fetch_assoc($result)) {
      $star[] = $row;
    }
  }
}

echo(json_encode($star));

?>