

// Slick
$('.slider__container').slick({
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 3,
    navigation: true,
    prevArrow: '<button class="slick-btn slick-prev slick-logo-prev"><img src="../img/prevArrow.svg" alt="next"></button>',
    nextArrow: '<button class="slick-btn slick-next slick-logo-next"><img src="../img/nextArrow.svg" alt="prev"></button>',
    responsive: [
        {
            breakpoint: 1550,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 3,

            }
        },
        {
            breakpoint: 1400,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 3,
            }
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
            }
        },
        {
            breakpoint: 820,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            }
        },
        {
            breakpoint: 620,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centeredMode: true,

            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centeredMode: true,
                variableWidth: true
            }
        },
    ]
});



$('.ourBrands__slider-img').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.ourBrands__slider-text',
    arrows: false,
    infinite: true,
    centerMode: true,
    responsive: [
        {
            breakpoint: 1550,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                centerMode: true,

            }
        },
        {
            breakpoint: 1350,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                centerMode: true,

            }
        },
    ]

});

$('.ourBrands__slider-text').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.ourBrands__slider-img',
    arrows: true,
    infinite: true,
    prevArrow: '<button class="slick-btn slick-prev text-slide-prev "><img src="../img/prevArrow.svg" alt="next"></button>',
    nextArrow: '<button class="slick-btn slick-next text-slide-next "><img src="../img/nextArrow.svg" alt="prev"></button>',
});