!function(factory){"function"==typeof define&&define.amd?define(["jquery"],factory):"object"==typeof exports?module.exports=factory(require("jquery")):factory(jQuery)}(function($){var dispatch=$.event.dispatch||$.event.handle,special=$.event.special,uid1="D"+ +new Date,uid2="D"+(+new Date+1);special.scrollstart={setup:function(data){var timer,_data=$.extend({latency:special.scrollstop.latency},data),handler=function(evt){var _self=this,_args=arguments;timer?clearTimeout(timer):(evt.type="scrollstart",dispatch.apply(_self,_args)),timer=setTimeout(function(){timer=null},_data.latency)};$(this).bind("scroll",handler).data(uid1,handler)},teardown:function(){$(this).unbind("scroll",$(this).data(uid1))}},special.scrollstop={latency:250,setup:function(data){var timer,_data=$.extend({latency:special.scrollstop.latency},data),handler=function(evt){var _self=this,_args=arguments;timer&&clearTimeout(timer),timer=setTimeout(function(){timer=null,evt.type="scrollstop",dispatch.apply(_self,_args)},_data.latency)};$(this).bind("scroll",handler).data(uid2,handler)},teardown:function(){$(this).unbind("scroll",$(this).data(uid2))}}});
// 패밀리 사이트 펼치기 , 닫기
function fammilySite() {
	if($('.relateSiteBox').css('display') == "none"){
		$('.relateSiteBox').show();
		$('.relateSiteBox').parent().find('a.goSite').removeClass('on');
	}else{
		$('.relateSiteBox').hide();
		$('.relateSiteBox').parent().find('a.goSite').removeClass('on').addClass('on');
	}
}
//article 비쥬얼 부분 
function pagecover() {
	var checkWinW = $(window).width() <= 768;
	var coverImgH = $('.coverTop img').height();
	if( !checkWinW ){
		$('.conWrap').css('height', coverImgH);
	} else {
		$('.conWrap').css('height', 'auto');
	}
}

function topichover(){ // topicList hover
	var mobiledevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
	if( !mobiledevice ){
		$('.topicList li').hover(
			function(){
				$(this).find('.topicListImg img').stop().animate({opacity:'0.3'}, 200);
				$(this).find('.topicListText').stop().animate({'padding-bottom':'100',top:'-60','margin-bottom':'-60'}, 200);
				$(this).find('.snsBox').stop().slideDown(200);
			},function(){
				$(this).find('.topicListImg img').stop().animate({opacity:'1'}, 100);
				$(this).find('.topicListText').stop().animate({'padding-bottom':'40',top:'0','margin-bottom':'0'}, 100);
				$(this).find('.snsBox').stop().slideUp(100);
			}
			);
		$('.topicList li').focus(function() {
			$(this).addClass('focus');
		});
		$('.topicList li').blur(function() {
			$(this).removeClass('focus');
		});
	};
};
function issuhover() { // issueList hover
	var mobiledevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
	if (!mobiledevice){
		$('.issueList li').hover(
			function() {
				$(this).find('.postBox').show();
				$(this).find('.issueListImg img').stop().animate({'opacity':'0.3'}, 'easeOut');
				$(this).find('.preview').removeClass('hoverTxt').addClass('hoverTxt');
			},
			function(){          
				$(this).find('.postBox').hide();
				$(this).find('.issueListImg img').stop().animate({'opacity':'1'}, 'easeOut');
				$(this).find('.preview').removeClass('hoverTxt');
			}
			);
		$('.issueList li').focus(function() {
			$(this).addClass('focus');
		});
		$('.issueList li').blur(function() {
			$(this).removeClass('focus');
		});
	}	
}

function shareUrl(service, url, text) {
	var sharerUrl = '';
	var wHeight = 0;

	var twitterText = text +' #Mom대로 키워라';
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


function shareUrl(service, url, text, postId) {
	var sharerUrl = '';
	var wHeight = 0;

	var twitterText = text +' #Mom대로 키워라';

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
		sharerUrl = '//twitter.com/share?text='+encodeURIComponent(twitterText)+'&url=http://www.momkey.com/';
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

function mainsliderH(){
	var visualimgH = $('#mainVisual .rsContent img').heihgt();
	var visualconH = $('#mainVisual .rsContent .conwrap').heihgt();
	if ($(window).width() <= 768){
		$('#mainVisual .rsOverflow').css('height', visualimgH+visualconH);
	}	

}

// mobile
function subcss(url) {
	var head = document.getElementsByTagName('head')[0],
	link = document.createElement('link');
	link.type = 'text/css';
	link.rel = 'stylesheet';
	link.href = 'http://www.momkey.com/wp-content/themes/ssro365/web.css';
	head.appendChild(link);
	return link;
}
function mobilecss(url) {
	var head = document.getElementsByTagName('head')[0],
	link = document.createElement('link');
	link.type = 'text/css';
	link.rel = 'stylesheet';
	link.href = 'http://www.momkey.com/wp-content/themes/ssro365/mobile.css';
	head.appendChild(link);
	return link;
}

function txtdot(){ // ellipsis
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

function contentSlide() {
	$('.theme').each(function( index ) {
		$(this).find('.contentSlide').royalSlider({ 
			loop: true,
			autoHeight: true,
			keyboardNavEnabled: true,
			controlsInside: false,
			slidesSpacing: 20,
			arrowsNavAutoHide: false,
			autoScaleSliderWidth: true,
			autoScaleSlider: true,
			navigateByClick: false,
			autoPlay: false,
			transitionSpeed:200,
			deeplinking: {
				enabled: true,
				change: false
			}
		});
		var contentSlider = $(this).find('.contentSlide');
		var slider = $(this).find('.contentSlide').data('royalSlider');
		var sliderH = $(this).find('.contentSlide li').height();
		if (sliderH > $(window).height()-100){
			slider.ev.on('rsBeforeMove', function(event) {
				scroll('.contentSlide', 'div', contentSlider);
			});	
		}
	});

}
function scroll(element, parent, contentSlider){
	var scrollTop = contentSlider.offset().top;
	var topBoxHeight = $('.topBox').height();
	$('body, html').animate({ scrollTop: scrollTop - topBoxHeight }, 100);
}
function loadScript(url, callback){ 
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
function goTop() {
	$('html, body').animate({ scrollTop: 0 }, 'ease');
}

function mediawidth() { // media query
	if ($(window).width() >= 1100) {
		$('body').removeClass('sc1100');
	}else {
		$('body').addClass('sc1100');
	}
	if ($(window).width() >= 768) {
		$('body').removeClass('sc768');
	}else {
		$('body').removeClass('sc1100').addClass('sc768');
	}
	if ($(window).width() <= 480) {
		$('body').addClass('sc480');
	} else {
		$('body').removeClass('sc480');
	}
	if ($(window).width() <= 320) {
		$('body').addClass('sc320');
	} else {
		$('body').removeClass('sc320');
	}	
}
function survey() {
	$('.wpvq-answer:even').addClass('odd'); // vol 체크솔루션
	$('.wpvq-answer:odd').addClass('even');
	$('.wpvq-question-img').parent('div').addClass('wpvq-question-imgwrap');
	$('.wpvq-answer-img').parent('div').addClass('wpvq-answer-imgwrap');
	if ($('div').hasClass('wpvq')){
		$('.top').append('<div class="browser">이 기사는 인터렉티브 콘텐츠를 포함하고 있습니다. 원활한 이용을 위해 구글 크롬이나 인터넷 익스플로러9 이상의 브라우저 사용을 권장합니다.<a href=""></a></div>');
		$('.browser a').on('click', function(e){
			e.preventDefault();
			$(this).parent().slideUp();
		})
	}
	$('.watu-question').each(function(i, obj) { // watu
		$(this).find('.question-content').siblings('div').wrapAll('<div class="radioWrap">');
	});
	$('.watu-question').wrapAll('<div class="quizWrap">');

}

$(function () {
	var mobiledevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
	// gnb
	var width = $(window).width();
	var listH = $('.viewList').show().height()+70;
	$('.viewList').hide();
	if ($(window).height() < listH ){
		$('.viewList').addClass('sc');
	} else {
		$('.viewList').removeClass('sc');
	}	
	$(window).resize(function(){
		if($(this).width() != width){
			width = $(this).width();
			$('body').css('overflow','');
			$('.headerMenu').removeClass('on');
			$('.viewList').hide();
			$('.MopenSearch').removeClass('open');
			$('.dim').remove();
			if ($(window).width() >=768){
				$('.searchWrap').show();
			} else {
				$('.searchWrap').hide();
			}
			var listH = $('.viewList').show().height()+70;
			$('.viewList').hide();					
			if ($(window).height() < listH ){
				$('.viewList').addClass('sc');
			} else {
				$('.viewList').removeClass('sc');
			}
		}
	});
	$('.headerMenu').on('click', function(e){
		e.preventDefault();
		$(this).toggleClass('on');
		$('.viewList').slideToggle();
		$('.dim').remove();
		if ($(this).hasClass('on')&$('.viewList').hasClass('sc')) {
			$('body').css('overflow','hidden');
		} else{
			$('body').css('overflow','auto');
		}
		if ($('.MopenSearch').hasClass('open')) {
			$('.searchWrap').hide();
			$('.MopenSearch').removeClass('open');
		}
	});
	$('.btnClose01').on('click', function(e){
		e.preventDefault();
		$('.viewList').slideUp();
		$('body').css('overflow','');
		$('.headerMenu').removeClass('on');
	});
	$('.MopenSearch').click(function(e){
		e.preventDefault();
		$('.searchWrap').slideToggle();
		$(this).toggleClass('open');
		if($(this).hasClass('open')){
			$('body').append('<div class="dim"></div>');
			
		} else{
			$('.dim').remove();
		}		
		$('.dim').on('click', function(){
			$('.searchWrap').slideUp();
			$('.MopenSearch').removeClass('open');
			$('.dim').remove();
		});
		$('.viewList').hide();
		$('body').css('overflow','');
		$('.headerMenu').removeClass('on');
	});
	$('.goSite').on('click', function(e){
		e.preventDefault();
		fammilySite();
	});
	$('.btnLike').one('click', function(){
		$(this).addClass('on');
	});

	//corner
	$('.corner2').corner('2px');
	$('.corner3').corner('3px');
	$('.corner5').corner('5px');
	$('.corner15').corner('15px');
	$('.corner5b').corner('round 5px').parent().addClass('outer').css('padding', '1px').corner("round 5px");
	$('.topicListText').corner('bottom 5px');

	$.fn.almComplete = function(alm){//Ajax Load More Complete
		$('.corner5b').corner("round 5px").parent().addClass('outer').css('padding', '1px').corner("round 5px");
		txtdot();
	};

	//검색어 입력 하지 않았을때 검색 막기	
	$('.searchBtn').click(function(e) {
		var checkfrm = $('.inputText').val();
		if (checkfrm == ''){
			e.preventDefault();
			alert('검색어를 입력해 주세요');
		};
	});
	
	if( mobiledevice ) { // device check
		mobilecss();
		$('body').addClass('mobile');
		$(".jump").on("click", function(e) {
			e.preventDefault();
			$("body, html").animate({ scrollTop: $( $(this).attr('href') ).offset().top }, 'ease');
		});
		$(window)
		.on("scrollstart", function() {
			$('a.jump').css('opacity',0.3);})
		.on("scrollstop", function() {
			$('a.jump').css('opacity',1);})
	}else {
		subcss();
	};
	$('.articleList').find('li:even').addClass('even'); // 지난호보기 홀수 리스트 클레스 추가
	if ($('.post h1 span').hasClass('white')){
		$('.cover .conTit').addClass('white');
	}	
	if ($('.post h1 span').hasClass('center')){
		$('.cover').addClass('center');
	}
	txtdot();
	mediawidth();
	$( document ).ready(function() {
		txtdot();
		survey();
	});
	$( window ).load(function() {
		pagecover();
		topichover();
		mediawidth();
		txtdot();
		issuhover();
		contentSlide();
	});
	$(window).resize(function() {
		pagecover();
		topichover();
		mediawidth();
		txtdot();
		contentSlide();
	});
});