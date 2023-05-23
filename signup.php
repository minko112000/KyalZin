<?php
ob_start();
session_start();
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
    <form id="signup-form" class="wrapper">
      <div id="brand">
        <img src="images/logo.png">
      </div>
      <small class="des des1">Looking to improve your life and earn better income?</small>
      <small class="des des2">If so, open an account now and let's get started.</small>
      <div id="steps-dots">
        <div class="dot-1 location-steps" data='1'></div>
        <div class="dot-2" data='2'></div>
        <div class="dot-3" data='3'></div>
      </div>
      <div id="steps-box-container">
        <div id="steps1" class="steps-box">
          <div class="item">
            <input type="text" name="fname" id="fname" placeholder="first name">
            <input type="text" name="lname" id="lname" placeholder="last name">
          </div>
          <div class="item">
            <input type="date" name="dob" id="dob">
            <b class="dob">date of birth</b>
          </div>
          <div class="item">
            <input name="gender" id="gender" hidden>
            <div class="gender checked" id="male">Male</div>
            <div class="gender" id="female">Female</div>
          </div>
        </div>
        <div id="steps2" class="steps-box">
          <input class="item" type="email" name="email" id="email" placeholder="email">
          <input class="item" type="number" name="phone" id="phone" placeholder="phone">
          <input value="<?php if (isset($_GET['code'])) : ?><?php echo($_GET['code'])?><?php endif ?>" class="item" type="number" name="sponsor" id="sponsor" placeholder="sponsor code">
        </div>
        <div id="steps3" class="steps-box">
          <div class="item">
            <input class="password" type="password" name="password" id="password" placeholder="password">
            <i class="vb eye fa-solid fa-eye"></i>
          </div>
          <div class="item">
            <input class="password" type="password" name="c-password" id="c-password" placeholder="confirm password">
            <i class="vb eye fa-solid fa-eye"></i>
          </div>
          <button type="button" id="signup" class="vb">Sign Up</button>
        </div>
      </div>
      <div id="prev-next">
        <button class="vb" type="button" id="prev">Prev</button>
        <button class="vb" type="button" id="next">Next</button>
      </div>
      <i class="change">already account yet.<a href="login.php">Log In</a></i>
    </form>
    
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="//cdn.jsdelivr.net/npm/eruda"></script>
    <script>eruda.init();</script>
    <script src="js/entry.js"></script>
  </body>
</html>