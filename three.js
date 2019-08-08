/* The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ? */
// primeNumbers = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29];

function prime(number) {
	//is this number prime?
	isPrime = true;
	sqroot = Math.ceil(Math.sqrt(number));
	for (let i = 2; i < sqroot; i++) {
		if (number % i === 0) {
			// console.log('not Prime');
			return (isPrime = false);
		}
	}
	// console.log(isPrime);
	return isPrime ? isPrime : false;
}

function findLargestPrime(number) {
	let largestPrime = 0;
	half = Math.ceil(number / 2);
	for (let i = half; i > 2; i--) {
		// console.log(half);
		if (number % i === 0 && prime(i)) {
			// console.log('prime');
			return (largestPrime = i);
		}
	}

	// if (!prime(number)) {
	// 	half = Math.ceil(number / 2);
	// 	for (let i = half; i > 2; i--) {
	// 		// console.log(half);
	// 		if (number % i === 0 && prime(i)) {
	// 			// console.log('prime');
	// 			return (largestPrime = i);
	// 		}
	// 	}
	// }
	return largestPrime;
}

// prime(2);
// prime(3);
// prime(14);
// prime(13);
// console.log(prime(7));

console.log(findLargestPrime(14));
console.log(findLargestPrime(13195));
console.log(findLargestPrime(600851475143));
