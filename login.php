<?php
ob_start();
session_start();

if (isset($_GET['logout'])) {
  if ($_GET['logout'] == 'true') {
    session_destroy();
  }
}

if (isset($_SESSION['username'])) {
  header('location: php/ui/home.php');
}
?>

<!DOCTYPE html>
<html>
  <head>
  <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="content-type" content="text/html; charset=utf-8" />
    <title>KYALZIN.COM</title>
    <script src="https://kit.fontawesome.com/c3ce1fe727.js" crossorigin="anonymous"></script>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
    <link href="css/style.css" rel="stylesheet">
    <link href="css/entry.css" rel="stylesheet">
  </head>
  <body>
    
    <div id="top-alert"></div>
    <form id="login-form" class="wrapper">
      <div id="brand">
        <img src="images/logo.png">
      </div>
      <small class="des des1">Welcome back to <b>Kyal Zin</b> Success Web App.</small>
      <input class="item" type="email" name="login-email" id="login-email" placeholder="email">
      <div class="item">
        <input class="password" type="password" name="login-password" id="login-password" placeholder="password">
        <i class="vb eye fa-solid fa-eye"></i>
      </div>
      <button type="button" id="login" class="vb">Log In</button>
      <i class="change">No account yet.<a href="signup.php">Sign Up</a></i>
    </form>
    
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="//cdn.jsdelivr.net/npm/eruda"></script>
    <script>eruda.init();</script>
    <script src="js/entry.js"></script>
  </body>
</html>