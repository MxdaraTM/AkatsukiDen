function calculateValues(position, time) {
	// Calculate velocity
	let velocity = position / time;

	// Calculate acceleration
	let acceleration = 2 * (position - (velocity * time)) / (time * time);

	// Return an object with the calculated values
	return {
		position: position,
		time: time,
		velocity: velocity,
		acceleration: acceleration
	};
}

// Example usage
let position = 50; // meters
let time = 10; // seconds
let values = calculateValues(position, time);

console.log(values.position); // Output: 50
console.log(values.time); // Output: 10
console.log(values.velocity); // Output: 5
console.log(values.acceleration); // Output: -1
