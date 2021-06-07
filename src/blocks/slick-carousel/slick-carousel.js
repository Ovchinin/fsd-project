import 'slick-carousel';

$('.image-slider').slick({
    dots: true,
    infinite: true,
    //autoplay: true,
    //arrows: true,
    prevArrow: "<button type='button' class='material-icons slide-prev'>expand_more</button>",
    nextArrow: "<button type='button' class='material-icons slide-next'>expand_more</button>",
    dotsClass: 'slider-dots'
});