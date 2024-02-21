// Write program, which reads a, b, c and d and finds distance between points (a,b) and 
// (c,d). input 3, 7, 11, 13 output 10. 

let a = 3, b =7, c = 11, d = 13;
// let distance = Math.sqrt((c-a)*(c-a)+(d-b)*(d-b));
let distance = Math.sqrt(Math.pow(c-a, 2)+ Math.pow(d-b, 2));
console.log(distance);