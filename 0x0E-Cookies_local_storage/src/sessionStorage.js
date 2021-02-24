let availableItems = ['Shampoo', 'Soap', 'Sponge', 'Water'];

addItemToCart = (item) => {
	sessionStorage.setItem(item, true);
}
createStore = () => {
	let ul = document.createElement('ul');
	ul.id = 'ls-list';

	for (item of availableItems) {
		let li = document.createElement('li');
		li.innerText = item;
		li.onclick = function() { addItemToCart(this.innerText) }
		ul.append(li);
	  }
	document.body.append(ul);
}
displayCart = () => {
	if (window.sessionStorage) {
		let numItems = window.sessionStorage.length - 1;
		let p = document.createElement('p');

		p.innerText = `You previously had ${numItems} items in your cart`;
		document.body.append(p);
	}
	/* else pass */
}
if(typeof(sessionStorage) == undefined)
	alert('Sorry, your browser does not support Web storage. Try again with a better one');
else {
	createStore();
	displayCart();
}