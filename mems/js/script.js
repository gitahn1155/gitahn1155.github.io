var textf = document.querySelector('.textfield');
var texth = textf.getElementsByTagName('h2');
var textp = textf.getElementsByTagName('p');
var textd = textf.getElementsByTagName('div');

window.onhashchange = function() {

	if (location.hash === "#main1") {
		textd[0].style.display = "block";
		textd[1].style.display = "none";
		textd[2].style.display = "none";
	}

	else if (location.hash === "#main2") {
		console.log(textd[1]);
		textd[0].style.display = "none";
		textd[1].style.display = "block";
		textd[2].style.display = "none";
	}

	else if (location.hash === "#main3") {
		textd[0].style.display = "none";
		textd[1].style.display = "none";
		textd[2].style.display = "block";
	}


}

function functs (x){
	var e = x;
	if(e == 0 ) {
		textp[0].style.display="block";
		textp[1].style.display="none";
		textp[2].style.display="none";
		texth[0].style.color="#000";
		texth[1].style.color="gray";
		texth[2].style.color="gray";

	}

	else if(e == 1) {
		textp[0].style.display="none";
		textp[1].style.display="block";
		textp[2].style.display="none";
		texth[1].style.color="#000";
		texth[0].style.color="gray";
		texth[2].style.color="gray";
	}

	else if(e == 2) {
		textp[0].style.display="none";
		textp[1].style.display="none";
		textp[2].style.display="block";
		texth[1].style.color="gray";
		texth[0].style.color="gray";
		texth[2].style.color="#000";
	}

	else if(e == 3) {
		textp[0].style.display="none";
		textp[1].style.display="none";
		textp[2].style.display="none";
		textp[3].style.display="block";
		textp[4].style.display="none";
		textp[5].style.display="none";
		texth[1].style.color="gray";
		texth[0].style.color="gray";
		texth[2].style.color="gray";
		texth[3].style.color="#000";
		texth[4].style.color="gray";
		texth[5].style.color="gray";
	}

	else if(e == 4) {
		textp[0].style.display="none";
		textp[1].style.display="none";
		textp[2].style.display="none";
		textp[3].style.display="none";
		textp[4].style.display="block";
		textp[5].style.display="none";
		texth[1].style.color="gray";
		texth[0].style.color="gray";
		texth[2].style.color="gray";
		texth[3].style.color="gray";
		texth[4].style.color="#000";
		texth[5].style.color="gray";
	}

	else if(e == 5) {
		textp[0].style.display="none";
		textp[1].style.display="none";
		textp[2].style.display="none";
		textp[3].style.display="none";
		textp[4].style.display="none";
		textp[5].style.display="block";
		texth[1].style.color="gray";
		texth[0].style.color="gray";
		texth[2].style.color="gray";
		texth[3].style.color="gray";
		texth[4].style.color="gray";
		texth[5].style.color="#000";
	}

	else {
		textp[0].style.display="block";
		textp[1].style.display="none";
		texth[0].style.color="#000";
		texth[1].style.color="gray";
	}
}

texth[0].addEventListener("click", function(){functs(0)});
texth[1].addEventListener("click", function(){functs(1)});
texth[2].addEventListener("click", function(){functs(2)});
texth[3].addEventListener("click", function(){functs(3)});
texth[4].addEventListener("click", function(){functs(4)});
texth[5].addEventListener("click", function(){functs(5)});
