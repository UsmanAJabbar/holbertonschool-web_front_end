let availableItems = ['Shampoo', 'Soap', 'Sponge', 'Water'];

addItemToCart = (item) => {
	window.localStorage.setItem(item, true);
}
createStore = () => {
	let ul = document.createElement('ul');
	ul.id = 'ls-list';

	for (item of availableItems) {
		let li = document.createElement('li');
		li.onclick = () => { addItemToCart(item) };
		li.innerText = item;

		ul.append(li);
	}
	document.body.append(ul);
}
displayCart = () => {
	if (window.localStorage) {
		let numItems = window.localStorage.length;
		let p = document.createElement('p');

		p.innerText = `You previously had ${numItems} items in your cart`;
		document.body.append(p);
	}
	/* else pass */
}
if(typeof(localStorage) == undefined)
	alert('Sorry, your browser does not support Web storage. Try again with a better one');
else {
	createStore();
	displayCart();
}