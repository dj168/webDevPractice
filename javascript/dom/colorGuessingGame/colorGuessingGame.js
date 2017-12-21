var bottomSquares = document.querySelectorAll("#bottom");
var restartGame = document.querySelector("#restartButton")
var squares = document.querySelectorAll(".square");
var rgbSpan = document.querySelector("#rgbSpan");
var isCorrectSpan = document.querySelector("#isCorrectSpan")
var h1 = document.querySelectorAll("h1");
var modeButtons = document.querySelectorAll(".mode")

var colors = [];
var pickedColor;
var numSquares = 6;


init();

function init() {
	modeButtonListeners();
	setupSquares();
	reset();
}


function modeButtonListeners() {
	for (var i = 0; i < modeButtons.length; i++) {
	modeButtons[i].addEventListener("click", function() {
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");
		this.textContent === "EASY" ? numSquares = 3 : numSquares = 6;
		reset();
	})
	}
}

function setupSquares() {
	squares.forEach(function(curr,index) {
		//add click listeners to squares
		curr.addEventListener("click", function() {
			//grab color of clicked square
			var colorOfClicked = this.style.backgroundColor;


			if (colorOfClicked == pickedColor) {
				h1.forEach(function(curr) {
					curr.style.backgroundColor = pickedColor;
				})
				isCorrectSpan.textContent = "Correct!";
				squares.forEach(function(curr) {
					curr.style.backgroundColor = pickedColor;
				})
				restartGame.textContent = "Play Again?"
			}

			else {
				isCorrectSpan.textContent = "Try Again!"
				this.style.backgroundColor = "#232323";
			}
			})
		})
}


function reset() {
	h1.forEach(function(curr) {
		curr.style.backgroundColor = "steelblue";
			})
	restartGame.textContent = "NEW COLORS"
	colors = populateArray(numSquares);
	pickedColor = pickColor();
	rgbSpan.textContent = "RGB" + pickedColor.slice(3)
	isCorrectSpan.textContent = "";
	//add initial colors to squares
	changeSquareColors();


}

restartGame.addEventListener("click", function() {
	reset();
})

function populateArray(numTimes) {
	var colors = [];
	for (i = 0; i < numTimes; i++) {
		colors.push(randomColor())
	}
	return colors;
}

function changeSquareColors() {
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block"
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
}


function pickColor() {
	var random = Math.floor(Math.random() * colors.length)
	return colors[random];
}

function randomColor() {
	var num1 = Math.floor(Math.random() * 256)
	var num2 = Math.floor(Math.random() * 256)
	var num3 = Math.floor(Math.random() * 256)
	return "rgb(" + num1 + ", " + num2 + ", " + num3 + ")"

}
