<?php

include('connect.php');
session_start();

$query;
$log = array();

if (isset($_GET['user_code'])) {
  $user_code = $_GET['user_code'];
  $log_type = $_GET['log_type'];
  if ($user_code == $_SESSION['user_code']) {
    if ($log_type == 'all_log') {
      $query = "SELECT * FROM log WHERE log_user_code = '$user_code' ORDER BY log_id DESC";
    } else {
      $query = "SELECT * FROM log WHERE log_title = '$log_type' AND log_user_code = '$user_code' ORDER BY log_id DESC";
    }
    $result = mysqli_query($con, $query);
    if ($result) {
      while($row = mysqli_fetch_assoc($result)) {
        $log[] = $row;
      }
      echo(json_encode($log));
    }
  }
}

?>