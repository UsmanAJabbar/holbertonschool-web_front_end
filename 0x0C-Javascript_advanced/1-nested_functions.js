let globalVariable = "Welcome";

/*
   outer - outer example function
   that has access to globalVariable.
   This function also creates another
   variable with the intention of
   passing it into another nested
   function.
   Return: None
*/
function outer () {
	alert(`${globalVariable}`);
	let course = "Holberton";

	function inner () {
		alert(`${globalVariable} ${course}`);
		let exclamation = "!";

		function inception () {
			alert(`${globalVariable} ${course}${exclamation}`);
		}
		inception();
	}
	inner();
}
outer();