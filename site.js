$(function() {
  function init() {
    // Toggle bg colour on and off
    $('.background').on('click', function (e) {
      e.preventDefault();
     $('body').toggleClass('color-test');

    })
    // toggle position
    $('.position').on('click', function (e) {
      e.preventDefault();
     $('.bottom-text-container' ).toggleClass('toggle-position');

    })

    // toggle movement
    $('.movement').on('click', function (e) {
      e.preventDefault();
     $('.sm-credit-container' ).toggleClass('toggle-movement');

    })

  }
  init();
});
