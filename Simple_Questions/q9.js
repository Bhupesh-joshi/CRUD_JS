// 9 Write program to delete the second last digit. e.g. input 23617 output 2367, 

let digit = 23617;

let delete_last_digit = digit % 10;
console.log(`Deleted Last Digit -> ${delete_last_digit}`);

let my_digit = digit / 10 | 0;
console.log(`After deleting last digit myDigit is -> ${my_digit}`);

let delete_second_L_D = my_digit / 10 | 0;
console.log(`Deleted Second Last Digit -> ${delete_second_L_D}`);

let finalDigit = delete_second_L_D * 10 + delete_last_digit;
console.log((`deleting the second last digit from 23617 to : ${finalDigit}`));
