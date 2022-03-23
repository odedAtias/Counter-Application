var counter = 0;
let counterElement = document.getElementById('counter'),
	buttons = document.getElementsByClassName('btn');

//Coloring the counter
let painting = counter => {
	if (counter > 0) counterElement.firstChild.style.color = 'green';
	else if (counter < 0) counterElement.firstChild.style.color = 'red';
	else counterElement.firstChild.style.color = 'black';
};
//Update the value of the counter
let counterUpdater = (index, counter) => {
	console.log(counter);
	//Decrease
	if (index === 0) return counter - 1;
	//Reset
	else if (index === 1) return 0;
	//Increase
	return counter + 1;
};

let clickHandler = _ => {
	Array.from(buttons).forEach((element, index) => {
		element.addEventListener(
			'click',
			function () {
				counter = counterUpdater(index, counter);
				counterElement.innerHTML = '<h1>' + counter + '</h1>';
				painting(counter);
			},
			false
		);
	});
};
clickHandler();
