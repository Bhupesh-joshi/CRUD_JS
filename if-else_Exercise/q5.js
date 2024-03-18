// leap year program 

const year = 2024;

if(year % 4 ===0 && year % 100 ===0 !==0 || year % 400 === 0){
    console.log("Leap year: " + year)
} else {
    console.log("NO Leap year: " + year)
}