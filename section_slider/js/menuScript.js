//menuSelection
var menuModule = (function() { 
    var selector = document.querySelector('.topDrop');
    var defaultType = "none";
    var otherType = "block";

    return {
        dropDown:function() {
            if(selector.style.display == defaultType) {
                selector.style.display = otherType;   
            }
            else {
                selector.style.display = defaultType;
            }
        }
        
    }
}());


document.querySelector('.menu').addEventListener('click', function() {
    menuModule.dropDown();
});


