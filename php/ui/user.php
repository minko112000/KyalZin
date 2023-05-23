<?php
ob_start();
session_start();
if (!isset($_SESSION['username'])) {
  header('location: ../../login.php');
}
?>

<!DOCTYPE html>
<html>
  <head>
  <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="content-type" content="text/html; charset=utf-8" />
    <title>PROFILE</title>
    <script src="https://kit.fontawesome.com/c3ce1fe727.js" crossorigin="anonymous"></script>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
    <link href="../../css/style.css" rel="stylesheet">
    <style>
    
      
      
      .posts-text-box-container {
        padding: 0 6px;
        padding-bottom: 33px;
      }
      
    </style>
  </head>
  <body>
    
    <div id="container">
      
    </div>
    <div id="loading">
      <div class="circle"></div>
    </div>
    <input id="code" value="<?php if (isset($_GET['code'])) : ?><?php echo($_GET['code'])?><?php endif ?>" hidden>
    
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="../../js/script.js"></script>
    <script src="../../js/user.js"></script>
    <script src="//cdn.jsdelivr.net/npm/eruda"></script>
    <script>eruda.init();</script>
  </body>
</html>