class circle{
	constructor({
		position,
		radius = 10,
		color = 'black'
	}){
		this.position = position
		this.radius = radius
		this.color = color
	}


	draw(){
		drawArc(this.position.x,this.position.y,this.radius,this.color)
	}
}


class hole extends circle{
	constructor({
		position,
		radius = 10,
		color = 'black'
	}){
		super({position,radius,color})
	}
}


class ball extends circle{
	constructor({
		position,
		radius = 10,
		color = 'white',
		solid = true,
		holes
	}){
		super({position,radius,color})
		this.solid = solid
		this.holes = holes
		if (!this.solid) {
			this.stripedColor = color
			this.color = 'white'
		}
		this.velocity = {
			x:0, //Math.floor(Math.random()*100)+1
			y:0//Math.floor(Math.random()*100)	+1
		}
		this.alive = true
	}
	
	isCollidingTable(){
		if (this.position.x+this.radius>=canvas.width || this.position.x-this.radius<= 0){
			this.velocity.x = this.velocity.x*(-1)
		}
		if (this.position.y+this.radius>=canvas.height || this.position.y-this.radius<= 0){
			this.velocity.y = this.velocity.y*(-1)
		}
	}
	
	applyFriction(){
		if (this.velocity.y > 0){this.velocity.y -= Math.floor(uK*Math.random())}
		if (this.velocity.x > 0){this.velocity.x -= Math.floor(uK*Math.random())}
		if (this.velocity.y < 0){this.velocity.y += Math.floor(uK*Math.random())}
		if (this.velocity.x < 0){this.velocity.x += Math.floor(uK*Math.random())}
	}
	
	track(object){
		const distX = this.position.x-object.position.x
		const distY = this.position.y-object.position.y
		const theta = Math.atan2(distX,distY)
		const speed = 10
	
		this.velocity.x += speed * Math.cos(theta)
		this.velocity.y += speed * Math.sin(theta)
	}

	update(){
		this.draw()
		if (!this.solid){
        		// Draw stripes
        		c.beginPath();
        		c.strokeStyle = this.stripedColor;
        		c.lineWidth = 25;
        		c.moveTo(this.position.x, this.position.y - this.radius);
        		c.lineTo(this.position.x, this.position.y + this.radius);
        		c.stroke();
			}

		
		this.position.x += this.velocity.x
		this.position.y += this.velocity.y

		//bounce off table
		this.isCollidingTable()
		//this.applyFriction()
		//Are falling in?
		for (let j = 0; j<holes.length;j++){
			const hole = holes[j]
			if (areCirclesColliding(this, hole)){
				console.log(`${this.color} fell in`)
				this.alive = false;
				break;
			}
		}
	}
}
