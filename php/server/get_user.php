<?php

include('connect.php');

$users = array();
$order;

if (isset($_POST['type'])) {
  $type = $_POST['type'];
  $box_id = $_POST['id'];
  if ($type == 'save') {
    $order = 'save.save_id';
  } else if ($type == 'likes') {
    $order = 'likes.like_id';
  } else {
    $order = 'star.star_id';
  }
  $query = "SELECT * FROM users
            LEFT JOIN $type
            ON users.code = $type.user_code
            WHERE $type.box_id = $box_id ORDER BY $order DESC";
  
  $result = mysqli_query($con, $query);
  if ($result) {
    while($row = mysqli_fetch_assoc($result)) {
      $users[] = $row;
    }
  }
  
}

echo(json_encode($users));

?>