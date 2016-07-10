  //'use strict';

  //NAVBAR ANIMATION
  (function() {

    var docElem = document.documentElement,
      header = document.querySelector( '.navbar-default' ),
      dropdown = document.querySelector('.dropdown-menu'),
      didScroll = false,
      changeHeaderOn = 300;

    function init() {
      window.addEventListener( 'scroll', function() {
        if( !didScroll ) {
          didScroll = true;
          setTimeout( scrollPage, 250 );
        }
      }, false );
    }

    function scrollPage() {
      var sy = scrollY();
      if ( sy >= changeHeaderOn ) {
        classie.add( header, 'navbar-shrink' );
      }
      else {
        classie.remove( header, 'navbar-shrink' );
      }
      if ( sy >= changeHeaderOn ) {
        classie.add( dropdown, 'dropdown-shrink' );
      }
      else {
        classie.remove( dropdown, 'dropdown-shrink' );
      }
      didScroll = false;
    }
    //console.log(classie);
    function scrollY() {
      return window.pageYOffset || docElem.scrollTop;
    }

    init();

  })();





  //ARHIVA
  var choice = $('#choice');
  var id1;
  choice.load('arhiv-data.html #13FestData');

  $('.arhiva select').change(function () {
    id1 = $(this).val();

    choice.animate({opacity: 0}, 400, function() {
      choice.load('arhiv-data.html #' + id1 + 'Data', function(){
        choice.animate({opacity: 1}, 400);
      });
    });
  });
