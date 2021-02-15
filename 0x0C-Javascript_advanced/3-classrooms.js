/*
   createClassRoom - It takes into argument numbersOfStudents (number)
   Inside, it contains a function studentSeat, that takes into argument seat (number) and returns a function that returns the seat number
   After the definition of studentSeat, create and populate a variable students (array)
   Using a loop from 0 to numbersOfStudents, pass the number of iteration + 1 to studentSeat and add its return value to the students array
   Returns the students array
*/
function createClassRoom (numbersOfStudents) {
	function studentSeat(seat) {
		return seat;
	}

	let i = 0;
	for (i = 0; i < numbersOfStudents; i++) {
		students[i] = i + 1;
	}
	
	return studentSeat;
}