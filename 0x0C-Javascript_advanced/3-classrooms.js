/*
   createClassRoom - It takes into argument numbersOfStudents (number)
   Inside, it contains a function studentSeat, that takes into argument seat (number) and returns a function that returns the seat number
   After the definition of studentSeat, create and populate a variable students (array)
   Using a loop from 0 to numbersOfStudents, pass the number of iteration + 1 to studentSeat and add its return value to the students array
   Returns the students array
*/
function createClassRoom (numbersOfStudents) {
	function studentSeat(seat) {
		return () => {
			return seat;
		}
	}
	let students = [];
	let i = 0;
	for (;i < numbersOfStudents; i++) {
		students[i] = studentSeat(i + 1);
	}
	
	return students;
}
let classRoom = createClassRoom(10);
console.log(classRoom[0]());
console.log(classRoom[3]());
console.log(classRoom[9]());