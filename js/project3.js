// The prime factors of 13195 are 5, 7, 13 and 29.
// What is the largest prime factor of the number 600851475143 ?

/***DISCARDED INITIAL METHOD***

function primes(N) {
    let primesList = [2];
    for (let i = 3; i<N/2; i+=2) {
        if (isPrime(i)) {
            primesList.push(i);
            console.log(i,"is prime");
        }
    }
    return primesList;
}

function isPrime(n) {
    for (let i = 2; i<n; i++) {
        if (n%i == 0) {
            return false;
        }
    }
    return true;
}

function getPrimeFactors(N) {
    let n = N;
    const primeNumbers = primes(N);
    let primeFactors = [];
    for (let p of primeNumbers) {
        if (n%p == 0) {
            primeFactors.push(p);
            console.log(p,"is a prime factor");
            while (n%p == 0) {
                n = n/p;
            }
        }
    }
    return primeFactors;
}

function main() {
    const n = 13195;
    const primesList = primes(n);
    const primeFactors = getPrimeFactors(n);
    const largestPrimeFactor = Math.max.apply(null, primeFactors);
    document.getElementById("result").innerHTML=`Prime numbers smaller than ${n}: ${primesList} <br>Prime factors of ${n}: ${primeFactors} <br>Largest prime factor among them: ${largestPrimeFactor}`;
}
***END***/

function getPrimeFactors(N) {
    let n = N;
    factors = [];
    let i = 2;
    while (i<N && product(factors)<N) {
        console.log(i);
        if (n%i == 0) {
            n = n/i;
            factors.push(i);
        } else {
            i++;
        }
    }
    return factors;
}

function product(array) {
    let p = 1;
    for (let i of array) {
        p *= i;
    }
    return p;
}

function sumArray(array) {
    let res = 0;
    for (let i in array) {
        res += array[i];
    }
    return res;
}

function alternateMain() {
    const n = 600851475143;
    let primeFactors = getPrimeFactors(n);
    document.getElementById("result").innerHTML = "The prime factors of "+n+" are: "+primeFactors+"<br>The largest is: "+Math.max.apply(null, primeFactors);
}