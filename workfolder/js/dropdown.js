window.onload = function() {

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
};