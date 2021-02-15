/*
   welcome - this function generates the fullname
   variable from two strings that are passed to it.
   @firstName: first string
   @lastName: last string
   Return: None, but invokes the displayFullName()
   function.
*/
function welcome(firstName, lastName) {
	let fullName = `${firstName} ${lastName}`;
	/*
	   displayFullName - this function makes use of the fullname
	   variable initially created in the parent function and
	   simply alerts the user with a custom string + the fullname
	*/
	function displayFullName() {
		alert(`Welcome ${fullName}!`);
	}
	displayFullName();
}