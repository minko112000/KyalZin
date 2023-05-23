<?php

include('connect.php');
session_start();

$result;
$order;
$contents = array();

if (isset($_GET['username'])) {
  $type = $_GET['type'];
  $code = $_GET['code'];
  if ($type == 'all') {
    $query = "SELECT * FROM contents ORDER BY id DESC";
  } else if ($type == 'profile') {
    $query = "SELECT * FROM contents WHERE code = '$code' ORDER BY id DESC";
  } else if (strlen($type) == 11) {
    $code = $_GET['type'];
    $query = "SELECT * FROM contents WHERE code = '$code' ORDER BY id DESC";
  } else if (substr($type, 0, 5) == 'share') {
    $length = strlen($type);
    $id = substr($type, 5, $length);
    $query = "SELECT * FROM contents WHERE id = $id";
  } else if ($type == 'received-star') {
    $query = "SELECT * FROM contents WHERE star > 0 AND code = '$code' ORDER BY star DESC";
  } else {
    $code = $_GET['code'];
    if ($type == 'save') {
      $order = 'save.save_id';
    } else if ($type == 'likes') {
      $order = 'likes.like_id';
    } else {
      $order = 'star.star_id';
    }
    $query = "SELECT * FROM contents
              LEFT JOIN $type
              ON contents.id = $type.box_id
              WHERE user_code = '$code' ORDER BY $order DESC";
  }
  
  $result = mysqli_query($con, $query);
  if ($result) {
    while($row = mysqli_fetch_assoc($result)) {
      $contents[] = $row;
    }
  }
  
}

echo(json_encode($contents));

?>