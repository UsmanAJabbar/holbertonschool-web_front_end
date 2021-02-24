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
	document.cookie = `expires=${expiry}`;
	document.cookie = `path=/`;
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
showForm = () => {
	let form = document.getElementById('login-form');
	let loggedIn = document.getElementById('logged-in');

	if (loggedIn)
		loggedIn.remove();

	form.style.display = 'block';
}
hideForm = () => {
	let form = document.getElementById('login-form');
	form.style.display = 'None';
}

deleteCookiesAndShowForm = () => {
	let reset = new Date();
	reset.setTime(0);
	reset = reset.toUTCString();

	document.cookies = `expires=${reset}`;

	showForm();
}
showWelcomeMessageOrForm = () => {
	if (!document.cookie)
		console.log('here'), showForm();
	else {
		hideForm();
		/*  DOM OPERATIONS  */
		let loggedInContainer = document.createElement('div');
		loggedInContainer.id = 'logged-in';

		let welcomeMessage = document.createElement('h1');
		let firstname = getCookie('firstname');
		welcomeMessage.innerHTML = `Welcome ${firstname}`

		let logout = document.createElement('a');
		logout.innerHTML = '(logout)';
		logout.href = '#';
		logout.onclick = 'deleteCookiesAndShowForm()';
		logout.style.color = 'black';
		logout.style.fontWeight = 'normal';
		logout.style.fontStyle = 'italic';
		logout.style.marginLeft = '10px';
		logout.style.textDecoration = 'None';

		welcomeMessage.append(logout);
		loggedInContainer.append(welcomeMessage);
		document.body.append(loggedInContainer);
		// document.body.append(
		// 	loggedInContainer.append(
		// 		welcomeMessage.append(logout)
		// ));
	}
}
showWelcomeMessageOrForm();