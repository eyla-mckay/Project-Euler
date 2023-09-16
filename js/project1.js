// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.

function main() {
    /* acquire variables */
    const n  = parseInt(document.getElementById("n").value);
    const q1 = parseInt(document.getElementById("q1").value);
    const q2 = parseInt(document.getElementById("q2").value);

    /* calculate */
    let sum = 0; // initialise total
    
    for (let i=1; i<n; i++) { // for each natural number until N
        if ( ((i%q1) == 0) || ((i%q2) == 0)) { // if evenly divisible by Q1 or Q2
            sum += i; // add to total
            }
        }
    
    /* write answer */
    document.getElementById("result").innerHTML = `The sum of natural numbers below ${n} that are multiples of ${q1} or ${q2} is: ${sum}`;
}
