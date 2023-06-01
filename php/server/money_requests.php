<?php

include('connect.php');
session_start();
$username = $_SESSION['username'];
$action;

if (isset($_POST['account'])) {
  $t_no;
  $slip;
  $account = $_POST['account'];
  $amount = $_POST['amount'];
  $address = $_POST['address'];
  $time = time() * 1000;
  $transaction_ID = rand(100000000000000, 999999999999999);
  if (!empty($_POST['t-no']) and !empty($_FILES['slip'])) {
    $action = 'deposit';
    $t_no = $_POST['t-no'];
    $slip = $_FILES['slip'];
    $exp = explode('/', $slip['type']);
    $ext = end($exp);
    $slip_name = md5(time().$slip['name']).'.'.$ext;
    $path = '../../ADMIN/VOUCHERS/';
    if (move_uploaded_file($slip['tmp_name'], $path.$slip_name));
    $query = "INSERT INTO money_requests (money_requests_title, money_requests_username, transaction_voucher_digits, slip, account, amount, address, log_time, transaction_ID)
                  VALUES('$action', '$username', '$t_no', '$slip_name', '$account', $amount, '$address', '$time', '$transaction_ID')";
    $result = mysqli_query($con, $query);
    if ($result) {
      echo('OK');
    }
  } else {
    $action = 'withdrawal';
    $query_data = "SELECT * FROM users WHERE username = '$username'";
    $result_data = mysqli_query($con, $query_data);
    if ($result_data) {
      $row = mysqli_fetch_array($result_data);
      $my_balance = $row['balance'];
      if ($amount <= $my_balance) {
        $query = "INSERT INTO money_requests (money_requests_title, money_requests_username, account, amount, address, log_time, transaction_ID)
                  VALUES('$action', '$username', '$account', $amount, '$address', '$time', '$transaction_ID')";
        $result = mysqli_query($con, $query);
        if ($result) {
          echo('OK');
        }
      } else {
        echo('NO');
      }
    }
  }
}

?>