<?php

include('connect.php');
$member_lists = array();

if (isset($_POST['sponsor_code'])) {
  $sponsor_code = $_POST['sponsor_code'];
  $query = "SELECT * FROM users WHERE sponsor = '$sponsor_code'";
  $result = mysqli_query($con, $query);
  if ($result) {
    while($row = mysqli_fetch_assoc($result)) {
      $member_lists[] = $row;
    }
  }
}

echo(json_encode($member_lists));

?>