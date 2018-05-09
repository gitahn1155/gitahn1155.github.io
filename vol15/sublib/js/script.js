//initial 함수
$(document).ready(function(){
    //owlCarousel slider
    $(".owl-carousel").owlCarousel({
    //옵션
    items: 1,
    nav: false,
    dots: true, // circle to line
    autoHeight : true,
    dotsContainer: '.sDots',        
    });
      
    //콜백
    var slider = $('.owl-carousel');
    var mSlider = $('.owl-carousel.Mobile');
	$('.sNext').on('click', function() {
		slider.trigger('next.owl.carousel', [1000]);
	})
	
	$('.sPrev').on('click', function() {
		slider.trigger('prev.owl.carousel', [1000]); 
	});
	
    
});
