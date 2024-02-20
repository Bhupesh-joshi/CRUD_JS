// 6. Write program to print the second last digit. Input 23617 output 1. 

let num = 23617;
console.log(num);

let delete_last_digit = num/10 | 0;
console.log(delete_last_digit);

second_last_digit = delete_last_digit % 10;
console.log(second_last_digit);