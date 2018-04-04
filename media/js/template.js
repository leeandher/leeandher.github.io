$(window).scroll(function() {
  var navHeight = $(document).scrollTop() > 50 || !$('nav').hasClass('anim') ? '0px' : '-500px';
  $('nav').css('top', navHeight);
});

$('nav a').click(function() {
  var href = $(this).attr('href');
  $('html, body').animate({scrollTop: $(href).offset().top}, 1000);
  if ($(window).width() < 650) {
    $('#toggler').removeClass('show');
    $('#collapse-nav').css('max-height', '0px');
  }
});

$('#toggler').click(function() {
  $(this).toggleClass('show');
  var heightVal = $(this).hasClass('show') ? '200px' : '0px';
  $('#collapse-nav').css('max-height', heightVal);
});