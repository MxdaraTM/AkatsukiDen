console.log("JavaScript is connected.");

const pizzaOrders = [
  { quantity: 'pepperoni', description: 'pizza with large italian polony slices, accompanied with olives, garlic' },
  { quantity: 'Hawaiian', description: 'pizza with large italian pineapple slices, accompanied with bacon, garlic, tomatoes' },
  { quantity: 'steak', description: 'premium wagyu steak, accompanied with olives, mozzarella, garlic' },
  { quantity: 'vegetarian', description: 'pizza with assorted vegetables, including bell peppers, mushrooms, onions, and olives' },
  { quantity: 'margherita', description: 'traditional pizza with fresh mozzarella, tomatoes, and basil' },
  { quantity: 'four cheese', description: 'pizza with four different types of cheese: mozzarella, gouda, parmesan, and feta' },
  { quantity: 'meat lovers', description: 'pizza with pepperoni, bacon, sausage, and ham' },
  { quantity: 'BBQ chicken', description: 'pizza with BBQ sauce, grilled chicken, onions, and peppers' },
  { quantity: 'pesto', description: 'pizza with pesto sauce, chicken, and sun-dried tomatoes' },
  { quantity: 'seafood', description: 'pizza with shrimp, scallops, and clams, accompanied with garlic and mozzarella' }
];

	const myPizzas = document.getElementById('myPizzaList');
	let tableHtml = '';

	for(let i=0; i < pizzaOrders.length; i++) {
		tableHtml += '<tr>';
		tableHtml += '<td>' + pizzaOrders[i].quantity + '</td>';
		tableHtml += '<td>' + pizzaOrders[i].description + '</td>';
		tableHtml += '</tr>';
	}

	myPizzas.innerHTML = tableHtml;

for(let k=0;k<101;k++){console.log(Math.PI*k)};