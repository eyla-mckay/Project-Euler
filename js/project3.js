// The prime factors of 13195 are 5, 7, 13 and 29.
// What is the largest prime factor of the number 600851475143 ?

/* Function: recursive test for prime factors of N */
function getPrimeFactors(N) {
    let n = N;    // initialise
    factors = []; // list of confirmed prime factors
    let i = 2;    // index (potential prime factor)
    while (i<N && product(factors)<N) {
        console.log(i);
        if (n%i == 0) {      // if index is a prime factor
            factors.push(i); // then store it
            n = n/i;         // and work with remainder
        } else {
            i++;             // otherwise move to next candidate
        }
    }
    return factors;
}

/* Function: product of all elements in array */
function product(array) {
    let p = 1;
    for (let i of array) {
        p *= i;
    }
    return p;
}

/* Function: sum of all elements in array */
function sumArray(array) {
    let res = 0;
    for (let i in array) {
        res += array[i];
    }
    return res;
}

/* Function: main process */
function alternateMain() {
    const n = 600851475143;
    let primeFactors = getPrimeFactors(n);
    document.getElementById("result").innerHTML = "The prime factors of "+n+" are: "+primeFactors+"<br>The largest is: "+Math.max.apply(null, primeFactors);
}