// This file contains two functions
// * setCookies()
// * showCookies()

setCookies = () => {
	let firstname = document.getElementById("firstname").value;
	let email = document.getElementById("email").value;

	document.cookie = `firstname=${firstname}`;
	document.cookie = `email=${email}`;
}
showCookies = () => {
	if( document.querySelector('p') != null )
		document.querySelector('p').remove();

	let cookies = document.cookie.split(';')
	let p = document.createElement("p");

	for (pears of cookies)
		p.innerHTML += pears.split('=')[0] + ': ' + pears.split('=')[1];

	document.body.append(p);
}