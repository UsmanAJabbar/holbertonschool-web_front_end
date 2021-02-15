/*
   welcomeMessage - returns a function that
   executes an alert from a variable call
   @fullName: name string
   Return: None
*/
function welcomeMessage (fullName) {
	return function () { alert(`Welcome ${fullName}`) };
}
let guillaume = welcomeMessage("Guillaume");
let alex = welcomeMessage("Alex");
let fred = welcomeMessage("Fred");