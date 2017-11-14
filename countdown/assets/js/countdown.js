var background = document.getElementById('background');
var secspan = document.getElementById('sec');
var minspan = document.getElementById('min');

var seconds  = 0;
var minutes = 0;

var interval;

//start
function start(){
	//remove class from prevous run.
	background.classList.remove("done");

	seconds = prompt("Seconds:");
	minutes = prompt("Minutes:");

	//if seconds are higher then 60 calculate it so everything above 60 is added to minutes
	if(seconds > 60){
		min = Math.floor(seconds / 60);
		seconds = seconds % 60;
		minutes = minutes + min;
	}

	//place values direcly in the span
	secspan.innerHTML = seconds;
	minspan.innerHTML = minutes;

	clearInterval(interval);
	//do seconds funtion after each 1000ms
	interval = setInterval(second, 1000);
}
//remove seconds
function second(){
	seconds--;

	//if min and sec are 0
	if(seconds <= 0 && minutes <= 0){
		background.classList.add("done");
		background.classList.remove("almost");
		seconds = 00;
		secspan.innerHTML = seconds;
		clearInterval(interval);
		Return;
	}

	//done one min
	if(seconds == 0){
		minute();
		seconds = 60;
	}

	//place it
	secspan.innerHTML = seconds;
}
//remove minutes
function minute(){
	minutes--;

	if(minutes == 0){
		background.classList.add("almost");
	}

	//place it
	minspan.innerHTML = minutes;
}
