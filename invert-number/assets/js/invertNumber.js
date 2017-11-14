function invertNumber()
{
	//get number out inputfield
	var input = document.getElementById("number").value;
	//make it a string
	var string = input.toString();
	//split the string
	var invert = string.split("");
	//reverse array the array order
	var reversed = invert.reverse();
	//joins the reversed array to one string again
	var joined = reversed.join("");
	//makes it a number again
	var number = Number(joined);
	//write it
	document.getElementById("answer").innerHTML = number;
}