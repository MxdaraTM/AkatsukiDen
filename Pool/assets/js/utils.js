function drawRect(x=0,y=0,w=1256,h=576,co='green'){
	c.fillStyle = co
	c.fillRect(x,y,w,h)
}

function drawArc(x=0,y=0,r=10,co='black'){
	c.beginPath()
	c.arc(x,y,r,0,2*Math.PI)
	c.fillStyle = co
	c.fill()
	c.closePath()
}

function areCirclesColliding(circle1, circle2) {
    const dx = circle1.position.x - circle2.position.x;
    const dy = circle1.position.y - circle2.position.y;
    const distance = Math.sqrt(dx * dx + dy * dy);

    // If the distance between the centers of the two circles is less than the sum of their radii, they have collided.
    if (distance < circle1.radius + circle2.radius) {
        return true;
    } else {
        return false;
    }
}

uK = 2

colors = ['red','maroon','blue','yellow','green','orange']