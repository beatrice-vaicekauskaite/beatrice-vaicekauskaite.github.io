function count(){
	for(i=99; i>=0; i=i-1){
		if(i==0){
			document.getElementById("main").innerHTML+="No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.";
		}
		else if(i==1){
			document.getElementById("main").innerHTML+=i+" bottle of beer on the wall, "+i+" bottle of beer. Take one down and pass it around, no more bottles of beer on the wall."+"<br/>";
		}
		else{
			document.getElementById("main").innerHTML+=i+" bottles of beer on the wall, "+i+" bottles of beer. ";
			document.getElementById("main").innerHTML+="Take one down and pass it around, "+(i-1)+"  bottles of beer on the wall. "+"<br/>";
		}
	}
	hide();
}

function hide(){
	document.getElementById("button").style.visibility="hidden";
}
