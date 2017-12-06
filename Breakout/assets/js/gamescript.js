const CANVAS = document.getElementById('canvas');
const PLAYER = new object(300, 550, 0, 0, 150, 15, 'player', '#00FF00');
const BAL= new object(300, 500, Math.floor(Math.random() * 3) + 1, Math.floor(Math.random() * 3) + 1, 10, 10, 'bal', '#FF69B4');
const PLAYERSPEED = 3;
const BLOCKROWS = 10;
const BLOCKCOLLUMS = 20;
const AI = false;
const MAX_SCORE = 2000;
const FPS = 60;
const BLOCKS = [];
const KEY_OBJECTS = new Array(255);

let score = 0;
let handle = 0;
let pauze = false;

function start(){
	init();
	score = 0;
	handle = setInterval(update, 1000 / FPS);
}

function stop(){
	clearInterval(handle);
	handle = 0;
}

function init(){
	CANVAS.width = 800;
	CANVAS.height = 600;
	ctx = CANVAS.getContext('2d');
	ctx.clearRect(0, 0, 800, 600);

	//set all keys on false
	for (let i = 0; i < KEY_OBJECTS.length; i++){
		KEY_OBJECTS[i] = false;
	}

	//set pressed key on true
	document.addEventListener('keydown', keyDown, false);
	function keyDown(event) {
		KEY_OBJECTS[event.keyCode] = true;
	}
	//set released key on false
	document.addEventListener('keyup', keyUp, false);
	function keyUp(event) {
		KEY_OBJECTS[event.keyCode] = false;
	}

	//pauze
	document.addEventListener('keypress', pauzeGame);

	function pauzeGame(event){
		keycode = event.keyCode;
		if(keycode == 112){
			if(!pauze){
				stop();
				pauze = true;
			}else if(pauze){
				pauze = false;
				handle = setInterval(update, 1000 / FPS);
			}
		}
	}

	//greate blocks
	for(let i = 0; i < BLOCKROWS; i++){
		BLOCKS[i] = [];
		for(let j = 0; j < BLOCKCOLLUMS; j++){
			let block = new object (i * 80 + 5, j * 20 + 5, 0, 0, 70, 15, 'block' + i + j, randomColor(), true);
			BLOCKS[i][j] = block
		}
	}
}

function update() {
	if (PLAYER.xPos >= 650){
		PLAYER.xPos = 649;
	}
	else if(PLAYER.xPos <= 0){
		PLAYER.xPos = 1;
	}
	if (PLAYER.xPos < 650 && PLAYER.xPos > 0){
		move();
	}

	PLAYER.update();
	BAL.update();
	draw();
	collisions();
	if(score >= MAX_SCORE){
		endGame(true);
	}
}

function draw() {
	ctx.clearRect(0, 0, 800, 600)
	PLAYER.draw();
	BAL.draw();

	for(let i = 0; i < BLOCKROWS; i++){
		for(let j = 0; j < BLOCKCOLLUMS; j++){
			if(BLOCKS[i][j].alive){
				BLOCKS[i][j].draw();
			}
		}
	}
}

function move(){
	//ai
	if (AI == true){
		PLAYER.xPos = BAL.xPos - PLAYER.width / 2;
	}
	if(KEY_OBJECTS[37] == true || KEY_OBJECTS[65] == true){
		PLAYER.xPos += -PLAYERSPEED;
	}
	if(KEY_OBJECTS[39] == true || KEY_OBJECTS[68] == true){
		PLAYER.xPos += PLAYERSPEED;
	}
}

function collisions(){
	//PADLE
	if( BAL.xPos + BAL.width >= PLAYER.xPos && BAL.xPos <= PLAYER.xPos + PLAYER.width && BAL.yPos > 540 && BAL.yPos < 545 ) {
		BAL.changeDirection('Y');
	}
	if( BAL.xPos + BAL.width >= PLAYER.xPos && BAL.xPos <= PLAYER.xPos && BAL.yPos > 540 && BAL.yPos < 545 ) {
		if( BAL.speedX > 0){
			BAL.changeDirection('X');
		}
	}
	if(BAL.xPos <= PLAYER.xPos + PLAYER.width && BAL.xPos + BAL.width >= PLAYER.xPos + PLAYER.width && BAL.yPos > 540 && BAL.yPos < 545) {
		if( BAL.speedX < 0){
			BAL.changeDirection('X');
		}
	}

	//canvas
	if(BAL.xPos > 790 || BAL.xPos < 0){
		BAL.changeDirection('X');
	}
	if(BAL.yPos > 590 || BAL.yPos < 0){
		BAL.changeDirection('Y');
	}

	if(BAL.yPos > CANVAS.height - 10){
		endGame(false)
	}

	//blocks
	for(let i = 0; i < BLOCKROWS; i++){
		for(let j = 0; j < BLOCKCOLLUMS; j++){
			block = BLOCKS[i][j]
			if(block.alive){
				if( BAL.xPos + BAL.height > block.xPos && BAL.xPos < block.xPos + block.width
					&& BAL.yPos < block.yPos + block.height && BAL.yPos + BAL.height > block.yPos ) 
					{
					BAL.changeDirection('Y');
					block.alive = false;
					score += 10;
				}
			}
		}
	}
}

function endGame(state){
	if(state){
		stop();
		ctx.clearRect(0, 0, 800, 600);
		ctx.fillStyle = `green`;
		ctx.font = 'bold 60px Arial';
		ctx.textAlign = "center";
		ctx.fillText('YOU WON!!', CANVAS.width/2, CANVAS.height/2);
	}else{
		stop();
		ctx.clearRect(0, 0, 800, 600);
		ctx.fillStyle = `red`;
		ctx.font = 'bold 60px Arial';
		ctx.textAlign = "center";
		ctx.fillText('Game over!', CANVAS.width/2, CANVAS.height/2);
	}
}
