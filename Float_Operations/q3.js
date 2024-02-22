// Write program, which reads 6 numbers a, b, c, d, e and f. The program outputs the area 
// of the triangle whose end points are (a,b), (c,d) and (e,f). [Hint: use above two 
// questions]. Input 7 3 11 3 7 6output 6.

let a = 7, b = 3, c = 11, d = 3, e = 7, f = 6;

// let distance = Math.sqrt((c - a) * (c - a) + (d - b) * (d - b));

let distance = Math.sqrt(Math.pow((c-a / 2) + (d-b / 2)))
console.log(distance)

let new_distance = Math.sqrt((x2 - x1) * (x2 - 1) + (y2 - y1) * (y2 - y1));
console.log(new_distance)


