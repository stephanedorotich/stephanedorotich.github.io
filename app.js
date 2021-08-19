// Catch scroll event
// Swap parallax image backgrounds at FAQ section breakpoint.
$( window ).scroll(function() {
    // Check scroll position against FAQ section position
    if ($(this).scrollTop() <= document.getElementsByName('faq')[0].offsetTop) {
        // User hasn't scrolled past FAQ Section. Background 1 visible
        $("#bg1" ).css( 'visibility', 'visible');
    } else {
        // User has scrolled past FAQ Section. Background 2 visible
        $("#bg1" ).css('visibility', 'hidden');
    };
});

// Close navbar menu after clicking link
$('.navbar-collapse a').click(function(){
    $(".navbar-collapse").collapse('hide');
});