function biggestNumber(){
	//get numbers out inputfields
	var value1 = document.getElementById("value-1").value;
	var value2 = document.getElementById("value-2").value;
	var value3 = document.getElementById("value-3").value;
	var value4 = document.getElementById("value-4").value;
	var value5 = document.getElementById("value-5").value;
	//best version
	//var answer = Math.max(value1, value2, value3, value4, value5);

	if(value1 > value2 && value1 > value3 && value1 > value4 && value1 > value5){
		document.getElementById("answer").innerHTML = "the biggest number = " + value1;
	} 
	else if(value2 > value1 && value2 > value3 && value2 > value4 && value2 > value5){
		document.getElementById("answer").innerHTML = "the biggest number = " + value2;
	} 
	else if(value3 > value1 && value3 > value2 && value3 > value4 && value3 > value5){
		document.getElementById("answer").innerHTML = "the biggest number = " + value3;
	} 
	else if(value4 > value1 && value4 > value2 && value4 > value3 && value4 > value5){
		document.getElementById("answer").innerHTML = "the biggest number = " + value4;
	}else{
		document.getElementById("answer").innerHTML = "the biggest number = " + value5;
	}
}