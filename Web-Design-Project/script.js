// credit: https://blog.kritikapattalam.com/build-a-random-quote-generator-using-javascript
// this was helpful in creating an array where two unique components are paired (review and customer) and loaded into different elements
// so that the review was in one column and the customer was in the other column.
// reloading the page will give a new review. 

  let custReviews=[
   "We love our custom sandalwood lampstand. And the service we received was excellent.",

   "Jonas was very helpful in organising delivery of my velvet sofa. I live on the 31st floor of a modest apartment building but this was no problem for the logistics team. And now that I have it, it looks great.",

   "At first I was hesitant as the company was not in business long. But Beatrice was very reassuring and spared no effort in sourcing a hypoallergenic rug for my cat.",

   "The rug really tied the room together."
   ]

   let custName=[ //the list of customer names in order matching their review.
   "- Sammy and Jane, January 2022",
   "- Steve, March 2022",
   "- Brenda, March 2022",
   "- The Dude, April 2022 "

   ]

console.log(custReviews[0]); //a test that I ran to verify the array in console.

    
  x=Math.floor(Math.random()*4)   //innerText instead of innerHTML to avoid XSS vulnaerabilities: see https://cheatsheetseries.owasp.org/cheatsheets/AJAX_Security_Cheat_Sheet.html#use-innertext-instead-of-innerhtml
    document.getElementById("rndreview").innerText = custReviews[x]; 

    document.getElementById("rndcust").innerText = custName[x];
  
  

// credit: https://www.learnwithjason.dev/blog/get-form-values-as-json 
// this was useful for organising the data


function handleSubmit(event) {
  event.preventDefault();    //stops the default action of submit in order to process like below

  const data = new FormData(event.target);
  const fname = data.get('fname');
  console.log({ fname }); //logs the input text value to console, as below

  const email = data.get('email');
  console.log({ email });

  const number = data.get('number');
  console.log({ number });

  const message = data.get('message');
  console.log({ message });

  const news = data.get('news');
  console.log({ news });  //logs if the news item is true or not

// this line is included as a sort of GDPR-type safegaurd, to not use the supplied information for means other that
// addressing the customer query. The details are passed to console. This shows the data could potentially be transformed
// to be written to a CRM or marketing database

  if(news==null){
alert("Thanks for your interest. We won't use your details for news and offers but we will be in touch about your specific query.");
} // alerts if the user did not check the news box
else {
  alert("Thanks for your interest. We will be in touch about your query and also send nice things to your email!")
} // alerts if the user did check the news box

}

const form = document.querySelector('form');
form.addEventListener('submit', handleSubmit);



/* SCRIPT.JS from Beatrice folder */

//A variable to use in the onclick resizing was created
var image_tracker='small';

function resize_1(){  //A function called resize_1 for the first picture in the gallery was created. The function works once the
					// the picture is clicked
	var image=document.getElementById('image-1'); //A variable equal to the first image of the gallery was created using
												  //the image's ID
	if(image_tracker=='small'){ //An if statement that determines which onclick event is being used
								// If the picture is in it's small form at the moment it is clicked it performs
								// the following actions
		image.style.width='750px'; // The pictures width is increased to 750 px
		image.style.height='650px'; // The pictures height is increased to 650 px
		image_tracker='big'; // The variable is set to being 'big'
	}
	else{ //If the picture is already big when clicked the else stament takes place
		image.style.width='300px'; //The image width is reduced to 300 px
		image.style.height='250px'; // The image height is reduced to 250 px
		image_tracker='small'; // The variable is set to being 'small again'
	}
} //The function repeats itself everytime it is clicked
 //The js code was written using logic of a code found online and is referenced in the references section of the report as [2]

//The rest of the code followed the same pattern for the rest of the pictures in the gallery

function resize_2(){
	var image=document.getElementById('image-2');
	if(image_tracker=='small'){
		image.style.width='750px';
		image.style.height='650px';
		image_tracker='big';
	}
	else{
		image.style.width='300px';
		image.style.height='250px';
		image_tracker='small';
	}
}

function resize_3(){
	var image=document.getElementById('image-3');
	if(image_tracker=='small'){
		image.style.width='750px';
		image.style.height='650px';
		image_tracker='big';
	}
	else{
		image.style.width='300px';
		image.style.height='250px';
		image_tracker='small';
	}
}

function resize_4(){
	var image=document.getElementById('image-4');
	if(image_tracker=='small'){
		image.style.width='750px';
		image.style.height='650px';
		image_tracker='big';
	}
	else{
		image.style.width='300px';
		image.style.height='250px';
		image_tracker='small';
	}
}

function resize_5(){
	var image=document.getElementById('image-5');
	if(image_tracker=='small'){
		image.style.width='750px';
		image.style.height='650px';
		image_tracker='big';
	}
	else{
		image.style.width='300px';
		image.style.height='250px';
		image_tracker='small';
	}
}

function resize_6(){
	var image=document.getElementById('image-6');
	if(image_tracker=='small'){
		image.style.width='750px';
		image.style.height='650px';
		image_tracker='big';
	}
	else{
		image.style.width='300px';
		image.style.height='250px';
		image_tracker='small';
	}
}
	