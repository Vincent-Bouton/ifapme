const canvas = document.getElementById('canvas');
const button = document.getElementById('startButton');
let score = 0
let highScore = 0
let time = 10



const setHighScore = () => {
	if (score > highScore) {
		highScore = score;
		document.getElementById('bestScore').innerHTML = highScore;
	}
}



const startGame = () => {
	const targetSpawn = () => {
		console.log('targetSpawn');
		const x = Math.floor(Math.random() * 500);
		const y = Math.floor(Math.random() * 300) + 200;
		const target = document.createElement('div');
		target.classList.add('target');
		target.style.left = `${x}px`;
		target.style.top = `${y}px`;
		target.addEventListener('click', () => {
			score++;
			score.innerHTML = `${score}`;
			canvas.removeChild(target);
		});
		canvas.appendChild(target);
	}

	const stopGame = () => {
		clearInterval(setTargetSpawn);
		clearInterval(setTimer);
		setHighScore();
		time = 10;
		alert(`Game Over! Your score is ${score}`);
		score = 0;
		document.getElementById('score').innerHTML = score;
	}

	const resetGame = () => {
		stopGame();
		document.getElementById('time').innerHTML = time;
		document.getElementById('score').innerHTML = score;
	}

	const setTargetSpawn = setInterval(targetSpawn, 2000);

	const setTimer = setInterval(() => {
		if (time === 0) {
			clearInterval(setTargetSpawn);
			clearInterval(setTimer);
			setHighScore();
			time = 10;
			alert(`Game Over! Your score is ${score}`);
			score = 0;
			document.getElementById('score').innerHTML = score;
		}
		time--;
		document.getElementById('time').innerHTML = time;
	}, 1000);
}

button.addEventListener('click', () => {
	startGame();
});


