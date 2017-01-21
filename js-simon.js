var colours = ["blue","red","yellow","green"];
var random = [];
var clicked = [];
var numOfButtons = 3;
var x = 0
function start(){
	random = [];
	clicked = [];
	document.getElementById("clicked").innerHTML = clicked;
	for(i = 0; i < numOfButtons; i++){
		random.push(colours[Math.floor(Math.random() * colours.length)]);
	}
	document.getElementById("randomcolour").innerHTML = random;
	callFlash()
}
function flash(button){
	button.style.backgroundColor = "white";
	setTimeout(function() {
		button.style.backgroundColor = button.getAttribute("id");
	},500);
	
}


function addToClicked(buttonId){
	clicked.push(buttonId);
	document.getElementById(buttonId).style.backgroundColor = "white";
	setTimeout(function() {
		document.getElementById(buttonId).style.backgroundColor = buttonId;
	},200);
	document.getElementById("clicked").innerHTML = clicked;
	check()
}


function check(){
	if (clicked[clicked.length - 1] == random[clicked.length - 1]){
		console.log("great");
		if (clicked.length == random.length) {
			nextLevel();
		}
	}else{
		console.log("fail")
	}
}

function nextLevel() {
	random.push(colours[Math.floor(Math.random() * colours.length)]);
	clicked = [];
	x = 0;
	callFlash();
}

function sleep(delay) {
        var start = new Date().getTime();
        while (new Date().getTime() < start + delay);
      }

function callFlash(){
	setTimeout(function() {
		if (x < random.length){
			button = document.getElementById(random[x]);
			flash(button);
			x++;
			callFlash()
		}
	}, 1500);
	
	
		/*
	flash(random[0]);	
	setTimeout(secondChange, 1500);
	setTimeout(thirdChange, 3000);
	
	for(i = 0;i < numOfButtons; i++){
		button = document.getElementById(random[i]);
		setTimeout(flash(button), 500);
		console.log("hello");
	}*/
}