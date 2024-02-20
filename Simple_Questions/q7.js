// 7. Program to find the sum of last two digits. For above inputs output 1+3=4 and 2+4-6. 

let digit = 13613;

let lastDigit = digit % 10;
console.log(`Last Digit -> ${lastDigit}`);

let delete_last_digit = digit / 10 | 0;

let secondLastDigit = delete_last_digit % 10;
console.log(`Second Last Digit -> ${secondLastDigit}`);

let sum = lastDigit + secondLastDigit;
console.log(`Sum of Last Two Digits : ${sum}`);