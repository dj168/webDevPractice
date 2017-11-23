var p1Counter = 0;
var p2Counter = 0;

var scoreLimit = document.querySelector("#scoreLimit");
var scoreLimitSpan = document.querySelector("#scoreLimitSpan");

var winningScore = 5;

var p1span = document.querySelector("#p1span");
var p2span = document.querySelector("#p2span");

var gameOver = false;


var p1 = document.querySelector("#p1");
p1.addEventListener("click", function() {
	if (!gameOver) {
		p1Counter++;
		p1span.textContent = p1Counter;
		if (p1Counter === winningScore) {
			p1span.classList.add("winner");
			gameOver = true;
		} 
	}
	
	
});

var p2 = document.querySelector("#p2");
p2.addEventListener("click", function() {
	if (!gameOver) {
		p2Counter++;
		p2span.textContent = p2Counter;
		if (p2Counter === winningScore) {
			p2span.classList.add("winner");
			gameOver = true;
		} 
	}
});

var resetButton = document.querySelector("#reset");
resetButton.addEventListener("click", reset)

scoreLimit.addEventListener("change", function() {
	scoreLimitSpan.textContent = this.value;
	winningScore = Number(this.value);
	reset();
})

function reset() {
	p1Counter = 0;
	p2Counter = 0;
	p1span.textContent = p1Counter;
	p2span.textContent = p2Counter;
	p1span.classList.remove("winner");
	p2span.classList.remove("winner");
	gameOver = false;
}