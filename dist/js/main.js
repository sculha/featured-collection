"use strict";function getProductSlider(){$('[data-js="product-list"]').owlCarousel({loop:!0,responsiveClass:!0,nav:!0,dots:!1,responsive:{0:{items:2.15,margin:12,nav:!1},768:{items:2.25,margin:15,nav:!1},992:{items:2.3,margin:32,nav:!0}}})}$(document).ready(function(){getProductSlider()}),$(window).on("resize",function(){getProductSlider()});