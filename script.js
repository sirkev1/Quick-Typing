

// Dom elements 

const word = document.querySelector("#word");
const userTypes = document.querySelector("#usertypes");
const gameStatus = document.querySelector("#gamestatus");
const timer = document.querySelector("#timer");
const scorer = document.querySelector("#scorer");
const totalSecs = document.querySelector("#numsecs");


// global variables

let time = 5;
let score = 0;



// Array with games words 

const words = ["forgetful", "together", "cricket", "information", "entrance", "referee", "yesterday", "hello", "mansion", "arkinbhudda"];

function showWord () {
	
	let random = Math.floor(Math.random() * words.length); // i want to call this function later so i will name it something to call later
	word.innerHTML = words[random];
	
}
 
showWord();  // if the above funciton were anon i wouldnt be able to call it and i want to call it immedaitely when the page loads and also later in the another function



function countdown ()  {

	if (time>0) {
	time--; 
	}
	
	timer.innerHTML = "time left: " + time;
	setTimeout(countdown,1000);
    
}

countdown(); // i have called the function, again i need to name it because i am using the setTimeout inside it which requires a funciton name, so an anon funciton will be no good here again. I could also add an event listener to the window and call the function that way.

function checkStatus () { 

	if (time ==0) { 

		gameStatus.innerHTML = "Game Over!!!";
		score = 0;

	}
	        
		setTimeout (checkStatus, 50);
}
checkStatus (); // agian an anon funciton is no good here because i need to reference it in the setTimeout callback function function 

	 userTypes.addEventListener('input', function () {
	 
	if (userTypes.value == word.innerHTML) {
		 
		score++;
		gameStatus.innerHTML = "correct";
		showWord();
		userTypes.value="";
		time = 6;
	 
    }
		
		scorer.innerHTML = "score " + score;
	 
})
	   
	
	
	// i dont need to reference this function anywhere so whilst i dont have to , i used an anon funciton .
	





	