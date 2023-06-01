$('.vb').click(function () {
  navigator.vibrate(20)
})

$('#bars').click(function () {
  if ($(this).hasClass('cross')) {
    $('#side-bar').removeClass('side-bar-show')
    $(this).removeClass('cross')
    sideBarHide()
  } else {
    $('#side-bar').addClass('side-bar-show')
    $(this).addClass('cross')
    sideBarShow()
  }
})

//SIDE BAR
const sideBarShow = () => {
  $('.page').css('opacity', .5)
}

const sideBarHide = () => {
  $('.page').css('opacity', 1)
}

$('.tab').click(function () {
  $('.tab').removeClass('tab-active')
  $(this).addClass('tab-active')
  $('.page').hide()
  let id = $(this).attr('id')
  $(`#${id}-page`).show()
  $('#bars').click()
})

//USERS
const userDotDropDownShow = () => {
  $('.user-dot-drop-down').show()
}

const userDotDropDownHide = () => {
  $('.user-dot-drop-down').hide()
}

$('#users-page').mousedown(function () {
  userDotDropDownHide()
})

$('.user-dot-drop-down small').click(function () {
  $('.user-dot-drop-down small').removeClass('check')
  $(this).addClass('check')
})

$('#user-dot').click(function () {
  userDotDropDownShow()
})