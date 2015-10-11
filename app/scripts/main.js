//console.log('\'Allo \'Allo!'); // eslint-disable-line no-console

$(document).ready(function(){
  'use strict';

  //AUTOSCROLL ADJUSTMENTS
  $('.hero a').bind('click', function(e) {
    var target = $(this).attr('href'); // Get the target element
    var scrollToPosition = $(target).offset().top; // Position to scroll to
    //console.log(scrollToPosition);
    $('html /* For FF & IE */,body /* For Chrome */').animate({
      'scrollTop': scrollToPosition
    }, 1500, function(target){
      window.location.hash = target;
    });
    e.preventDefault();
  });
});
