function add(a,b) {
    return (a + b); 
}

function subtract(a,b) {
    return (a - b);
}

function multiply(a,b) {
    return (a * b);
}

function divide (a,b) {
    return (a / b);
}

function increment(a) {
    return(a + 1);
}

function decrement(a) {
    return(a - 1);
}

let n = '2.222'

function makeInt(n) {
    return(parseInt(n, 10));
}

console.log(makeInt(n));


function preserveDecimal(n) {
    return(parseFloat(n));
}

console.log(parseFloat(n));


