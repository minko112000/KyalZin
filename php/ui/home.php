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
    <meta name="keywords" content="kyalzin, ဘဝတက်လမ်း, စီးပွားရေး" />
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="content-type" content="text/html; charset=utf-8" />
    <title>KYALZIN.COM</title>
    <script src="https://kit.fontawesome.com/c3ce1fe727.js" crossorigin="anonymous"></script>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
    <link href="../../css/style.css" rel="stylesheet">
  </head>
  <body>
    
    <audio class="voice"></audio>
    <div id="container">
      <nav>
        <img id="brand" src="../../images/logo.png">
        <div id="home" class="active vb">
          <i class="fa-solid fa-home"></i>
        </div>
        <div id="wallet" class="vb">
          <i class="fa-solid fa-wallet"></i>
        </div>
        <div id="profile" class="vb">
          <i class="fa-solid fa-user"></i>
        </div>
        <div id="notification" class="vb">
          <i class="fa-solid fa-bell"></i>
        </div>
        <div id="more" class="vb">
          <i class="fa-solid fa-bars"></i>
        </div>
      </nav>
      <div id="bonus-box">
        <span>10 Author Invited</span>
        <img src="../../images/bonus.png">
        <small>Bonus</small>
        <b>20000 Ks</b>
        <button class="vb" type="button" id="bonus-claim">Claim</button>
      </div>
      <main>
        <div id="home-page" class="page">
          <div class="limit-sx" id="banner">
            <div class="eb register-writer-banner">
              <small>Let's register as a author and get up to</small>
              <b>100,000 Stars</b>
              <div>
                <button id="register-writer" class="register-writer up vb">Register Now</button>
              </div>
            </div>
            <div class="eb invite-banner">
              <small>Every time a author is invited</small>
              <b>3000 Ks</b>
              <small>Let's get it.</small>
              <div>
                <button class="invite vb up">Invite</button>
                <i class="fa-solid fa-copy vb invite-link-copy"></i>
              </div>
            </div>
            <div class="eb invite-banner">
              <small>Every time 10 author is invited</small>
              <b>Bonus 20000 Ks</b>
              <small>Let's get it.</small>
              <small><small class="author-count">000</small>/<b>10</b></small>
              <div>
                <button class="invite vb up">Invite</button>
                <i class="fa-solid fa-copy vb invite-link-copy"></i>
              </div>
            </div>
            <div class="eb follow-banner">
              <b>Follow us</b>
              <smll>on social media to learn more</smll>
              <div>
                <a href="https://www.facebook.com/profile.php?id=100092226064756">
                  <i class="fa-brands fa-facebook-f"></i>
                </a>
                <a href="https://youtube.com/@KyalZin-xr3jc">
                  <i class="fa-brands fa-youtube"></i>
                </a>
                <a href="https://www.tiktok.com/@kyalzin.com.mm">
                  <i class="fa-brands fa-tiktok"></i>
                </a>
              </div>
            </div>
          </div>
          <div id="text-box-container" class="contents-empty-container"></div>
        </div>
        <div id="wallet-page" class="page">
          <div class="balance-banner">
            <div>Total Balance</div>
            <b class="balance">B100</b>
          </div>
          <div class="tab">
            <small class="none">
              Total Balance&nbsp;&nbsp;&nbsp; - &nbsp;&nbsp;&nbsp;
              <b class="balance">B100</b>
            </small>
            <div class="deposit vb up">
              <i class="fa-solid fa-arrow-up"></i>
              <small>Deposit</small>
            </div>
            <div class="withdrawal vb up">
              <i class="fa-solid fa-arrow-down"></i>
              <small>Withdrawal</small>
            </div>
            <div class="buy-star vb up">
              <i class="fa-solid fa-star"></i>
              <small>Buy</small>
            </div>
            <div class="sell-star vb up">
              <i class="fa-regular fa-star"></i>
              <small>Sell</small>
            </div>
            <div class="invite vb up">
              <i class="fa-solid fa-user-plus"></i>
              <small>Invite</small>
            </div>
          </div>
          <h2 class="mt-2">Log</h2>
          <div class="log-box-container"></div>
        </div>
        <div id="profile-page" class="page">
          <div class="profile my-profile">
            <img>
          </div>
          <div class="name my-name">Name</div>
          <div class="property">
            <div>Balance<b class="balance">0</b></div>
            <div>Star<b class="star">0</b></div>
            <div>Earning<b class="earning">0</b></div>
            <div>Likes<b class="total-likes">0</b></div>
          </div>
          <div class="plan-duration-box">
            <div class="eb d">
              <b></b>
              <small>Days</small>
            </div>
            <div class="eb h">
              <b></b>
              <small>Hours</small>
            </div>
            <div class="eb m">
              <b></b>
              <small>Minutes</small>
            </div>
            <div class="eb s">
              <b></b>
              <small>Seconds</small>
            </div>
          </div>
          <div id="post" class="vb up create-post long-div">
            <i class="fa-solid fa-pen-to-square"></i>
            Create post
          </div>
          <div class="tab">
            <div class="tab-selector"></div>
            <b id="my-posts" class="vb my-posts">Posts</b>
            <b id="members" class="vb member-lists">Members<small class="members"></small></b>
            <b id="about" class="vb">About</b>
            <b id="edit-profile" class="vb">Edit profile</b>
          </div>
          <div id="my-posts-container" class="posts-text-box-container c-container contents-empty-container"></div>
          <div id="members-container" class="members-container c-container contents-empty-container"></div>
          <div id="about-container" class="c-container">
            <div>
              <i class="fa-solid fa-layer-group"></i>
              <small>Status -</small>
              <b class="status">status</b>
            </div>
            <div>
              <i class="fa-solid fa-users-rays"></i>
              <small>Members -</small>
              <b class="members">members</b>
            </div>
            <div>
              <i class="fa-solid fa-pen"></i>
              <small>Pen -</small>
              <b class="pen">pen</b>
            </div>
            <div>
              <i class="fa-solid fa-envelope"></i>
              <small>Email -</small>
              <b class="email">email</b>
            </div>
            <div>
              <i class="fa-solid fa-phone"></i>
              <small>Phone -</small>
              <b class="phone">phone</b>
            </div>
            <div>
              <i class="fa-solid fa-venus-mars"></i>
              <small>Gender -</small>
              <b class="gender">gender</b>
            </div>
            <div>
              <i class="fa-solid fa-cake-candles"></i>
              <small>Date of birth -</small>
              <b class="dob">dob</b>
            </div>
            <div>
              <i class="fa-solid fa-calendar-day"></i>
              <small>Creation date -</small>
              <b class="start-date">start date</b>
            </div>
            <div>
              <i class="fa-solid fa-id-card"></i>
              <small>ID -</small>
              <b class="id">id</b>
            </div>
            <div>
              <i class="fa-solid fa-handshake"></i>
              <small>Sponsor code -</small>
              <b class="sponsor">sponsor</b>
            </div>
          </div>
          <div id="edit-profile-container" class="c-container">
            <div id="edit-name" class="more-item child eb vb edit">
              <i class="fa-solid fa-user-pen"></i>
              <small>Edit Name</small>
              <i class="fa-solid fa-angle-right"></i>
            </div>
            <div id="edit-email" class="more-item child eb vb edit">
              <i class="fa-solid fa-envelope"></i>
              <small>Edit Email</small>
              <i class="fa-solid fa-angle-right"></i>
            </div>
            <div id="edit-phone" class="more-item child eb vb edit">
              <i class="fa-solid fa-phone"></i>
              <small>Edit Phone</small>
              <i class="fa-solid fa-angle-right"></i>
            </div>
            <div id="edit-gender" class="more-item child eb vb edit">
              <i class="fa-solid fa-venus-mars"></i>
              <small>Edit Gender</small>
              <i class="fa-solid fa-angle-right"></i>
            </div>
            <div id="edit-dob" class="more-item child eb vb edit">
              <i class="fa-solid fa-cake-candles"></i>
              <small>Edit Date of Birth</small>
              <i class="fa-solid fa-angle-right"></i>
            </div>
            <div id="edit-password" class="more-item child eb vb edit">
              <i class="fa-solid fa-lock"></i>
              <small>Edit Password</small>
              <i class="fa-solid fa-angle-right"></i>
            </div>
          </div>
        </div>
        <div id="notification-page" class="page">notification</div>
        <div id="more-page" class="page">
          <div class="more-item child vb big">
            <div class="more-item eb small up deposit">
              <i class="fa-solid fa-arrow-up"></i>
              <small>Deposit</small>
              <i class="fa-solid fa-angle-right"></i>
            </div>
            <div class="more-item eb small up withdrawal">
              <i class="fa-solid fa-arrow-down"></i>
              <small>Withdrawal</small>
              <i class="fa-solid fa-angle-right"></i>
            </div>
          </div>
          <div class="more-item child vb big">
            <div class="more-item eb small up buy-star">
              <i class="fa-solid fa-star"></i>
              <small>Buy</small>
              <i class="fa-solid fa-angle-right"></i>
            </div>
            <div class="more-item eb small up sell-star">
              <i class="fa-regular fa-star"></i>
              <small>Sell</small>
              <i class="fa-solid fa-angle-right"></i>
            </div>
          </div>
          <div class="more-item child vb big">
            <div id="save" class="more-item eb to-next-page small">
              <i class="fa-solid fa-bookmark"></i>
              <small>Saved</small>
              <i class="fa-solid fa-angle-right"></i>
            </div>
            <div id="likes" class="more-item eb to-next-page small">
              <i class="fa-solid fa-thumbs-up"></i>
              <small>Likes</small>
              <i class="fa-solid fa-angle-right"></i>
            </div>
          </div>
          <div class="more-item child vb big">
            <div id="sent-star" class="more-item eb to-next-page small">
              <i data='➖'  class="fa-solid fa-star p-m-star"></i>
              <small>Sent</small>
              <i class="fa-solid fa-angle-right"></i>
            </div>
            <div id="received-star" class="more-item eb to-next-page small">
              <i data='➕' class="fa-solid fa-star p-m-star"></i>
              <small>Received</small>
              <i class="fa-solid fa-angle-right"></i>
            </div>
          </div>
          <div class="more-item child vb eb up invite">
            <i class="fa-solid fa-user-plus"></i>
            <small>Invite</small>
            <i class="fa-solid fa-angle-right"></i>
          </div>
          <div class="more-item child vb eb logout">
            <i class="fa-solid fa-door-open"></i>
            <small>Log Out</small>
            <i class="fa-solid fa-angle-right"></i>
          </div>
        </div>
      </main>
      <div class="extra-page" id="user-page">
        <div class="bar">
          <i class="fa-solid vb hide-user-page fa-long-arrow-left"></i>
          <b class="user-name">PROFILE</b>
        </div>
        <div class="profile user-profile">
          <img>
        </div>
        <div class="name user-name">Name</div>
        <div class="property">
          <div>Balance<b class="balance">0</b></div>
          <div>Star<b class="star">0</b></div>
          <div>Earning<b class="earning">0</b></div>
          <div>Likes<b class="total-likes">0</b></div>
        </div>
        <div class="copy-link-div">
          <small></small>
          <i class="fa-solid fa-copy vb"></i>
        </div>
        <div class="posts-text-box-container contents-empty-container"></div>
      </div>
      <div class="extra-page" id="share-text-box-page">
        <input hidden value="<?php if (isset($_GET['text'])) : ?><?php echo($_GET['text'])?><?php endif ?>" id="share-content">
        <div class="bar">
          <i class="fa-solid vb hide-user-page fa-long-arrow-left"></i>
          <b class="name">SHARE CONTENT</b>
        </div>
        <div class="posts-text-box-container contents-empty-container"></div>
      </div>
      <div id="up-box">
        <div id="register-writer-page">
          <h3 class="my-2 text-center">Register as an author</h3>
          <div id="make-money-box">
            <div class="triangle"></div>
            <div class="hr"></div>
            <i class="fa-solid fa-hand-point-down hand"></i>
            <i class="fa-solid fa-hand-holding"></i>
          </div>
          <div class="plan-box-container limit-sx">
            <div id="basic-plan" class="plan-box plan-check vb eb">
              <h3>Basic</h3>
              <small>125 stars</small>
              <div>
                <span>✔</span>
                <small>Reach - &nbsp;</small>
                <b>25%</b>
              </div>
              <div>
                <span>✔</span>
                <small>Pen - &nbsp;</small>
                <b>360</b>
                <i>free</i>
              </div>
              <div>
                <span>✔</span>
                <small>Expire - &nbsp;</small>
                <b>180 days</b>
              </div>
              <div>
                <span>✔</span>
                <small>Ads</small>
              </div>
            </div>
            <div id="medium-plan" class="plan-box vb eb">
              <h3>Medium</h3>
              <small>250 stars</small>
              <div>
                <span>✔</span>
                <small>Reach - &nbsp;</small>
                <b>50%</b>
              </div>
              <div>
                <span>✔</span>
                <small>Pen - &nbsp;</small>
                <b>730</b>
                <i>free</i>
              </div>
              <div>
                <span>✔</span>
                <small>Expire - &nbsp;</small>
                <b>365 days</b>
              </div>
              <div>
                <span>✔</span>
                <small>Ads</small>
              </div>
            </div>
            <div id="premium-plan" class="plan-box vb eb">
              <h3>Premium</h3>
              <small>750 stars</small>
              <div>
                <span>✔</span>
                <small>Reach - &nbsp;</small>
                <b>75%</b>
              </div>
              <div>
                <span>✔</span>
                <small>Pen - &nbsp;</small>
                <b>1500</b>
                <i>free</i>
              </div>
              <div>
                <span>✔</span>
                <small>Expire - &nbsp;</small>
                <b>Unlimited</b>
              </div>
              <div>
                <span>✖</span>
                <small class="text-danger">No ads</small>
              </div>
            </div>
          </div>
          <button type="button" id="update-plan-btn" class="vb">Update</button>
        </div>
        <div id="fav-list-container">
          
        </div>
        <div id="invite-page">
          <div id="invite-box">
            <h2 class="title"></h2>
            <div id="copy-url-box">
              <div id="invite-url"></div>
              <div class="invite-link-copy">
                <i class="fa-solid fa-copy vb"></i>
              </div>
            </div>
            <div id="invite-list">
              
            </div>
          </div>
        </div>
        <div id="money-edit-page">
          <h2 class="title">Title</h2>
          <div class="accounts">
            <div id="wave" class="check checked vb">
              <div></div>
              <small>Wave Pay</small>
            </div>
            <div id="kbz" class="check vb">
              <div></div>
              <small>KBZ Pay</small>
            </div>
          </div>
          <div class="to input">
            <div>0615845878</div>
            <i class="fa-solid fa-copy vb copy-address"></i>
          </div>
          <div class="t-no input">
            <label>Transaction Number Last 7 Digits</label>
            <input type="text" id="t-no">
            <div id="upload-slip" class="vb"></div>
          </div>
          <div class="amount input">
            <label>Amount</label>
            <input type="text" id="amount">
          </div>
          <div class="address input">
            <label>Address</label>
            <input type="text" id="address">
          </div>
          <div class="buy-star-box">
            <small>Price</small>
            <span>
              <h3 class="price">0</h3>
              <h3>MMK</h3>
            </span>
            <div class="star-amount input">
              <span class="vb" id="minus">-</span>
              <input type="text" id="star-amount">
              <span class="vb" id="plus">+</span>
            </div>
          </div>
          <div class="keyboard">
            <div>
              <div>7</div>
              <div>8</div>
              <div>9</div>
            </div>
            <div>
              <div>4</div>
              <div>5</div>
              <div>6</div>
            </div>
            <div>
              <div>1</div>
              <div>2</div>
              <div>3</div>
            </div>
            <div>
              <div>00</div>
              <div>0</div>
              <div id="del">✖</div>
            </div>
          </div>
          <button class="vb submit">Submit</button>
          <input name="slip" type="file" hidden  class="upload-slip" accept="image/*">
        </div>
        <div id="text-box-more-page">
          <div id="edit-post" class="eb vb text-box-more-item w up create-post edit-post">
            <i class="fa-solid fa-pen-to-square"></i>
            <small>Edit Post</small>
          </div>
          <div class="eb vb text-box-more-item w delete-post">
            <i class="fa-solid fa-trash"></i>
            <small>Delete Post</small>
          </div>
          <div class="eb vb text-box-more-item r remove-post">
            <i class="fa-solid fa-xmark"></i>
            <small>Remove Post</small>
          </div>
          <div class="eb vb text-box-more-item r up report-post">
            <i class="fa-solid fa-message"></i>
            <small>Report Post</small>
          </div>
          <div class="eb vb text-box-more-item copy-link">
            <i class="fa-solid fa-link"></i>
            <small>Copy Link</small>
          </div>
          <div class="eb vb text-box-more-item copy-text">
            <i class="fa-solid fa-font"></i>
            <small>Copy Text</small>
          </div>
        </div>
        <div id="create-post-page">
          <div class="header">
            <div class="profile my-profile">
              <img>
            </div>
            <div class="name my-name">Name</div>
            <b id="create-post-btn">Post</b>
          </div>
          <textarea id="create-post-text" onpaste="return false;" placeholder="What experiences would you like to share?"></textarea>
          <div class="create-post-text-check">
            <small>0</small>
            <b>/280</b>
          </div>
        </div>
        <div id="report-post-page">
          <h4 class="mt-4">Report something that doesn't look right</h4>
          <textarea id="report-content" placeholder="Write Content"></textarea>
          <button type="button" class="vb" id="submit-report">Submit Report</button>
        </div>
      </div>
      <div id="top-alert"></div>
      <div id="next-page">
        <div class="bar">
          <i class="fa-solid vb hide-next-page fa-long-arrow-left"></i>
          <b>Title</b>
        </div>
        <div id="next-page-text-box-container" class="contents-empty-container">
          
        </div>
      </div>
      <div id="logout-box" class="eb">
        <div><div class="hr"></div><small>Log out of your account?</small><div class="hr"></div></div>
        <div>
          <b id="cancel" class="vb">CANCEL</b>
          <b id="logout" class="vb">LOG OUT</b>
        </div>
      </div>
      <div id="edit-box" class="eb">
        <h3 class="edit-type"></h3>
        <input id="fname" class="name" type="text" placeholder="Edit Name">
        <input id="lname" class="name" type="text" placeholder="Edit Name">
        <input id="email" type="email" placeholder="Edit Email">
        <input id="phone" type="number" placeholder="Edit Phone">
        <div id="gender" class="radio">
          <div>
            Male
            <input id="male" type="radio" name="gender" value="Male">
          </div>
          <div>
            Female
            <input id="female" type="radio" name="gender" value="Female">
          </div>
        </div>
        <input id="dob" type="date">
        <input class="password" id="old-password" type="password" placeholder="Old Password">
        <input class="password"  id="new-password" type="password" placeholder="New Password">
        <input class="password"  id="confirm-password" type="password" placeholder="Confirm Password">
        <button type="button" class="edit-btn vb">Submit</button>
      </div>
    </div>
    <div id="loading">
      <div class="circle"></div>
    </div>
    
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jsSocials/1.5.0/jssocials.min.js"></script>
    <script src="//cdn.jsdelivr.net/npm/eruda"></script>
    <script>eruda.init();</script>
    <script src="../../js/script.js"></script>
  </body>
</html>