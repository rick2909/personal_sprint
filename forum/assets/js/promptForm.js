function promptVersion() {
	var text;
	var answerDiv = document.getElementById("answer");
	var name = prompt("Please enter your name here:");
	if (name == null || name == "") {
		text = "WHY you cancel it?";
	} else {
		text = "Hello " + name + "!";
	}
	answerDiv.innerHTML = text;
}