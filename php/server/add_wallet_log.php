<?php

include('connect.php');
session_start();
$my_balance;
$my_star;
$query;

if (isset($_POST['user_code'])) {
  $username = $_SESSION['username'];
  $user_code = $_POST['user_code'];
  $log_type = $_POST['log_type'];
  $amount = $_POST['amount'];
  $fee = $_POST['fee'];
  $star = $_POST['star'];
  $log_time = $_POST['time'];
  $log_day = $_POST['day'];
  $log_month = $_POST['month'];
  $log_year = $_POST['year'];
  
  $query_data = "SELECT * FROM users WHERE username = '$username'";
  $result_data = mysqli_query($con, $query_data);
  if ($result_data) {
    $row = mysqli_fetch_array($result_data);
    $my_balance = $row['balance'];
    $my_star = $row['star'];

    switch ($log_type) {
      case 'recharge_log':
        echo('recharge_log');
      break;
      
      case 'withdrawal_log':
        echo('withdrawal_log');
      break;
      
      default:
        
        if ($log_type == 'buy_star_log') {
          $fee = 0;
          if ($amount <= $my_balance) {
            $query = "UPDATE users SET balance = balance - $amount, star = star + $star WHERE username = '$username'";
          } else {
            echo('Not enough balance');
          }
        }
        
        if ($log_type == 'sell_star_log') {
          if ($star <= $my_star) {
            $query = "UPDATE users SET balance = balance + $amount, star = star - $star WHERE username = '$username'";
          } else {
            echo('Not enough star');
          }
        }
        
        if ($log_type == 'one_member_invited_log') {
          $query = "UPDATE users SET balance = balance + $amount WHERE sponsor = '$user_code'";
          $amount = 3000;
        }
        
        if ($log_type == 'ten_member_invited_log') {
          $query = "UPDATE users SET balance = balance + $amount WHERE sponsor = '$user_code'";
          $amount = 20000;
        }
        
        if (!empty($query)) {
          $result = mysqli_query($con, $query);
          if ($result) {
            $transaction_ID = rand(100000000000000, 999999999999999);
            $query_add_log = "INSERT INTO log (log_title, amount, fee, star, log_username, log_user_code, log_day, log_month, log_year, log_time, transaction_ID)
                              VALUES('$log_type', $amount, $fee, $star, '$username', '$user_code', $log_day, '$log_month', $log_year, '$log_time',  '$transaction_ID')";
            $result_add_log = mysqli_query($con, $query_add_log);
            if ($result_add_log) {
              echo('OK');
            }
          }
        }
        break;
    }
  }
}

?>