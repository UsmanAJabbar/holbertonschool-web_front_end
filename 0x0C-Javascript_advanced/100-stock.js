let stock = {
	macbook: 2,
	iphone: 4
}

processPayment = (itemName) => {
	stock[itemName] -= 1;
	console.log(`Payment is being processed for item ${itemName}`);
}
processError = (itemName) => {
	console.log(`No more ${itemName} in stock`);
	console.log('Payment is not being processed')
}
processOrder = (itemName, callbackPayment, callbackError) => {
	console.log(`Verifying the stock of ${itemName}`);

	let fmtedItemName = itemName.toLowerCase();

	if (fmtedItemName in stock)
		if (stock[fmtedItemName] > 0)
			callbackPayment(fmtedItemName);
		else
			callbackError(itemName);
	else
		callbackPayment(itemName);
}

let item = prompt("Please enter the item you would like to purchase (Macbook, iPhone)");
if (item != undefined)
	processOrder(item, processPayment, processError);
