var parallax_height = (0.8*$(window).height())+"px";

var parallax_images = document.getElementsByClassName('parallax');

for(i = 0; i<parallax_images.length; i++) {
    var h = parallax_images[i].offsetHeight;
    if (h == 0 || h < parallax_height) {
        parallax_images[i].style.height = parallax_height;
    }
}