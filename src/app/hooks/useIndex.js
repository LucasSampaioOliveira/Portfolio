var btn = $('myBtn');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('display-non');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});

