// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.


/* Function: create array of natural numbers up to N */
function generate_numbers(N) {
    let temp_result = [];
    for (let i=1; i<N; i++) {
        temp_result.push(i);
    }
    return temp_result;
}

/* Function: test if q is a factor of p */
function is_multiple(p,q) {
    if ((p%q) == 0) {
        return true;
    } else {
        return false;
    }
}

/* Function: retrieve multiples of q1 or q2 from array */
function extract_multiples(array,quotient1,quotient2) {
    let temp_result = [];
    for (let i of array) {
        if (is_multiple(i,quotient1) || is_multiple(i,quotient2)) {
            temp_result.push(i);
        }
    }
    return temp_result;
}

/* Function: sum all elements */
function summing(elements) {
    let sum = 0;
    for (let i of elements) {
        sum += i;
    }
    return sum;
}

/* Function: calculate and write answer */
function execute(N,q1,q2) {
    const result = document.getElementById("result");
    let multiples_list = extract_multiples(generate_numbers(N),q1,q2);
    result.innerHTML=`The natural numbers below ${N} that are multiples of ${q1} or ${q2} are: ${multiples_list}. <br/>Their sum is: ${summing(multiples_list)}`;
}

/* Function: main process */
function main() {
    let q1 = parseInt(document.getElementById("q1").value);
    let q2 = parseInt(document.getElementById("q2").value);
    let n = parseInt(document.getElementById("n").value);
    execute(n,q1,q2);
}
