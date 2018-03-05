//header menu


//initial 함수
$(document).ready(function(){
    //owlCarousel slider
    $(".owl-carousel").owlCarousel({
    //옵션
    items: 1,
    nav: false,
    dots: false, // circle to line
        
    //이벤트
        
        
    //함수
    
        
    });
    
    
    
});

/**

$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
	  //option
	  margin: 20,
	  nav: false,
	  items: 1,
	  
	//callback 개념
	//callback을 잘 구현하는 사람은 javascript을 잘함. > 비동기 방식을 구현할때 중요한 역할을 한다. 
	//받은 콜을 다시 돌려준다.
	//event - callback (움직이기 전, 움직이기 후에란 얘기)
	/*  onDrag : function() { alert("hello");}
	  onTranslated : function() { alert('드래그 종료') }
	*/  
	 
	 //Event 
/**
	 onTranslated : move,
	 onTranslate : function() {
	 	$('.slider .item').animate ({ fontSize : 80 });
	 }//Data
	  
  });
	/*
	function move(event) { //Data function, Function callback event 
		console.log(event.item.index);
		var num = event.item.index;
		num ++;
		
		$('.slider .item' + num).animate ({ fontSize : 40 }); // learn about animate, //index 0,1,2,3,4 이지만 내 태그에 맞추기 위하여 1,2,3,4로 변환한다. 위와 같이..

	}
	*/
	
/**	
	function move(event) { //Data function, Function callback event 
		console.log(event.item.index);
		var num = event.item.index;
		num ++;
		$('.slider .item' + num).animate({ fontSize : 40});
		
	}
	
	$('.slider .item1').animate ({ fontSize : 40 });
	
	var slider = $('.owl-carousel');
	slider.owlCarousel();
	//trigger - 대신해준다 의미

	$('#next').on('click', function() {
		slider.trigger('next.owl.carousel', [1000]);
	})
	
	$('#prev').on('click', function() {
		
		slider.trigger('prev.owl.carousel', [1000]); // trigger slider owl slider button
	});
	
	
	$('.nav button').on('click', function() { //specific number click to open the number slider
		
		var index = $(this).index();
		slider.trigger('to.owl.carousel', [index, 400]);
	});
	
	$("#num1").on('click', function() {
		
		slider.trigger('to.owl.carousel', [2, 400]); //3page로 이동 (동그라미)
	});
	
	
	

	
	
	
	
});
	
**/