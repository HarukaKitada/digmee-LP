
$(document).ready(function(){
    　$('.sliderA').slick({
        autoplay:true,
        centerMode:true,
        slidesToShow:2,
        centerPadding:'10px',
        arrows:false,
        // prevArrow: '<button type="button" class="slick-prev">＜</button>',
        // nextArrow: '<button type="button" class="slick-next">＞</button>',
    });

    $('.sliderB').slick({
        autoplay:false,
        arrows:false,
        autoSpeed:50000,
    });
});