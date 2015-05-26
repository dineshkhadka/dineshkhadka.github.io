



var mainPage = document.getElementById("main-page");
var featuresPage = document.getElementById("features-page");
var aboutPage = document.getElementById("about-page");

var homeLink = document.getElementById("home-link");
var featuresLink = document.getElementById("features-link");
var aboutLink = document.getElementById("about-link");

function clickity(id){

	if (id == 0){
		mainPage.classList.add('hide')
		featuresPage.classList.remove('hide')
		aboutPage.classList.add('hide')
	}

	else if (id == 1){
		featuresPage.classList.add('hide')
		mainPage.classList.remove('hide')
		aboutPage.classList.add('hide')
	}
	else if (id == 2){
		featuresPage.classList.add('hide')
		mainPage.classList.add('hide')
		aboutPage.classList.remove('hide')
	}
}

function snoop(){

	var getCurrentHash = window.location['hash'];
	if (getCurrentHash == "#main"){
		clickity(1)
	}
	else if(getCurrentHash == "#features"){
		clickity(0)
	}
	else if(getCurrentHash == "#about"){
		clickity(2)
	}
	else{
		clickity(1)
	}
}


window.addEventListener('hashchange', snoop, false)
window.onload = snoop