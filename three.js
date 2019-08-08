/* The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ? */
// primeNumbers = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29];

function prime(number) {
	for (let i = 2; i < number; i++) {
		Math.ceil(Math.sqrt(i));
	}
}

prime(13195);
