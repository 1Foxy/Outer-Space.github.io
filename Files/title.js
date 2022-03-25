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
	
	setInterval(loop, 250);

}

var x = 0;

var titleText = [ "|",
					"A|",
					"A |",
					"A N|",
					"A N |",
					"A N T|",
					"A N T |",
					"A N T I|",
					"A N T I |",
					"A N T I G|",
					"A N T I G |",
					"A N T I G A|",
					"A N T I G A |",
					"A N T I G A N|",
					"A N T I G A N |",
					"A N T I G A N G|",
					"A N T I G A N G |"];
function loop(){

	document.getElementsByTagName("title")[0].innerHTML = titleText[x++%titleText.length];

}