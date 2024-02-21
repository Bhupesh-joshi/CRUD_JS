// 1. Write program, which reads a, b and c as sides of a triangle and prints area. Hint: area 
// ys(s-a)s-b)(s-c) .[Hint: s is (a+b+c/2] [sqrt(x) will find square root|. Input 5 
// 7 10 output 16.24. 

let a = 5, b = 7, c = 10;
let s = (a + b + c) / 2; 
let area = Math.sqrt(s*(s-a)*(s-b)*(s-c));
console.log(area);