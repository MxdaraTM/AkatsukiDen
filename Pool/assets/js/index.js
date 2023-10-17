const canvas = document.querySelector('canvas')
canvas.width = 1280
canvas.height = 720
const c = canvas.getContext('2d')

ballSize = 30
holes = []

for (let k = 0; k<2; k++){
	for(let i=0; i<3; i++){
		holes.push(new hole({
			position : {
				x:(i)*(canvas.width/2),
				y:(k)*canvas.height
			},
			radius : 50,
			color : 'black'
			}
		))


	}
}

balls = []
icount = -1
//SOLID BALLS
for (let k = 0; k<2; k++){
	for(let i=0; i<3; i++){
		icount ++
		balls.push(new ball({
			position : {
				x:80+(i)*80,
				y:200+(k)*80
			},
			radius : ballSize ,
			holes,
			color : colors[icount],
			solid : true
			}
		))


	}
}

icount = -1
//STRIPED BALLS
for (let k = 0; k<2; k++){
	for(let i=0; i<3; i++){
		icount ++
		balls.push(new ball({
			position : {
				x:80+(i)*80,
				y:370+(k)*80
			},
			radius : ballSize,
			holes,
			color : colors[icount],
			solid : false
			}
		))


	}
}

whiteBall = new ball({


			position : {
				x:950,
				y:350
			},
			radius : 40,
			color : 'white'

})

balls.push(whiteBall)

function animate(){
	window.requestAnimationFrame(animate)
	drawRect(0,0,canvas.width,canvas.height,"rgb(50, 205, 50)")
	holes.forEach((hole) => {
		hole.draw()
	})
	for (let b = balls.length-1; b>=0;b--){
		const ball = balls[b]
		if (!ball.alive){
				balls.splice(b,1)
			}
		ball.update()
	}
}
animate()

mouse = {position :{
	x:0,
	y:0
}
}



window.addEventListener('mousedown',(event)=>{
	mouse.position.x = event.offsetX
	mouse.position.y = event.offsetY
	whiteBall.track(mouse)
	console.log(mouse.position)
})