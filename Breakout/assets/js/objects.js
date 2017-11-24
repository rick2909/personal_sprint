class object{

	constructor(posX, posY, speedX, speedY, width, height, name, color, alive = true){
		this.xPos = posX;
		this.yPos = posY;
		this.speedX = speedX;
		this.speedY = speedY;
		this.width = width;
		this.height = height;
		this.name = name;
		this.color = color;
		this.alive = alive;
	}

	update(){
		this.xPos += this.speedX;
		this.yPos += this.speedY;
	}

	changeDirection(direction){
		if (direction === 'X'){
			this.speedX = -this.speedX;
		}
		else if (direction === 'Y'){
			this.speedY = -this.speedY;
		}
	}

	draw(){
		ctx.fillStyle = this.color;
		ctx.fillRect(this.xPos, this.yPos, this.width, this.height);
	}
}
