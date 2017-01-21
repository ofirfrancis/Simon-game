var colours = ["blue","red","yellow","green"];
var random = [];
var clicked = [];
function start(){
	random = [];
	clicked = [];
	document.getElementById("clicked").innerHTML = clicked;
	for(i = 0; i < 3; i++){
		random.push(colours[Math.floor(Math.random() * colours.length)]);
	}
	document.getElementById("randomcolour").innerHTML = random;
	/*for (id of random) {
		flash(id);
		sleep(3000)
	}
	*/
	
	flash(random[0]);	
	setTimeout(secondChange, 1500);
	setTimeout(thirdChange, 3000);
	
	for(i = 0;i < random.length; i++){
		button = document.getElementById(random[i]);
		setTimeout(flash(button), 500);
		console.log("hello");
	}
}
function flash(button){
	button.style.backgroundColor = "white";
	setTimeout(function() {
		button.style.backgroundColor = button.getAttribute("id");
	},1000);
	
}
//document.getElementById("start").addEventListener("click",start);
function secondChange(){
	flash(random[1])
}
function thirdChange(){
	flash(random[2])
}

function blue(){
	clicked.push("blue");
	document.getElementById("clicked").innerHTML = clicked;
	check()
}

function red(){
	clicked.push("red");
	document.getElementById("clicked").innerHTML = clicked;
	check();
}

function yellow(){
	clicked.push("yellow");
	document.getElementById("clicked").innerHTML = clicked;
	check()
}

function green(){
	clicked.push("green");
	document.getElementById("clicked").innerHTML = clicked;
	check()
}

function check(){
	if (clicked[clicked.length - 1] == random[clicked.length - 1]){
		console.log("great")
	}else{
		console.log("fail")
	}
}

function sleep(delay) {
        var start = new Date().getTime();
        while (new Date().getTime() < start + delay);
      }