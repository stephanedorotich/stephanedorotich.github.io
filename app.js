const parallax_height = ($(window).height())+"px";

var parallax_images = document.getElementsByClassName('parallax');

for(i = 0; i<parallax_images.length; i++) {
    var w = parallax_images[i].offsetWidth;
    var h = parallax_images[i].offsetHeight;

    var image = new Image();
    image.src = '/images/bowhut_2019.jpg';

    var img_aspct = image.width/ image.height;
    var act_aspct = w / h;

    if (act_aspct >= img_aspct) {
        parallax_images[i].style.backgroundSize = "100% auto";
    } else {
        if(w * img_aspct > h) {
            parallax_images[i].style.backgroundSize = "100% auto";
        } else {
            parallax_images[i].style.backgroundSize = "auto 100vh";
        }
    }
    
}