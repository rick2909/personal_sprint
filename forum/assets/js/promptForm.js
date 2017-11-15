document.addEventListener("DOMContentLoaded", function(event) { 
	var text;
	var answerDiv = document.getElementById("answer");
	var name = prompt("Please enter your name here:");
	var city = prompt("The country you live in:");
	var country = prompt("The country you live in:");

	text = "Hello " + name + "<br> lives in: " + city + " in:" + country + "!";

	answerDiv.innerHTML = text;
});