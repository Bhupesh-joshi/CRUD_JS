// 10. Write program to exchange last two digits. e.g. input 23617 output 23671. 

let digit = 23617;
console.log("Given Digit: " + digit);

let lastDigit = digit % 10;
console.log(lastDigit);

let delLastDigit = digit / 10 | 0;
console.log(delLastDigit);

let secLastDigit = delLastDigit % 10;
console.log(secLastDigit);

let delSecLastDigit = delLastDigit / 10 | 0;
console.log(delSecLastDigit);

let calculateSecLastDigit = delSecLastDigit * 10 + lastDigit;
console.log(calculateSecLastDigit);

let calculateLastDigit = calculateSecLastDigit * 10 + secLastDigit;
console.log(calculateLastDigit);


// Example 2
console.log("Example 2");

let E2_Digit = 23617;

let a = E2_Digit % 10;
let b = E2_Digit / 10 | 0;
let c = b % 10;
let d = b / 10 | 0;
let e = d * 10 + a;
let f = e * 10 + c;
console.log(f);