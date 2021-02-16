/*
   changeMode - onclick, changes/updates themes on a website
   with the help of a closure that executes on click
   @size: font-size
   @weight: font-weight
   @transform: text-transform
   @background: background color
   @color: font-color
*/
function changeMode(size, weight, transform, background, color) {
	return () => {
		/* Extract the element */
		let body = document.body.style;

		/* Set attributes */
		body.fontSize = size.toString() + 'px';
		body.fontWeight = weight;
		body.textTransform = transform;
		body.background = background;
		body.color = color;
	}
}

function main() {
	let spooky = changeMode(9, "bold", "uppercase", "pink", "green");
	let darkMode = changeMode(12, "bold", "capitalize", "black", "white");
	let screamMode = changeMode(12, "normal", "lowercase", "white", "black");

	let body = document.body;
	let p = document.createElement('p');
	p.innerHTML = 'Welcome Holberton!';

	body.appendChild(p);

	let themes = {
		/* Button Text : func call */
		'Spooky': spooky,
		'Dark mode': darkMode,
		'Scream mode': screamMode,
	}
	for (const [p, func] of Object.entries(themes)) {
		let btn = document.createElement('button');
		btn.innerHTML = p;
		btn.addEventListener('click', func);
		body.appendChild(btn);
	}
}
main();