<?php

include('connect.php');
session_start();

$query;

if (isset($_POST['type'])) {
  $type = $_POST['type'];
  if ($type == 'send_star') {
    $sent_user_code = $_POST['sent_user_code'];
    $receive_user_code = $_POST['receive_user_code'];
    $query_send_star = "UPDATE users SET star = star + 1 WHERE code = '$receive_user_code'";
    $result_send_star = mysqli_query($con, $query_send_star);
    if ($result_send_star) {
      $query = "UPDATE users SET star = star - 1 WHERE code = '$sent_user_code'";
      $result = mysqli_query($con, $query);
      if ($result) {
        echo('SENDSTAR-OK');
      }
    }
  }
}

?>