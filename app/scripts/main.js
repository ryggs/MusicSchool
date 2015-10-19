//console.log('\'Allo \'Allo!'); // eslint-disable-line no-console

$(document).ready(function(){
  'use strict';

  //NAVBAR ANIMATION
  var cbpAnimatedHeader = (function() {

  var docElem = document.documentElement,
    header = document.querySelector( '.navbar-default' ),
    dropdown = document.querySelector('.dropdown-menu'),
    didScroll = false,
    changeHeaderOn = 300;

  function init() {
    window.addEventListener( 'scroll', function( event ) {
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

    function scrollY() {
      return window.pageYOffset || docElem.scrollTop;
    }

    init();

  })();





  //ARHIVA
  // $('.selectpicker').selectpicker();

  // $('select').change(function(){
  //   console.log($(this).val());
  // });


});
