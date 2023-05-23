<?php

include('connect.php');
session_start();

$removed_post = array();

if (isset($_POST['removed_post'])) {
  $user_code = $_POST['user_code'];
  $query = "SELECT * FROM removed_post WHERE user_code = '$user_code'";
  $result = mysqli_query($con, $query);
  if ($result) {
    while($row = mysqli_fetch_assoc($result)) {
      $removed_post[] = $row;
    }
  }
}

echo(json_encode($removed_post));

?>