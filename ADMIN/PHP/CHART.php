<?php

include('CONNECT.php');
$datas = array();
$query;

if (isset($_POST['date']) && isset($_POST['month']) && isset($_POST['year'])) {
  $date = $_POST['date'];
  $month = $_POST['month'];
  $year = $_POST['year'];
  $query = "SELECT * FROM visitors WHERE visited_day = $date AND visited_month = '$month' AND visited_year = $year";
  $result = mysqli_query($con, $query);
  if ($result) {
    $data = mysqli_num_rows($result);
    array_unshift($datas, $data);
    for ($i = 0; $i < 11; $i ++) {
      $date -= 1;
      $query = "SELECT * FROM visitors WHERE visited_day = $date AND visited_month = '$month' AND visited_year = $year";
      $result = mysqli_query($con, $query);
      $data = mysqli_num_rows($result);
      array_unshift($datas, $data);
    }
  }
}

echo(json_encode($datas));

?>