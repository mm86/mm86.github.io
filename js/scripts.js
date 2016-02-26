//TODO: check this code for validity

jQuery(document).ready(function() {
  jQuery('#about').addClass("hideme").viewportChecker({
    classToAdd: 'visible animated fadeIn',
    offset: 100
  });
});


var offset = 500;
jQuery(window).scroll(function() {
  if (jQuery(window).scrollTop() < offset) {
    jQuery('#hidden-bar').fadeOut(200);
  } else if (jQuery(window).scrollTop() > offset) {
    jQuery('#hidden-bar').fadeIn(400);
  }
});