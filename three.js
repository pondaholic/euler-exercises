/* The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ? */
// primeNumbers = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29];

function prime(number) {
	//is this number prime?
	isPrime = true;
	sqroot = Math.ceil(Math.sqrt(number));
	for (let i = 2; i < sqroot; i++) {
		if (number % i === 0) {
			return (isPrime = false);
		}
	}
	isPrime ? number : '';
}

function findLargestPrime(number) {
	if (!prime(number)) {
		return number / 2;
	}
}

// prime(2);
// prime(3);
// prime(14);
// prime(13);
// prime(27);

console.log(findLargestPrime(14));
