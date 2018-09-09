window.onload = function() {
//Variable TESTING
    var tabType = document.querySelector('.tabType');
    var tabList = tabType.getElementsByTagName('li');
    var topicType = document.querySelector('.topicList');
    var topicList = topicType.getElementsByTagName('li');
    var allTab = tabList[0];
    var alarmTab = tabList[1];
    var zoomTab = tabList[2];
    var cultureTab = tabList[3];

//Function 
    function tabsFunc(tabNums, singleNums) { //4, 1
        var tabNum = tabNums;
        var singleNum = singleNums;
            
            for(var l=0; l < tabNum; l++){
					
				if(tabList[l].getElementsByTagName('a')[0].classList) {
                tabList[l].getElementsByTagName('a')[0].classList.remove('on');	
				} else {
					tabList[l].getElementsByTagName('a')[0].className = "off";
				}
					if(tabList[singleNum].getElementsByTagName('a')[0].classList) {
                    tabList[singleNum].getElementsByTagName('a')[0].classList.add('on'); }
					else { 					
						 tabList[singleNum].getElementsByTagName('a')[0].className = "on";
					}
                    

            }    
		
		/* 
		for(l=0; l < tabNum; l++){ 4,1
                tabList[l].getElementsByTagName('a')[0].classList.remove('on');
                if(tabList[singleNum]) { //0
                    tabList[singleNum].getElementsByTagName('a')[0].classList.add('on');
                }    
            }
		*/
    } 
    function selectFunc(startNumbers, endNumbers) {
        var startNum = startNumbers;
        var endNum = endNumbers;
        var bannerNum =11;

            for(var i=0;i<topicList.length;i++) {
                for(var j=startNum; j<endNum; j++) {topicList[j].style.display="block";}
                topicList[i].style.display="none";
                if(i==bannerNum) {topicList[bannerNum].style.display="block";}
        }    
    }	
	
	
	
	
	
	
    
//Public
function allSelect() {
     tabsFunc(tabList.length, 0);
    selectFunc(0,11);
}
    
function alarmSelect() {
    tabsFunc(tabList.length, 1); // 4, 1
    selectFunc(0,4);
}

function zoomSelect() {
    tabsFunc(tabList.length, 2);    
    selectFunc(4,8);   
}
    
function cultureSelect() {
    tabsFunc(tabList.length, 3);
    selectFunc(8,11);   
}

//Event
if (allTab.addEventListener) {
allTab.addEventListener("click", allSelect);
}  
else {
allTab.attachEvent("onclick", allSelect );
}
    
if (alarmTab.addEventListener) {
alarmTab.addEventListener("click", alarmSelect);
}
else {
alarmTab.attachEvent("onclick", alarmSelect);
}
    
if (zoomTab.addEventListener) {
    zoomTab.addEventListener("click", zoomSelect);
}
else {
    zoomTab.attachEvent("onclick", zoomSelect);
}

if (cultureTab.addEventListener) {
    cultureTab.addEventListener("click", cultureSelect);
}
else {
    cultureTab.attachEvent("onclick", cultureSelect);
}
               
};