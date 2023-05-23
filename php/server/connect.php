<?php

$host_name = '127.0.0.1';
$user_name = 'root';
$password = 'root';
$db_name = 'KyalZin';

$con = mysqli_connect($host_name, $user_name, $password, $db_name);
if (!$con) {
  die('success fail');
}

?>