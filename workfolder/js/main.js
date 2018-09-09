var dropDownFunc = function() { /* TESTING */
	var mobileMenu = document.querySelector(".menuHead");
function dropDownFunc() {
var defaultType = "none";
var otherType = "block";
var menuDown = document.querySelector(".topDrop");
    
    if(menuDown.style.display == defaultType) {
            menuDown.style.display = otherType;
    }else { menuDown.style.display = defaultType; }
}


if(mobileMenu.addEventListener) {
    mobileMenu.addEventListener("click", dropDownFunc);
}
else {
    mobileMenu.attachEvent("onclick", dropDownFunc);
}
}

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





$(function(){
	$(document).ready(function() {
		dropDownFunc();
        cornerFunc();
        slidersFunc();

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
	dropDownFunc();
      cornerFunc();

	});
	$(window).resize(function() {
	dropDownFunc();
    cornerFunc();

	});
});
