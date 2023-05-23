<?php

include('connect.php');

if (!empty($_POST['type'])) {
  $query;
  $type = $_POST['type'];
  
  if ($type == 'create_post') {
    $profile = $_POST['profile'];
    $name = $_POST['name'];
    $code = $_POST['code'];
    $time = $_POST['time'];
    $content = $_POST['content'];
    $query = "INSERT INTO contents (profile, name, code, time, content)
              VALUES('$profile', '$name', '$code', '$time', '$content')";
  };
  
  if ($type == 'edit_post') {
    $box_id = $_POST['box_id'];
    $content = $_POST['content'];
    $query = "UPDATE contents SET content = '$content' WHERE id = $box_id";
  };
  
  if ($type == 'delete_post') {
    $box_id = $_POST['box_id'];
    $query = "DELETE FROM contents WHERE id = $box_id";
  };
  
  if ($type == 'report_post') {
    $box_id = $_POST['box_id'];
    $user_code = $_POST['user_code'];
    $content = $_POST['content'];
    $query = "INSERT INTO reports (box_id, user_code, content)
            VALUES($box_id, '$user_code', '$content')";
  };
  
  
  $result = mysqli_query($con, $query);
  if ($result) {
    echo('OK');
  } else {
    echo('ERR');
  }
  
}

?>