<?php

include('connect.php');

if (!empty($_POST['type'])) {
  $query;
  $type = $_POST['type'];
  if ($type == 'edit_fav') {
    $fav = $_POST['fav'];
    $box_id = $_POST['box_id'];
    $user_code = $_POST['user_code'];
    $operator = $_POST['operator'];
    $fav_time = $_POST['fav_time'];
    if ($operator == '+') {
      $query = "INSERT INTO $fav (box_id, user_code, fav_time)
                VALUES($box_id, '$user_code', '$fav_time')";
    } else {
      $query = "DELETE FROM $fav WHERE box_id = $box_id AND user_code = '$user_code'";
    }
    $result = mysqli_query($con, $query);
    if ($result) {
      $query2 = "UPDATE contents SET $fav = $fav $operator 1 WHERE id = $box_id";
      $result2 = mysqli_query($con, $query2);
      if ($result2) {
        $query3 = "SELECT * FROM contents WHERE id = $box_id";
        $result3 = mysqli_query($con, $query3);
        if (mysqli_num_rows($result3) == 1) {
          $row = mysqli_fetch_array($result3);
          echo($row[$fav]);
        }
      }
    } else {
      echo('ERR');
    }
  }
  
}
?>