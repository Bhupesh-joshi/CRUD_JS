// 5. Write program to delete last two digits. input 13613 output 136. input 324 output 4. 

let num = 13613;
let L_deleted_val = num / 100 | 0;

console.log(L_deleted_val);