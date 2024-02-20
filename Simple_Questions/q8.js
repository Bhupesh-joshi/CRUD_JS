// Write program to double the last digit. e.g. input 23613 output 23616. input 324 output 
// 328. (assume that last digit is less than 5) 

let digit = 23613;

let delete_last_digit = digit / 10 | 0;
console.log(`Delete last Digit -> ${delete_last_digit}`);

let lastDigit = digit % 10;
console.log(`Last Digit -> ${lastDigit}`);

let double_L_D = lastDigit + lastDigit;
console.log(`doubled last digit - > ${double_L_D}`);

let calculate = delete_last_digit * 10 + double_L_D;
console.log(`Solution : ${calculate}`);