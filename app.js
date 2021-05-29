// Catch scroll event
$( window ).scroll(function() {
    // If user hasn't scrolled past FAQ Section set default z-index
    if ($(this).scrollTop() < document.getElementsByName('faq')[0].offsetTop) {
        $("#bg1" ).css( "z-index", -1);
        $("#bg2" ).css( "z-index", -2);
    } else {
        // If user has scrolled past FAQ Section set z-index for second bg img to show
        $("#bg1" ).css( "z-index", -2);
        $("#bg2" ).css( "z-index", -1);
    }
  });