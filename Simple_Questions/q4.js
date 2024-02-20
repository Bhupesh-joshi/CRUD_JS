// 4. Write program to delete the last digit. input 13613 output 1361. input 324 output 32. 

let num = 13613;
let delete_last_value = num/10 | 0;

console.log(delete_last_value);