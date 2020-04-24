$(document).ready(function() {
  $('.owl-carousel').owlCarousel({
    margin: 20,
    nav: true,
    // navClass: ['slider__arrow--right', 'slider__arrow--left'],
    responsive: {
      0: {
        items: 1
      },  
      600: {
        items: 2
      },
      900: {
        items: 3
      },
    }
  });
});