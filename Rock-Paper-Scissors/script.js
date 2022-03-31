function check(){
	var answer1=parseInt(document.getElementById("player1").value);
	var answer2=parseInt(document.getElementById("player2").value);

	if(answer1==answer2){
		document.getElementById("game").innerHTML="It's a draw!";
		hide();
	}
	else if(answer1==1 && answer2==2){
		document.getElementById("game").innerHTML="Player 2 wins!";
		hide();
	}
	else if(answer1==1 && answer2==3){
		document.getElementById("game").innerHTML="Player 1 wins!";
		hide();
	}
	else if(answer1==2 && answer2==1){
		document.getElementById("game").innerHTML="Player 1 wins!";
		hide();
	}
	else if(answer1==2 && answer2==3){
		document.getElementById("game").innerHTML="Player 2 wins!";
		hide();
	}
	else if(answer1==3 && answer2==1){
		document.getElementById("game").innerHTML="Player 2 wins!";
		hide();
	}
	else if(answer1==3 && answer2==2){
		document.getElementById("game").innerHTML="Player 1 wins!";
		hide();
	}
	else{
		alert("Invalid input, try again!");
	}
}

function hide(){
	document.getElementById("button").style.visibility="hidden";
}

