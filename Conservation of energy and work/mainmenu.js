
  // Get all buttons with the 'menu-button' class
  var buttons = document.querySelectorAll('.menu-button');

  // Calculate the total height of all buttons
  var totalHeight = 0;
  buttons.forEach(function(button) {
    totalHeight += button.offsetHeight;
  });

  function mainMenu (){
    changeGravity(gravity+0.1)
  }
  function quit (){
    console.log('hi')
    window.close()
  }
  function two (){
    alert("new game")}
  // Calculate the top offset to center the buttons vertically
  var centerOffset = (window.innerHeight - totalHeight) / 2;

  // Loop through the buttons and position them individually
  let i = 0
  buttons.forEach(function(button) {
    button.style.top = centerOffset + "px";
    button.style.left =  "850px";
    centerOffset += button.offsetHeight + 10; // Add 10 for spacing
    i++
  });