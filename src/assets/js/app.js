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
        dots: false,
        responsive:{
            0: {
                items: 2.15,
                margin: 12,
                nav: false
            },
            768: {
                items: 2.25,
                margin: 15,
                nav: false
            },
            992: {
                items: 2.30,
                margin: 32,
                nav: true
            }
        }
    })
}