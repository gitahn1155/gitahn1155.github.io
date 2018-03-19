//콘텐츠 박스 동작 jQuery
var topichoverFunc = function(){
	var mobiledevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
	if( !mobiledevice ){ //PC:true
		$('.topicList li').hover( 
			function(){ //HOVER
				$(this).find('.topicListImg img').stop().animate({opacity:'0.3'}, 200);
				$(this).find('.topicListText').stop().animate({'padding-bottom':'100',top:'-60','margin-bottom':'-60'}, 200);
				$(this).find('.snsBox').stop().slideDown(200);
			},function(){ //REMOVER
				$(this).find('.topicListImg img').stop().animate({opacity:'1'}, 100);
				$(this).find('.topicListText').stop().animate({'padding-bottom':'40',top:'0','margin-bottom':'0'}, 100);
				$(this).find('.snsBox').stop().slideUp(100);
			});
	};
};

//박스 코너 둥글게
var cornerFunc = function() {
    var mobiledevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
	// gnb
	var width = $(window).width();
	
    //Add corner 5px
	$('.topicCorner').corner('round 5px').parent().addClass('outer').css('padding', '1px').corner("round 5px");

	$.fn.almComplete = function(alm){//Ajax Load
		$('.topicCorner').corner("round 5px").parent().addClass('outer').css('padding', '1px').corner("round 5px");
		//txtdot();
	};  
}

//소셜 공유 링크 선택 Vanilla
var shareUrl = function(service, url, text) {
	var sharerUrl = '';
	var wHeight = 0;

	var twitterText = text +' #미정';
	switch (service) {
		case "fb":
		//ga('send', 'event', '페이스북 공유', 'listclick', text);
		sharerUrl = '//www.facebook.com/sharer/sharer.php?u='+url;
		wHeight = 520;
		break; 
		case "tw":
		//ga('send', 'event', '트위터 공유', 'listclick', text);
		sharerUrl = '//twitter.com/share?text='+encodeURIComponent(twitterText)+'&url=http://www.momkey.com/';
		wHeight = 520;
		break;
		case "ks":
		//ga('send', 'event', '카카오스토리 공유', 'listclick', text);
		sharerUrl = '//story.kakao.com/share?url='+url;
		wHeight = 520;
		break;
	}
	window.open(sharerUrl, "sharer", "width=520,height="+wHeight+",toolbar=0,status=1,resizable=0");
}

//스크립트 로딩 Vanilla
var loadScript = function(url, callback){ 
	var script = document.createElement("script")
	script.type = "text/javascript";

	if (script.readyState){  //IE
		script.onreadystatechange = function(){
			if (script.readyState == "loaded" ||
				script.readyState == "complete"){
				script.onreadystatechange = null;
			callback();
		}
	};
	} else {  //Others
		script.onload = function(){
			callback();
		};
	}
	script.src = url;
	document.getElementsByTagName("head")[0].appendChild(script);
}

//CSS Vanilla
var subcss = function(url) {
	var head = document.getElementsByTagName('head')[0],
	link = document.createElement('link');
	link.type = 'text/css';
	link.rel = 'stylesheet';
	link.src = 'css/style.css';
	head.appendChild(link);
	return link;
}
var mobilecss = function(url) {
	var head = document.getElementsByTagName('head')[0],
	link = document.createElement('link');
	link.type = 'text/css';
	link.rel = 'stylesheet';
	link.src = 'css/style.css';
	head.appendChild(link);
	return link;
}

var txtdotFunc = function(){ // ellipsis //add dot to preview class
	$('.preview').dotdotdot({
		ellipsis	: '... ',
		wrap		: 'word',
		fallbackToLetter: true,
		after		: null,
		watch		: false,
		height		: null,
		tolerance	: 0,
		callback	: function( isTruncated, orgContent ) {},
		lastCharacter	: {
			remove		: [ ' ', ',', ';', '.', '!', '?' ],
			noEllipsis	: []
		}
	});
}

//슬라이더 
var slidersFunc = function(){
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
}

//메뉴 드랍 함수 Vanilla
var menuModule = (function(){ 
    var defaultType = "none";
    var otherType = "block";
    
    return {
        dropDown:function() {
            
            //Why 변수가 PUBLIC안에 들어가야 할까?
            var selector = document.querySelector(".topDrop");
            
            if(selector.style.display == defaultType) {
                            console.log(otherType);
                selector.style.display = otherType;   
            }
            else {
                selector.style.display = defaultType;
            }
        }       
    }

})();

$(function(){ 
	$(document).ready(function() {
        topichoverFunc();
		txtdotFunc();
        cornerFunc();
        slidersFunc();
        
        //메뉴 이벤트
        $(".menu").on('click', function() {      
            menuModule.dropDown();
        });
        
        //슬라이더 이벤트
        var slider = $('.owl-carousel');
        var mSlider = $('.owl-carousel.Mobile');
        $('.sNext').on('click', function() {
            slider.trigger('next.owl.carousel', [1000]);
        });
        $('.sPrev').on('click', function() {
            slider.trigger('prev.owl.carousel', [1000]); 
        });
        $('.sDot').on('click', function() { //specific number click to open the number slider
            var index = $(this).index();
            slider.trigger('to.owl.carousel', [index, 3000]);
        });
        $('.mDot').on('click', function() { //specific number click to open the number slider
            var index = $(this).index();
            mSlider.trigger('to.owl.carousel', [index, 3000]);
        });
    });
	$(window).load(function() {
		topichoverFunc();
		txtdotFunc();
        cornerFunc();
	});
	$(window).resize(function() {
		topichoverFunc();
		txtdotFunc();
        cornerFunc();
	});
});

