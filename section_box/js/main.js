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


/*
function shareUrl(service, url, text, postId) {
	var sharerUrl = '';
	var wHeight = 0;

	var twitterText = text +' #미정';

	var actionMethod = '';
	switch (service) {
		case "fb":
		// ga('send', 'event', '페이스북 공유', 'listclick', text);
		sharerUrl = '//www.facebook.com/sharer/sharer.php?u='+url;
		wHeight = 520;
		actionMethod = 'post_facebook_sharing_count';
		break; 
		case "tw":
		// ga('send', 'event', '트위터 공유', 'listclick', text);
		sharerUrl = '//twitter.com/share?text='+encodeURIComponent(twitterText)+'&url=http://webzine.kamco.or.kr';
		wHeight = 520;
		actionMethod = 'post_twitter_sharing_count';		
		break;
		case "ks":
		// ga('send', 'event', '카카오스토리 공유', 'listclick', text);
		sharerUrl = '//story.kakao.com/share?url='+url;
		wHeight = 520;
		actionMethod = 'post_kakao_sharing_count';				
		break;
	}

	$.ajax({
		type: "post",
		url: "/wp-admin/admin-ajax.php",
		data: {
			action	: actionMethod,
			post_id	: postId,
		},
		dataType: "text",
		success:function(result) {
		}
	});
	$.ajax({
		type: "post",
		url: "/wp-admin/admin-ajax.php",
		data: {
			action	: 'post_sharing_count',
			post_id	: postId,
		},
		dataType: "text",
		success:function(result) {
		}
	});

	window.open(sharerUrl, "sharer", "width=520,height="+wHeight+",toolbar=0,status=1,resizable=0");
}

*/

/*-- scroll up box 
function scroll(element, parent, contentSlider){
	var scrollTop = contentSlider.offset().top;
	var topBoxHeight = $('.topBox').height();
	$('body, html').animate({ scrollTop: scrollTop - topBoxHeight }, 100);
}
--*/

/*-- Move Up
function goTop() {
	$('html, body').animate({ scrollTop: 0 }, 'ease');
}

*/



$(function(){ 
	$(document).ready(function() {
        topichoverFunc();
		txtdotFunc();
        cornerFunc();
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