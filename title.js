if(document.addEventListener){
	document.addEventListener("DOMContentLoaded", function(){
		loaded();
	});
} else if(document.attachEvent){
	document.attachEvent("onreadystatechange", function(){
		loaded();
	});
}

function loaded(){
	
	setInterval(loop, 500);

}

var x = 0;

var titleText = [ "ㅤ", "emiliya", "ㅤ", "e", "em", "emi", "emil", "emili", "ㅤ", "emiliy", "emiliya", "EMILIYA ", "emiliya", "EMILIYA ", "emiliya",  "EMILIYA", "emiliya", "emiliy"," emili", "emil", "emi", "em", "e", "" ];

function loop(){

	document.getElementsByTagName("title")[0].innerHTML = titleText[x++%titleText.length];

}