// Position of FAQ section (breakpoint for switching backgrounds)
var faqPos;

// Catch scroll event
// Swap parallax image backgrounds at FAQ section breakpoint.
$( window ).scroll(function() {
    // get scroll position
    var scrollPos = $(this).scrollTop();

    // get position of FAQ section
    if (window.innerWidth < 768) faqPos += 158;

    // Check scroll position against FAQ section breakpoint
    if (scrollPos < faqPos) {
        // User hasn't scrolled past FAQ Section. Background 1 visible
        if ($("bg1").css('visibility') == 'visible') return;
        else $("#bg1" ).css( 'visibility', 'visible');
    } else {
        // User has scrolled past FAQ Section. Background 2 visible
        if ($("bg1").css('visibility') == 'hidden') return;
        else $("#bg1" ).css('visibility', 'hidden');
    }
  });

// Anchor padding
//  Adjusts padding/margins on anchors to accommodate navbar and navbar toggle
//  Ensures that links scroll to top of anchored sections
function anchorPadding() {
    faqPos = document.getElementsByName('faq')[0].offsetTop;
    var anchors = document.getElementsByClassName("anchor");
    if (window.innerWidth < 768) {
        faqPos += 158;
        for (var i = 0; i < anchors.length; i++) {
            anchors[i].style.paddingTop = "215px";
            anchors[i].style.marginTop = "-215px";
        }
    } else {
        for (var i = 0; i < anchors.length; i++) {
            anchors[i].style.paddingTop = "57px";
            anchors[i].style.marginTop = "-57px";
        }
    };
}; anchorPadding(); // Invoke to add margins and padding to anchors.

// Catch resize event
window.addEventListener("resize", anchorPadding);

// Close navbar menu after clicking link
$('.navbar-collapse a').click(function(){
    $(".navbar-collapse").collapse('hide');
});