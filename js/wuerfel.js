//Hinzufügen von 'Eventlisteners' beim Seitenstart
function init() {
	document.getElementById('rollButton').addEventListener("touchstart", rollDice2);
	document.getElementById('rollButton').addEventListener("click", rollDice2);
}

//Einfache Würfelfunktion
function rollDice1() {
	document.getElementById('dice').innerHTML = Math.ceil(Math.random()*6);
}

//Mit Hilfe von 'setInterval' soll die Funktion 'animDice' mehrmals hintereinander (mit einer kurzen Pause) ausgeführt werden.
function rollDice2() {	

	document.getElementById('rollButton').removeEventListener('click', rollDice2);
	document.getElementById('rollButton').removeEventListener('touchstart', rollDice2);

	var x = 0;
	var repeatedFunction = function() {
		x++;
		document.getElementById('dice').innerHTML= Math.ceil(Math.random()*6);
		if (x == 10) {
			clearInterval(timer);
			document.getElementById('dice').innerHTML = Math.ceil(Math.random()*6);
			
		}
	}
	timer = setInterval(repeatedFunction, 100);
	
	document.getElementById('rollButton').addEventListener("touchstart", rollDice2);
	document.getElementById('rollButton').addEventListener("click", rollDice2);
}

//(optional) Würfel SVG-Grafiken
/*
var num1 = '<circle cx="200" cy="200" r="40" fill="black"/>';
var num2 = '<circle cx="100" cy="100" r="40" fill="black"/><circle cx="300" cy="300" r="40" fill="black"/>';
var num3 = num1 + num2;
var num4 = num2 + '<circle cx="100" cy="300" r="40" fill="black"/><circle cx="300" cy="100" r="40" fill="black"/>';
var num5 = num4 + num1;
var num6 = num4 + '<circle cx="100" cy="200" r="40" fill="black"/><circle cx="300" cy="200" r="40" fill="black"/>';
var diceSVG = [num1, num2, num3, num4, num5, num6];
*/