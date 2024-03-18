// if ages of ram, shyam and ajay are input through the keyboard, 
// to determine youngest of the three?

let a = 10;
let b = 10;
let c = 11;

if(a<b && a<c) {
    console.log("a is smaller");
} else if(b<a && b<c) {
    console.log("b is smaller");
} else if(c<a && c<b) {
    console.log("c is smaller");
} else {
    console.log("wrong input");
}