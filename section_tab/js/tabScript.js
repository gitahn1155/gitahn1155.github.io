//Tab Module
var tabModule = (function(){
//Private
        var topicType = document.querySelector('.topicList');
        var topicList = topicType.getElementsByTagName('li');

        var selectFunc = function(startNumber, endNumber) {
            var startNum = startNumber;
            var endNum = endNumber;
            var bannerNum =11;

            for(i=0;i<topicList.length;i++) {
                for(j=startNum; j<endNum; j++) {topicList[j].style.display="block";}
                topicList[i].style.display="none";
                if(i==bannerNum) {topicList[bannerNum].style.display="block";} //banner
        }
    }

//Public
    return {
        allSelect:function() {
            selectFunc(0,11);
        },

        alarmSelect:function() {
            selectFunc(0,4);
        },

        zoomSelect:function() {
            selectFunc(4,8);
        },

        cultureSelect: function() {
            selectFunc(8,11);
        },

    }





}());


//Public Event
    var tabType = document.querySelector('.tabType');
    var tabList = tabType.getElementsByTagName('li');
    var allTab = tabList[0];
    var alarmTab = tabList[1];
    var zoomTab = tabList[2];
    var cultureTab = tabList[3];


allTab.addEventListener('click', function() {
    tabModule.allSelect();
});

alarmTab.addEventListener('click', function() {
   tabModule.alarmSelect();

});

zoomTab.addEventListener('click', function() {
    tabModule.zoomSelect();
});

cultureTab.addEventListener('click', function() {
    tabModule.cultureSelect();
});
