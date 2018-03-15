var BodyWidth=0;
var BodyHeight=0;
var BodyTop=0;
var BodyLeft=0;

function bodysize() {
	
	if(document.body.clientWidth > 0) BodyWidth = document.body.clientWidth;
	else BodyWidth = document.documentElement.clientWidth;
	
	if(document.body.clientHeight > 0) BodyHeight = document.body.clientHeight;
	else BodyHeight = document.documentElement.clientHeight;
		
	if(document.body.scrollTop > 0) BodyTop = document.body.scrollTop;
	else BodyTop = document.documentElement.scrollTop;
		
	if(document.body.scrollLeft > 0) BodyLeft = document.body.scrollLeft;
	else BodyLeft = document.documentElement.scrollLeft;
		
}

bodysize();

bw = BodyWidth-40;
if(bw < 720) {
	h = (bw/720) * 438;
	w = bw;
	
	document.write("<style type='text/css'>#webzine_con iframe {width:"+w+"px; height:"+h+"px;}</s"+"tyle>");
} else {
	document.write("<style type='text/css'>#webzine_con iframe {width:720px; height:438px;}</s"+"tyle>");
}

function prevbut(url) {
	
	if(BodyWidth > 970) {
		
		a = (BodyWidth/2) - (970/2) - 50 - 50;
		document.write("<style type='text/css'>#prevbut {left:"+a+"px;}</s"+"tyle>");
		
	}	else {
		//document.write("<style type='text/css'>#webzine_con {padding-left:60px;}</s"+"tyle>");
	}
	document.write("<a id=prevbuta href='"+url+"'><img id=prevbut src='img/prev0.png' alt='�댁쟾' onmouseover=\"this.src='img/prev1.png'\" onmouseout=\"this.src='img/prev0.png'\" ontouchstart=\"this.src='img/prev1.png';document.location='"+url+"'\"></a>");	
}
function prevresize() {
	
	if(document.getElementById('prevbut') == null) return;
	
	if(BodyWidth > 970) {
		
		a = (BodyWidth/2) - (970/2) - 50 - 50;
		document.getElementById('prevbut').style.left=a+'px';
		//document.getElementById('webzine_con').style.paddingLeft='20px';
	}	else {
		
		document.getElementById('prevbut').style.left='3px';
		//document.getElementById('webzine_con').style.paddingLeft='60px';
	}	
}

function nextbut(url) {
	
	if(BodyWidth > 970) {
		
		a = (BodyWidth/2) + (970/2) + 30;
		document.write("<style type='text/css'>#nextbut {left:"+a+"px;}</s"+"tyle>");
		
	}	else {
		
		//document.write("<style type='text/css'>#webzine_con {padding-right:60px;}</s"+"tyle>");
	}	
	document.write("<a id=nextbuta href='"+url+"'><img id=nextbut src='img/next0.png' alt='�ㅼ쓬' onmouseover=\"this.src='img/next1.png'\" onmouseout=\"this.src='img/next0.png'\" ontouchstart=\"this.src='img/next1.png';document.location='"+url+"'\"></a>");
}
function nextresize() {
	
	if(document.getElementById('nextbut') == null) return;
	
	if(BodyWidth > 970) {
		
		a = (BodyWidth/2) + (970/2) + 30;
		document.getElementById('nextbut').style.left=a+'px';
		//document.getElementById('webzine_con').style.paddingRight='20px';
			
	}	else {
		
		a = (BodyWidth) - 50 - 3;
		document.getElementById('nextbut').style.left=a+'px';
		//document.getElementById('webzine_con').style.paddingRight='60px';
	}	
}
function snsresize() {
	
	if(document.getElementById('viewsns') == null) return;
	
	if(BodyWidth > 970) {
		
		a = (BodyWidth/2) + (970/2) + 30;
		document.getElementById('viewsns').style.top='40%';
		document.getElementById('viewsns').style.left=a+'px';
		
		a = a-5;
		if(document.getElementById('topscrollbut') != null) {
			document.getElementById('topscrollbut').style.left=a+'px';
			document.getElementById('topscrollbut').style.right='';
		}
			
	}	else {
		
		if(document.getElementById('MainImgScroll1_0') == null) {
			
			if(BodyTop > 0) document.getElementById('viewsns').style.top='0px';
			else {
				if(document.getElementById('webzine_top2') == null) document.getElementById('viewsns').style.top=50+'px';
				else document.getElementById('viewsns').style.top=100+'px';
			}
			
		} else {
			document.getElementById('viewsns').style.top='0px';
			
		}
		
		document.getElementById('viewsns').style.left='0px';
		
		
		if(document.getElementById('topscrollbut') != null) {
			document.getElementById('topscrollbut').style.left='';
			document.getElementById('topscrollbut').style.right='10px';
		}
	}	
	
	
	//----
	if(document.body.scrollTop > 0) BodyTop = document.body.scrollTop;
	else BodyTop = document.documentElement.scrollTop;
	
	if(document.getElementById('topscrollbut') != null) {		
		
		if(BodyTop > BodyHeight*0.7) {
			document.getElementById('topscrollbut').style.display='block';
		} else {
			document.getElementById('topscrollbut').style.display='none';
		}
	}
	
	if(document.body.scrollHeight > 0) BodySHeight = document.body.scrollHeight;
	else BodySHeight = document.documentElement.scrollHeight;
		
	
	if(document.getElementById('topscrollbut') != null) {
		if(BodyTop >= BodySHeight-BodyHeight-150) {
		
			if(BodyWidth > 970) {
				document.getElementById('topscrollbut').style.bottom='20%';
			} else {
				document.getElementById('topscrollbut').style.bottom='10%';
			}	
		} else {
			document.getElementById('topscrollbut').style.bottom='2%';
		}
	}
	
}

function resizePrc() {
	bodysize();
	prevresize();
	nextresize();
	snsresize();
}

var zFactor=1;
window.onresize = window.onscroll = function () {
	
	resizePrc();
	lowerleft = [window.pageXOffset,(window.pageYOffset+window.innerHeight)];
	lowerright = [(lowerleft[0] + window.innerWidth),lowerleft[1]];
	zFactor = window.innerWidth/document.documentElement.clientWidth;
}

function prevs() {
	val = document.getElementById('prevbuta').href;
	document.location = val;
}

function nexts() {
	val = document.getElementById('nextbuta').href;
	document.location = val;
}

var xx;
var xxfirst;
var yy;
var yyfirst;
var xxmove=false;   
function touchHandler(event){
	
	if(xxtime3 > -1 && xxtime3 > new Date().getTime()-1000) return;		// cardnews
	
	if(event.touches.length >= 2) {		
		return;
	}
	
	if(zFactor<1) {
		return;
	}
		
	t=event.changedTouches;
	if(event.type=="touchstart"){
		xx=t[0].screenX;
		xxfirst=xx;
		xxmove=false;
		yy=t[0].screenY;
		yyfirst=yy;
		
	}else if(event.type=="touchmove"){

		if(xx!= -1) {
			xxmove=true;
		}
		
	}else if(event.type=="touchend"){
	
		if(xx!=-1 && yy!=-1){
			if(xxmove){
			
				
				if(xxfirst+70<t[0].screenX && Math.abs(yyfirst-t[0].screenY) < 50 ){
					prevs();
				}else if(xxfirst-70>t[0].screenX && Math.abs(yyfirst-t[0].screenY) < 50){
					nexts();	
				}
			}
		}
	}
}


function winad_start(cnt) {
	chgmax = cnt;
	setTimeout('winad_chg(100)',2500);
}

var chgn = 0;
var chgmax = 1;
function winad_chg(opa) {
	
	nextn = chgn+1;
	if(nextn > chgmax) nextn = 0;
	
	if(opa == 100) {
		document.getElementById('mainad'+nextn).style.display='block';
	}
	opa = opa - 10;
	
	document.getElementById('mainad'+chgn).style.filter='alpha(opacity='+opa+')';
	document.getElementById('mainad'+chgn).style.opacity=opa/100;
	if(opa <= 0) {
		document.getElementById('mainad'+nextn).style.zIndex=3;
		document.getElementById('mainad'+chgn).style.zIndex=2;
		document.getElementById('mainad'+chgn).style.filter='alpha(opacity=100)';
		document.getElementById('mainad'+chgn).style.opacity=1;
		document.getElementById('mainad'+chgn).style.display='none';
		
		chgn = nextn;
		
		if(chgn == 0)	setTimeout('winad_chg(100)',2500);	
		else setTimeout('winad_chg(100)',5000);		// �쒕�遺꾩씠�쇱꽌 泥쒖쿇��
			
	} else {	
		setTimeout('winad_chg('+opa+')',100);
	}
}		

function mainsubmove(ids) {
	ids = document.getElementById(ids);
	ids.style.width='486px';
	ids.style.left='-50px';
	ids.style.top='-46px';
	ids.style.filter='alpha(opacity:70)';
	ids.style.opacity='0.7';
}

function mainsubmove2(ids) {
	ids = document.getElementById(ids);
	ids.style.width='386px';
	ids.style.left='0px';
	ids.style.top='0px';
	ids.style.filter='alpha(opacity:100)';
	ids.style.opacity='1.0';
}

var categb = false;
function categorymenu() {
	if(categb) {
		document.getElementById('categorymenu').style.display='none';
		categb = false;
	} else {
		document.getElementById('categorymenu').style.display='block';
		categb = true;
	}
}

function aboutUs2() {
	
	document.getElementById('aboutus_div').style.display='none';
}
function aboutUs(event) {
	
	w = BodyWidth;
	h = document.body.scrollHeight;
	if(h < BodyHeight) h = BodyHeight;
	
	document.getElementById('aboutus_div2').style.height=h+'px';
	
	if(BodyWidth<520) {
		document.getElementById('aboutus_div3').style.width=(BodyWidth-60)+'px';
		document.getElementById('aboutus_div3').style.left='0px';
		
	} else {
		document.getElementById('aboutus_div3').style.width='450px';
		document.getElementById('aboutus_div3').style.left=((w/2)-255)+'px'
	}
	
	if(BodyWidth<650) document.getElementById('aboutus_div3').style.top=(BodyTop+50)+'px';
	else document.getElementById('aboutus_div3').style.top=((h/2)-450)+'px';
		
	
	
	document.getElementById('aboutus_div').style.display='block';
}	

function aboutOld2() {
	
	document.getElementById('aboutold_div').style.display='none';
}
function aboutOld(m) {
	
	w = BodyWidth;
	h = document.body.scrollHeight;
	if(h < BodyHeight) h = BodyHeight;
	
	document.getElementById('aboutold_div2').style.height=h+'px';
	
	if(BodyWidth<520) {
		document.getElementById('aboutold_div3').style.width=(BodyWidth-60)+'px';
		document.getElementById('aboutold_div3').style.left='0px';
		
	} else {
		document.getElementById('aboutold_div3').style.width='450px';
		document.getElementById('aboutold_div3').style.left=((w/2)-255)+'px'
	}
	
	if(m == 3) document.getElementById('aboutold_div3').style.top=(50)+'px';
	else if(BodyWidth<650) document.getElementById('aboutold_div3').style.top=(BodyTop+50)+'px';
	else document.getElementById('aboutold_div3').style.top=((h/2)-450)+'px';
		
	
	
	document.getElementById('aboutold_div').style.display='block';
}	

function aboutSe2() {
	
	document.getElementById('aboutse_div').style.display='none';
}
function aboutSe(indexgb) {
	
	w = BodyWidth;
	h = document.body.scrollHeight;
	if(h < BodyHeight) h = BodyHeight;
	
	document.getElementById('aboutse_div2').style.height=h+'px';
	
	if(BodyWidth<520) {
		document.getElementById('aboutse_div3').style.width=(BodyWidth-60)+'px';
		document.getElementById('aboutse_div3').style.left='0px';
		
	} else {
		document.getElementById('aboutse_div3').style.width='450px';
		
		if(BodyWidth>1500) document.getElementById('aboutse_div3').style.right='300px';
		else document.getElementById('aboutse_div3').style.right='100px';
	}
	
	if(BodyWidth<650) document.getElementById('aboutse_div3').style.top='50px';
	else {
		if(indexgb) document.getElementById('aboutse_div3').style.top='120px';
		else document.getElementById('aboutse_div3').style.top='60px';
	}
		
	
	
	document.getElementById('aboutse_div').style.display='block';
}	

function gudokSubmitPrc() {

	if(!document.gudokform.name.value) {
		alert('�대쫫�� �낅젰�섏꽭��');
		return false;
	}
	if(!document.gudokform.tel.value) {
		alert('�꾪솕踰덊샇瑜� �낅젰�섏꽭��');
		return false;
	}
	if(!document.gudokform.email.value) {
		alert('�대찓�쇱쓣 �낅젰�섏꽭��');
		return false;
	}
	if(!document.gudokform.contents.value) {
		alert('二쇱냼瑜� �낅젰�섏꽭��');
		return false;
	}
}

function searchSubmitPrc() {
	if(document.getElementById('searchval').value.length < 2) {
		alert('寃��됱뼱瑜� 2�먯씠�� �낅젰�섏꽭��');
		return false;
	} 
}

var rr = new Array();
var rpause = new Array();
var numbefore = new Array();
var moveclicktime = 0;

function rollingprc(n,c,w,xinit) {
	if(xinit) {
		
		if(!rpause[n]) {
			if(!rr[n]) rr[n] = 1;
			++rr[n];
			if(rr[n] > c) rr[n] = 1;
			rollingprcprc(n,c,w, rr[n]);
		}
		
	} else {
		
		if(BodyWidth < 950) {
			w = document.getElementById('rollingdiv'+n).style.width.replace('px','');
			h = document.getElementById('rollingdiv'+n).style.height.replace('px','');
			w = parseInt(w);
			h = parseInt(h);
			h2 = (BodyWidth/w)*h;
			document.getElementById('rollingdiv'+n).style.height = h2+'px';
		}
	}
	if(!rpause[n]) setTimeout("rollingprc("+n+","+c+","+w+",true)",2000);
}

function rollingmove(n,c,w, num,cardnews) {
	moveclicktime = new Date().getTime();
	rpause[n] = true;
	rr[n] = num;
	rollingprcprc(n,c,w, num, cardnews);
	if(!cardnews) setTimeout("rpause["+n+"] = false; rollingmoveauto("+n+","+c+","+w+",true)",5000);
}

function rollingleft(n,c,w,cardnews) {
	
	if(!rr[n]) rr[n] = 1;
	--rr[n];
	if(rr[n] < 1) {
		if(cardnews) rr[n] = 1;
		else rr[n] = c;
	}
	rollingprcprc(n,c,w, rr[n],cardnews);	
}
function rollingright(n,c,w,cardnews) {
	
	if(!rr[n]) rr[n] = 1;
	++rr[n];
	if(rr[n] > c) {
		if(cardnews) rr[n] = c;
		else rr[n] = 1;
	}
	rollingprcprc(n,c,w, rr[n],cardnews);	
}

function rollingmoveauto(n,c,w) {
	t = (new Date().getTime() - moveclicktime) / 1000;
	if(t > 4.8) {
		rollingprc(n,c,w,true);
	}
}

function rollingprcprc(n,c,w, num, cardnews) {
	
	document.getElementById('rolling'+n).style.left= (100*(num-1)*-1) +'%';
	if(!numbefore[n]) numbefore[n] = 1;
	if(cardnews) {
		document.getElementById('rollingdot'+n+'_'+numbefore[n]).style.border='2px solid #ffffff';
		document.getElementById('rollingdot'+n+'_'+num).style.border='2px solid #f68b1f';
		
	} else {
		document.getElementById('rollingdot'+n+'_'+numbefore[n]).src='img/dot.png';
		document.getElementById('rollingdot'+n+'_'+num).src='img/dot_.png';
	}
	numbefore[n] = num;
}

function pushdivon() {
	document.getElementById('pushdiv').style.display='block';
}
function pushdivoff() {
	document.getElementById('pushdiv').style.display='none';
}