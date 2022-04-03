function count(){
	var grades;
	var subjects;
	subjects=parseInt(prompt("How many subjects do you take?"));
	
	for(i=0; i<subjects; i=i+1){
		grades=parseInt(prompt("What grades did you get?"));
		grades++;
		document.getElementById("main").innerHTML+="Your grade is: "+(grades-1)+"<br/>";
	}
	hide();
}

function hide(){
	document.getElementById("button").style.visibility="hidden";
}
