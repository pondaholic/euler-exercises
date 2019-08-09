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
	//eratosthenes' sieve:
	let half = Math.ceil(number / 2);
	let largestPrime = 0;
	for (let i = number; i > half; i--) {
		for (let j = 2; j < half; j++) {
			if (prime(j) && i % j != 0 && prime(i) && number % i === 0) {
				return (largestPrime = i);
			}
		}
	}
	// half = Math.ceil(number / 2);
	// quarter = Math.ceil(half / 2);
	// let largestPrime = 0;
	// for (let i = 2; i < quarter; i++) {
	// 	console.log('dividing by: ', i);
	// 	if (number % i === 0) {
	// 		x = number / i;
	// 		if (prime(x)) {
	// 			return (largestPrime = x);
	// 		}
	// 		return x;
	// 	}
	// 	if (largestPrime === 0) {
	// 		for (let j = half; j > quarter; j++) {
	// 			if (number % j === 0 && prime(j)) {
	// 				return (largestPrime = j);
	// 			}
	// 		}
	// 	}
	// }
	// console.log('not prime');
	return `Largest Prime is: ${largestPrime}`;
}

// prime(2);
// prime(3);
// prime(14);
// prime(13);
// console.log(prime(7));

console.log(findLargestPrime(14));
console.log(findLargestPrime(13195));
console.log(findLargestPrime(600851475143));
