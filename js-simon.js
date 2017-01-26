var colours = ["blue","red","yellow","green"];
var random = [];
var clicked = [];
var numOfButtons = 3;
var x = 0;
var soundRed = new Audio("http://www.kellyking.me/projects/simon/sounds/1.mp3");
var soundBlue = new Audio("http://www.kellyking.me/projects/simon/sounds/2.mp3");
var soundYellow = new Audio("http://www.kellyking.me/projects/simon/sounds/3.mp3");
var soundGreen = new Audio("http://www.kellyking.me/projects/simon/sounds/4.mp3");
function start(){
	random = [];
	clicked = [];
	document.getElementById("clicked").innerHTML = clicked;
	for(i = 0; i < numOfButtons; i++){
		random.push(colours[Math.floor(Math.random() * colours.length)]);
	}
	document.getElementById("randomcolour").innerHTML = random;
	x = 0;
	callFlash()
}
function flash(button){
	button.style.backgroundColor = "white";
	/*if (button = "red") {
		soundRed.play;
	}else if (button = "blue") {
		soundBlue.play;
	}else if (button = "yellow") {
		soundYellow.play;
	}else if (button = "green") {
		soundGreen.play;
	}*/
	setTimeout(function() {
		button.style.backgroundColor = button.getAttribute("id");
	},300);
	
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
	}, 800);
	
	
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