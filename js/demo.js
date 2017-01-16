console.log("Console is ok !");

var jsdevFront = document.getElementById("devFront");
var html5 = document.getElementById('html5');
var css3 = document.getElementById('css3');
var javascript = document.getElementById('javascript');
var devback = document.getElementById('devback');
var php = document.getElementById('php');
var mysql = document.getElementById('mysql');
var frameworks = document.getElementById('frameworks');

var tableau = [jsdevFront,html5,css3,javascript,devback,php,mysql,frameworks];

for (i=0; i<tableau.length; i++ ){
tableau[i].style.visibility="hidden";

}

document.getElementById('submit').onclick= function(){

	// console.log('bien cliqué');
	for (i=0; i<tableau.length; i++ ){
	var question = prompt("voulez-vous continuer ?");
	if (question === "oui"){
	tableau[i].style.visibility="visible";
	} else;
	};
};