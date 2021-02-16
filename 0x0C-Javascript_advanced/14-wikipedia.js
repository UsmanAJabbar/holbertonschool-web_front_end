function createElement (data) {
	let para = document.createElement("p")
	para.textContent = data.currentTarget.responseText;

	/* Add element to body tag */
	document.body.appendChild(para);
}

function queryWikipedia (callback_func) {
	let req = new XMLHttpRequest();

	/* Unlike Python requests, open does not open a connection but rather configures the request */
	req.open("GET",
             "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*");
	/* Open the request and send the generated config */
	req.send();
	/* Once the request has returned anything, call on the callback function with the responseText */
	req.onload = callback_func;
}
queryWikipedia(createElement);