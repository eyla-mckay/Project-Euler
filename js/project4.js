// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
// Find the largest palindrome made from the product of two 3-digit numbers.

const btn = document.getElementById("execute");
const res = document.getElementById("result");

/* Palindrome test */
function isPalindrome(argument) {
    let stringified = ""+argument;
    let n = stringified.length;
    for(let i=0; i<n/2; i++) {
        if(stringified[i]!=stringified[n-i-1]) {
            // console.log(`${argument} is not a palindrome`);
            return false;
        }
    }
    console.log(`${argument} is a palindrome`);
    return true;
}

/* Function: brute force version */
// function testNumbersBruteForce(len) {
//     const N=(10**len)-1;
//     const delta=10;
//     console.log(""+len+" digits: init "+N);
//     let maxPal = 0;
//     let i = 0
//     for(let x1 = N; x1 > 0; x1-=1) {
//         for(let x2 = N; x2 > 0; x2-=1) {
//             i+=1;
//             let p = x1*x2;
//             console.log(`${x1}*${x2} = ${p}`);
//             if(isPalindrome(p)) {
//                 if(p>maxPal) {
//                     maxPal = p;
//                     steps = i;
//                 }
//             }
//         }
//     }
//     console.log(i,"steps")
//     return maxPal;
// }

/* Function: recursive test for palindromic products algorithm (optimised) */
function testNumbers(len) {
    const N=(10**len)-1;   // upper limit
    const delta=10;        // interval
    console.log(""+len+" digits: init "+N);
    let maxPal = 0;        // largest found palindrome
    let i = 0              // number of steps performed
    for(let lim = N; lim>50; lim-=delta) {            // count down intervals from upper limit
        for(let x1 = lim; x1 > lim-delta; x1-=1) {    // interval for first factor
            for(let x2 = N; x2 > lim-delta; x2-=1) {  // interval for second factor
                i+=1;                                 // step count
                let p = x1*x2;                        // product of factors
                console.log(`${x1}*${x2} = ${p}`);
                if(isPalindrome(p)) {                 // test
                    if(p>maxPal) {
                        maxPal = p;
                        steps = i;
                    }
                }
            }
        }
    }
    console.log(i,"steps")
    return maxPal;
}



/* Function: main process */
function main() {
    const digits = 3;
    res.innerHTML= testNumbers(digits);
}

btn.addEventListener("click", main);