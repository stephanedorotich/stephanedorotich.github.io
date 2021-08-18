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

// Anchor padding
//  Adjusts padding/margins on anchors to accommodate navbar and navbar toggle
//  Ensures that links scroll to top of anchored sections
function anchorPadding() {
    var anchors = document.getElementsByClassName("anchor");
    if (window.innerWidth < 768) {
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
};

// Invoke function to add padding/margins to anchors.
anchorPadding();

// Catch resize event
window.addEventListener("resize", anchorPadding);

// Close navbar menu after clicking link
$('.navbar-collapse a').click(function(){
    $(".navbar-collapse").collapse('hide');
});