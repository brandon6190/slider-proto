$('.testimonial-slider').slick({
    dots: true,
    speed: 300,
    infinite: false,
    slidesToShow: 3,
    slidesToSroll: 3,
    arrows: false,
    responsive: [
        {
            breakpoint: 989,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            }
        },
        {
            breakpoint: 750,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
    ]
});