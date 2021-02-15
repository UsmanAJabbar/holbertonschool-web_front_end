function checkPrimeNumber(number) {
	for (i = 3; i < number / 3 + 1; i += 2) {
		if (number % i == 0)
			return 1;		/* Not a prime number since it has a factor */
	}
	return 0;				/* Definitely a prime number */
}
function countPrimeNumbers() {
	console.log(2);
	/* Cut down loop time by starting at 3 and check every odd
	   after it since evens after 2 could never be primes */
	let i = 3;
	for (; i <= 100; i += 2) {
		if (checkPrimeNumber(i) == 0)
			console.log(i);
	}
}

startTime = performance.now();

setTimeout(function () {
	for (let i = 1; i <= 100; i++)
		countPrimeNumbers();
}, 0);

endTime = performance.now();
perfTime = endTime - startTime;
console.log(`Execution time of calculating prime numbers 100 times was ${perfTime} milliseconds.`);