const parallax_height = ($(window).height())+"px";

var parallax_images = document.getElementsByClassName('parallax');

for(i = 0; i<parallax_images.length; i++) {
    const w = $(window).width();
    const h = $(window).height();

    var image = new Image();
    image.src = '/images/bowhut_2019.jpg';

    var img_aspct = image.width/ image.height;
    var act_aspct = w / h;

    if (act_aspct >= img_aspct) {
        parallax_images[i].style.backgroundSize = `${w+"px"} auto`;
    } else {
        parallax_images[i].style.backgroundSize = `auto ${h+"px"}`;
    }
    
}