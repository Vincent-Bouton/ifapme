const startBtn = document.querySelector('#startButton');
const pipeContainer = document.querySelector('.pipe-container');

startBtn.addEventListener('click', () => {
	startBtn.style.display = 'none';

	function stopGame(){
		alert('Game Over');
		pipeContainer.innerHTML = '';
	}
	let top = -70;

	setInterval(() => {
		const minusOrPlus = Math.random() > 0.5;
		const translateY = Math.floor(Math.random() * 50);
		top = minusOrPlus ? top - translateY : top + translateY;
		top < -70 ? top = -70 : top;
		top > -20 ? top = -20  : top;
		const pipe = `
			<div class="pipe" style="top:${top}vh">
				<div class="up"></div>
				<div class="down"></div>
			</div>
		`;

		pipeContainer.insertAdjacentHTML('beforeend', pipe);
	}, 2000)

	const bird = document.querySelector('#bird');
	let isJumping = false;
	function fall(){
		console.log('fall');
		position += 5;
		bird.style.top = `${position}px`;
	}

	setInterval(() => {
		if(!isJumping){
			fall();
		}
	}, 10)

	document.addEventListener('keydown', jump);
	document.addEventListener('touchstart', jump);

	let position = 0;

	function jump(){
		console.log('jump');
		let count = 0;

		isJumping = true;


		let upInterval = setInterval(() => {
			if(count >= 15){
				clearInterval(upInterval);
				isJumping = false;
				count = 0;
			}
			position -= 5;
			count++;
			bird.style.top = `${position}px`;
		}, 10)


	}





})

function stopGame(){
		alert('Game Over');
}

