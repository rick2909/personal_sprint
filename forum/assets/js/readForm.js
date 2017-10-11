function formVersion(){
	var text;
	var nameValue = document.getElementById("name").value;
	var answerDiv = document.getElementById("answer");
	if (nameValue == null || nameValue == "") {
		text = "You have to fill this in";
	} else {
		text = "Hello " + nameValue + "!";
	}
	answerDiv.innerHTML = text;
}