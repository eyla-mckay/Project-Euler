// Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:
// 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
// By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.

/* Function: Fibonacci sequence generator */
function fibonnaci(a,b,N) {
    // starting terms: a,b
    // end sequence before: N
    let sequence = [a,b];
    let sum = a+b;
    while (sum<N) {
        let n =sequence.length-1;
        sum = sequence[n-1]+sequence[n];
        sequence.push(sum);
    }
    return sequence;
}

/* Function: even/odd filter */
function extractEvenNumbers(array) {
    let sequence = [];
    for (let i of array) {
        if (i%2 == 0) {
            sequence.push(i);
        }
    }
    return sequence;
}

/* Function: Sum of terms */
function summing(array) {
    let sum = 0;
    for (let i of array) {
        sum += i;
    }
    return sum;
}

/* Function: Sum filtered sequence */
function execute(a,b,N) {
    let sequence = fibonnaci(a,b,N);                  // generate sequence
    let even_sequence = extractEvenNumbers(sequence); // filter generated sequence
    let sum = summing(even_sequence);                 // add all terms
    const result = document.getElementById("result");
    result.innerHTML=`Terms of Fibonnacci sequence whose values do not exceed ${N}: ${sequence} <br/>Even terms among them: ${even_sequence}<br/>Sum of those even terms: ${sum}`;
}

/* Function: Main process */
function main() {
    execute(1,2,4000000);
}