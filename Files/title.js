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
	
	setInterval(loop, 50);

}

var x = 0;

var titleText = [ "|",
					"O|",
					"O |",
					"O U|",
					"O U |",
					"O U T|",
					"O U T |",
					"O U T E|",
					"O U T E |",
					"O U T E R|",
					"O U T E R |",
					"-|",
					"S|",
					"S |",
					"S P|",
					"S P |",
					"S P A|",
					"S P A |",
		 			"S P A C|",
					"S P A C |",
					"S P A C E|",
					"S P A C E |",
function loop(){

	document.getElementsByTagName("title")[0].innerHTML = titleText[x++%titleText.length];

}
