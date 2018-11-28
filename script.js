function  playSound() {
  var mySound = document.getElementById("sound");
  mySound.play();
  var currentPoints = document.getElementById("points");
  currentPoints.innerHTML = parseInt(currentPoints.innerHTML) + 1;

}

function moveBall() {
	var myBall = document.getElementById("ball");
		var newTop = Math.floor((Math.random() * -600) + 20);
	
	myBall.style.top = newTop + "px";
	myBall.style.left = (Math.floor((Math.random() * 1000) + 1)) + "px";
}

setInterval(moveBall, 1000);