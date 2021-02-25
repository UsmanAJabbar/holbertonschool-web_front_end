let availableItems = ['Shampoo', 'Soap', 'Sponge', 'Water'];

/**
 * addItemToCart - adds items to sessionStorage
 * @item: string that contains the product name
 * to be added.
 * Return: None
 */
addItemToCart = (item) => {
	if(!sessionStorage[item])
		sessionStorage.setItem(item, 1)
	else
		sessionStorage[item] = parseInt(sessionStorage[item]) + 1;
	displayCart();
}

/**
 * removeItemfromCart - removes items to sessionStorage
 * @item: string that contains the product name
 * to be added.
 * Return: None
 */
removeItemfromCart = (item) => {
	if(sessionStorage[item])
		delete sessionStorage[item];

	displayCart();
}

/**
 * clearCart - clears items from sessionStorage
 * Return: None
 */
clearCart = () => {
	sessionStorage.clear();
	displayCart();
}

/**
 * createStore - creates a list of products
 * Return: None
 */
createStore = () => {
	let h2 = document.createElement('h2');
	h2.id = 'product-list'
	h2.innerText = 'Available products:';
	
	let ul = document.createElement('ul');
	ul.id = 'ls-list';

	for (item of availableItems) {
		let li = document.createElement('li');
		li.innerText = item;
		li.onclick = function() { addItemToCart(this.innerText), location.reload() }
		ul.append(li);
	}

	document.body.append(h2);
	document.body.append(ul);
}

/**
 * displayCart - displays the number of items in the cart
 * at any given time
 * Return: None
 */
displayCart = () => {
	let h2 = document.createElement('h2');
	h2.id = 'cart'
	h2.innerText = 'Your cart:';

	if ( !document.querySelector('#cart') )
		document.body.append(h2);

	if ( !document.querySelector('#cart-items') ) {
		let div = document.createElement('div');
		div.id = 'cart-items';
		document.body.append(div);
	}

	updateCart();
}

updateCart = () => {
	let cartItems = getCartFromStorage();

	if(cartItems.length < 1) {
		let div = document.querySelector('#cart-items');
		let ul = document.createElement('ul');
		ul.id = 'cart-ul';
		let li = document.createElement('li');
		li.id = 'empty-li';
		li.innerText = `Your cart is empty`;

		ul.append(li);
		div.append(ul);
	}
	else {
		if ( !document.querySelector('#cart-ul') ) {
			let ul = document.createElement('ul');
			ul.id = 'cart-ul';

			let li = document.createElement('li');
			li.innerText = `Clear my cart`;
			li.id = 'clear-li';
			li.onclick = () => { clearCart() }
			ul.append(li);

			for ( [productName, qty] of Object.entries(cartItems) ) {
				let product = document.createElement('li');
				product.innerText = `${productName} X ${qty} `;
				product.id = `cart-li`;

				let removebtn = document.createElement('span');
				removebtn.innerText = `(remove)`;
				removebtn.onclick = function(e) { removeItemfromCart( productName ), location.reload() };

				product.append(removebtn);

				ul.append(product);
			}

			let div = document.querySelector('#cart-items');
			div.append(ul);
		}

	}
}

/**
 * getCartFromStorage - generates a JSON object containing the
 * products in sessionStorage
 * Return: None
 */
getCartFromStorage = () => {
	if (sessionStorage) {
		if( sessionStorage['IsThisFirstTime_Log_From_LiveServer'] )
			delete sessionStorage['IsThisFirstTime_Log_From_LiveServer'];
		return sessionStorage;
	}
	else
		return {};
}

if(typeof(sessionStorage) == undefined)
	alert('Sorry, your browser does not support Web storage. Try again with a better one');
else {
	createStore();
	displayCart();
}