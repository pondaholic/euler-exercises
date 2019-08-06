//If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

//Find the sum of all the multiples of 3 or 5 below 1000.

function multiples(number, sum = 0) {
	x = number - 1;
	sum = sum;
	//base
	if (number === 0) {
		console.log(sum);
		return;
	}
	if (x % 3 === 0 || x % 5 === 0) {
		// console.log('multiple', x);
		sum += x;
	}
	multiples(x, sum);
}

multiples(1000);
