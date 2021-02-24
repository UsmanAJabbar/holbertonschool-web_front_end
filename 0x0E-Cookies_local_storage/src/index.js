// This file contains two functions
// * setCookies()
// * showCookies()

setCookies = () => {
	let firstname = document.getElementById("firstname").value;
	let email = document.getElementById("email").value;
	let expiry = new Date();					/* Create date object */
	expiry.setDate(expiry.getDate() + 10);		/* SetDate + 10 days to expiry */
	expiry = expiry.toUTCString();				/* Extract string and re-assign */

	document.cookie = `firstname=${firstname}`;
	document.cookie = `email=${email}`;
	document.cookie = `Expires=${expiry}`;
}
showCookies = () => {

	/* Clear the only paragraph tag if it exists */
	if( document.querySelector('p') != null )
		document.querySelector('p').remove();

	let cookies = document.cookie.split('; ');
	let p = document.createElement("p");

	let cookieJar = {}
	for (pears of cookies)
		cookieJar[ pears.split('=')[0] ] = pears.split('=')[1];

	p.innerHTML = `Email: ${cookieJar['email']} - Firstname: ${cookieJar['firstname']}`;
	document.body.append(p);
}
getCookie = (name) => {
	let cookies = document.cookie.split('; ');

	for (pear of cookies) {
		let key = pear.split('=')[0];
		if(key == name) {
			let value = pear.split('=')[1];
			return value;
		}
	}
	return "";
}