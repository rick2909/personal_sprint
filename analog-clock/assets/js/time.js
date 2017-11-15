const SEC_CONTAINER = document.getElementById('seconds--container');
const MIN_CONTAINER = document.getElementById('minutes--container');
const HOUR_CONTAINER = document.getElementById('hours--container');

function start() {
	drawtime();
	setInterval(drawSeconds, 1000);
	quotes();
	//setInterval(drawHours, 10);
}

function drawtime(){
	let date = new Date();
	let seconds = date.getSeconds();
	let minutes = date.getMinutes();
	let hours = date.getHours();

	hours = hours % 12;
	hourAngle = 360 / 12 * hours;
	secondAngle = 360 / 60 * seconds;
	minuteAngle = 360 / 60 * minutes;

	MIN_CONTAINER.style.transform = 'rotate('+minuteAngle+'deg)';
	SEC_CONTAINER.style.transform = 'rotate('+secondAngle+'deg)';
	HOUR_CONTAINER.style.transform = 'rotate('+hourAngle+'deg)';
}

function drawSeconds(){
	let date = new Date();
	let seconds = date.getSeconds();

	secondAngle += 6;

	SEC_CONTAINER.style.transform = 'rotate(' + secondAngle + 'deg)';

	if(seconds === 0){
		drawMinutes();
	}
}

function drawMinutes(){
	let date = new Date();
	let minutes = date.getMinutes();

	minuteAngle += 6;

	MIN_CONTAINER.style.transform = 'rotate(' + minuteAngle + 'deg)';

	if(minutes === 0){
		drawHours();
		quotes();
	}
	if(minutes === 30){
		quotes();
	}
}

function drawHours(){
	hourAngle += 30;

	HOUR_CONTAINER.style.transform = 'rotate(' + hourAngle + 'deg)';
}
