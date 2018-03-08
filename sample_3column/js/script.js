//header menu


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
    //이벤트
        
        
    //함수
        
    });
    
    
    //콜백
    var slider = $('.owl-carousel');
	$('.sNext').on('click', function() {
		slider.trigger('next.owl.carousel', [1000]);
	})
	
	$('.sPrev').on('click', function() {
		slider.trigger('prev.owl.carousel', [1000]); 
	});
	
    $('.sDot').on('click', function() { //specific number click to open the number slider
		var index = $(this).index();
		slider.trigger('to.owl.carousel', [index, 3000]);
	});
    
    $('.pNext').on('click', function() {
		slider.trigger('next.owl.carousel', [1000]);
	})
	
	$('.pPrev').on('click', function() {
		slider.trigger('prev.owl.carousel', [1000]); 
	});
	
    
});
