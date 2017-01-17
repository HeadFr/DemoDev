console.log("Console is ok !");
console.log("JS chargé");
var nbClic = 0;
$(".hide").hide();

$(document).ready(function(){
    $("#bouton").click(function(){
    	nbClic++;
        $(".show"+nbClic).show(150);
    });
});
