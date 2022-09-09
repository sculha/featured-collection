$(document).ready(function() {
    
    getProductSlider();
          
});

$(window).on('resize', function() {
    getProductSlider();
})

function getProductSlider() {
    $('[data-js="product-list"]').owlCarousel({
        loop: true,
        responsiveClass: true,
        nav: true,
        navText: ["<div class='nav-btn prev-slide'></div>","<div class='nav-btn next-slide'></div>"],
        responsive:{
            0: {
                items: 2.15,
                margin: 12,
            },
            768: {
                items: 2.25,
                margin: 15,
            },
            992: {
                items: 2.30,
                margin: 32,
            }
        }
    })
}