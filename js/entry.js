let email_check;
let phone_check;
let sponsor_check;
let steps = 1

const topAlert = (content, br) => {
  $('#top-alert').text(content)
  $('#top-alert').css({
    transform: 'translateY(50px)',
    border: `1px solid ${br}`
  })
  setTimeout(() => {
  $('#top-alert').css('transform','translateY(-110%)')
  }, 3000)
}

const checkData = (email, phone, sponsor) => {
  $.ajax({
    url: 'php/server/entry_check_data.php',
    type: 'GET',
    data: `email=${email}&phone=${phone}&sponsor=${sponsor}`,
    contentType: false,
    processData: false,
    success: function (r) {
      console.log(r)
      const obj = JSON.parse(r)
      if (obj.email_status == 200) {
        $('#email').removeClass('invalid')
        if (obj.phone_status == 200) {
          $('#phone').removeClass('invalid')
          if (obj.sponsor_status == 200) {
            $('#sponsor').removeClass('invalid')
            console.log(email, phone, sponsor)
            steps = 3
            btnBan('next')
            $('.dot-3').addClass('location-steps')
            $('.steps-box').css('transform', 'translateX(-110%)')
            $('#steps3').css('transform', 'translateX(0%)')
          } else {
            $('#sponsor').addClass('invalid')
            topAlert('This sponsor code does not match', '#bb2124')
          }
        } else {
          $('#phone').addClass('invalid')
          topAlert('This phone is already used', '#bb2124')
        }
      } else {
        $('#email').addClass('invalid')
        topAlert('This email is already used', '#bb2124')
      }
    }
  })
}

const sendFormData = form => {
  console.log(form)
    const data = new FormData(form)
    $.ajax({
      url: '../php/server/entry_send_data.php',
      type: 'POST',
      data: data,
      contentType: false,
      processData: false,
      success: function (r) {
        if (r == 1) {
          topAlert('Successful', '#4bb543')
          setTimeout(function() {
            location.href = 'login.php'
          }, 2000);
        } else if (r == 0) {
          topAlert('Invalid Email or Password', '#bb2124')
        } else {
          topAlert('Successful', '#4bb543')
          localStorage.setItem('username', r)
          setTimeout(function() {
            location.href = 'php/ui/home.php'
          }, 3000);
        }
      }
    })
}

const btnBan = btn => {
  $(`#${btn}`).css({
    opacity: .5,
    pointerEvents: 'none'
  })
}

const btnOpen = btn => {
  $(`#${btn}`).css({
    opacity: 1,
    pointerEvents: 'auto'
  })
}

const prevOne = () => {
  btnBan('prev')
  steps = 1
  $('.dot-2').removeClass('location-steps')
  $('.steps-box').css('transform', 'translateX(110%)')
  $('#steps1').css('transform', 'translateX(0%)')
}

const prevTwo = () => {
  steps = 2
  $('.dot-3').removeClass('location-steps')
  $('#steps2').css('transform', 'translateX(0%)')
  $('#steps3').css('transform', 'translateX(110%)')
}

const stpesOne = () => {
  let fname = $('#fname').val().trim()
  let lname = $('#lname').val().trim()
  let dob = $('#dob').val().trim()
  let gender;
  if (fname != '') {
    if (fname.length >= 2) {
      $('#fname').removeClass('invalid')
      if (lname != '') {
        if (lname.length >= 2) {
          $('#lname').removeClass('invalid')
          if (dob != '') {
            $('#dob').removeClass('invalid')
            if ($('#male').hasClass('checked')) {
              $('#gender').val("male")
            } else {
              $('#gender').val("female")
            }
            let gender = $('#gender').val()
            console.log(fname + lname + dob + gender)
            btnOpen('prev')
            steps = 2
            $('.dot-2').addClass('location-steps')
            $('#steps1').css('transform', 'translateX(-110%)')
            $('#steps2').css('transform', 'translateX(0%)')
            $('#steps3').css('transform', 'translateX(110%)')
          } else {
            topAlert('Invalid Date of Birth', '#bb2124')
            $('#dob').addClass('invalid')
          }
        } else {
          topAlert('There must be at least 2', '#bb2124')
          $('#lname').addClass('invalid')
        }
      } else {
    topAlert('Invalid Last Name', '#bb2124')
    $('#lname').addClass('invalid')
  }
    } else {
      topAlert('There must be at least 2', '#bb2124')
      $('#fname').addClass('invalid')
    }
  } else {
    topAlert('Invalid First Name', '#bb2124')
    $('#fname').addClass('invalid')
  }
}

const stpesTwo = () => {
  let email = $('#email').val().trim()
  let phone = $('#phone').val().trim()
  let sponsor = $('#sponsor').val().trim()
  if (email != '' && email.length > 10 && email.substr(-10, 10) == '@gmail.com' && email.length <= 30) {
    $('#email').removeClass('invalid')
    if (phone.length == 10 || phone.length == 11) {
      $('#phone').removeClass('invalid')
      if (sponsor == '') {
        sponsor = '00000000000'
      }
      checkData(email, phone, sponsor)
    } else {
      $('#phone').addClass('invalid')
      topAlert('Invalid Phone', '#bb2124')
    }
  } else {
    $('#email').addClass('invalid')
    topAlert('Invalid Email', '#bb2124')
  }
}

$('.vb').click(function () {
navigator.vibrate(20)
})

$('.gender').click(function () {
  $('.gender').removeClass('checked')
  $(this).addClass('checked')
})

$('#dob').change(function () {
  if ($(this).val() != '') {
    $('.dob').hide()
  } else {
    $('.dob').show()
  }
})

$('.eye').click(function () {
  if ($(this).hasClass('fa-eye')) {
    $(this).removeClass('fa-eye')
    $(this).addClass('fa-eye-slash')
    $(this).parent().children('input').attr('type', 'text')
  } else {
    $(this).addClass('fa-eye')
    $(this).removeClass('fa-eye-slash')
    $(this).parent().children('input').attr('type', 'password')
  }
})

$('#signup').click(function () {
  let password = $('#password').val().trim()
  let c_password = $('#c-password').val().trim()
  if (password.length >= 8) {
    $('#password').removeClass('invalid')
    if (c_password == password) {
      $('#c-password').removeClass('invalid')
      const form = document.getElementById('signup-form')
      sendFormData(form)
    } else {
      $('#c-password').addClass('invalid')
      topAlert('Password does not match', '#bb2124')
    }
  } else {
    $('#password').addClass('invalid')
    topAlert('There must be at least 8', '#bb2124')
  }
})

$('#prev').click(function () {
  if (steps == 3) {
    prevTwo()
    btnOpen('next')
  } else if (steps == 2) {
    prevOne()
    btnBan('prev')
  }
})

$('#next').click(function () {
  if (steps == 1) {
    stpesOne()
  } else if (steps == 2) {
    stpesTwo()
  }
})

$('#login').click(function () {
  let login_email = $('#login-email').val().trim()
  let login_password = $('#login-password').val().trim()
  if (login_email != '' && login_password != '') {
    let form = document.getElementById('login-form')
    sendFormData(form)
  } else {
    topAlert('Invalid Email or Password', '#bb2124')
  }
})