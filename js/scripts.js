
$(document).ready(function() {
    $('#about').addClass("hideme").viewportChecker({
        classToAdd: 'visible animated fadeInLeft',
        offset: 100
       });
});

$(document).ready(function() {
    $('#projects').addClass("hideme").viewportChecker({
        classToAdd: 'visible animated fadeInLeft',
        offset: 100
       });
});

$(document).ready(function() {
    $('#contact').addClass("hideme").viewportChecker({
        classToAdd: 'visible animated fadeInLeft',
        offset: 100
       });
});


var offset = 500;
$(window).scroll(function() {
  if ($(window).scrollTop() < offset) {
    $('#hidden-bar').fadeOut(200);
  } else if ($(window).scrollTop() > offset) {
    $('#hidden-bar').fadeIn(400);
  }
});