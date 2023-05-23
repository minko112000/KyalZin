<?php

include('connect.php');

if (isset($_POST['user_code']) && isset($_POST['box_id'])) {
  $box_id = $_POST['box_id'];
  $user_code = $_POST['user_code'];
  $query = "INSERT INTO removed_post (box_id, user_code)
            VALUES($box_id,'$user_code')";
  $result = mysqli_query($con, $query);
  if ($result) {
    echo('REMOVED_POST-OK');
  }
}

?>