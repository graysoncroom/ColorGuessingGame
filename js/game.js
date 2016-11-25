var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1= document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

function init(){
 setupModeButtons();
 setupResetButton();
 setupSquares();
 reset();
}

function setupModeButtons(){
	for(var i = 0; i < modeButtons.length; i++){
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
			reset();
		});
	}
}

function setupResetButton(){
	resetButton.addEventListener( "click", reset );
}

function setupSquares(){
	for(var i = 0; i < squares.length; i++){
		squares[i].addEventListener("click",function(){
			// set a variable for the square that was clicked's color
			var clickedColor = this.style.background;
			if(clickedColor === pickedColor){
				messageDisplay.textContent = "Correct!";
				changeColors(clickedColor);
				resetButton.textContent= "Play Again";
				h1.style.background = clickedColor;
			} else{
				// give the square the same color as background
				this.style.background = "#232323";
				// display message to loser "Try Again"
				messageDisplay.textContent = "Try Again";
			}
		});
	}
}

function reset(){
	colors = generateRandomColors(numSquares);
	//pick a new random color from array
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors"
	messageDisplay.textContent = "";
	//change colors of squares
	for(var i = 0; i < squares.length; i++ ){
		if(colors[i]){
			squares[i].style.display = "block"
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
	h1.style.background = "steelblue";
}

function changeColors(color){
	for(var i = 0; i < squares.length; i++){
		// set the square background to the color parameter
		squares[i].style.background = color;
	}
}

function pickColor(){
	var randomNumber = Math.floor(Math.random() * colors.length) ;
	return colors[randomNumber];
}

function generateRandomColors(num){
	// make an array
	var arr = [];
	for(var i = 0; i < num; i++){
		// get random rgb value set and push it onto the top of the array
		arr.push( randomColor() );
	}
	return arr;
}

function randomColor(){
	// pick a random red, green, and blue value from 0 to 255
	var redValue = Math.floor(Math.random() * 256);
	var greenValue = Math.floor(Math.random() * 256);
	var blueValue = Math.floor(Math.random() * 256);
	return "rgb(" + redValue + ", " + greenValue + ", " + blueValue +")";
 }

// run all the things!!!
init();
