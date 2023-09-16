function main() {

    // acquire maximum quotient
    const maxQ = parseInt(document.getElementById("max").value);

    // make a descending array of quotients to test
    let quotients = [];
    for (let c = maxQ-1; c>0; c--) {
        let duplicate = false;
        for (let q of quotients) {
            // don't bother adding quotients that are already factors of others
            if(q%c == 0 || maxQ%c == 0) {duplicate = true;}
        }
        if (!duplicate) {quotients.push(c);}
    }

    let found = false;
    let i = 0;

    while(!found) {
        console.log(i); // keep track

        i+=maxQ // test every multiple of maxQ
        divisible = true;
        for (let q of quotients) { // against the other quotients
            if (i%q !== 0) {divisible = false}
        }
        if (divisible) {
            found = true;
            console.log("---------------------\nThe answer is: "+i);
        }
    }
}
