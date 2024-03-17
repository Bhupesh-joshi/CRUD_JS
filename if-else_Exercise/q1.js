// write a program to obtain the reversed number and to determine whether the reversed numbers are equal or not.

let num = 111;
let str = String(num);

let reversedNum = "";

for (let i = str.length - 1; i >= 0; i--) {
    reversedNum += str[i];
}

reversedNum = Number(reversedNum);

if(num == reversedNum) {
    console.log("Equal");
} else {
    console.log("Not Equal");
}

console.log(reversedNum);



// function reverseNumber(num) {
//     let reversedNum = 0;
//     while (num > 0) {
//       reversedNum = reversedNum * 10 + num % 10;
//       num = Math.floor(num / 10);
//     }
//     return reversedNum;
//   }
  
//   function isPalindrome(num) {
//     return num === reverseNumber(num);
//   }
  
//   const num = 12345;
//   const reversedNum = reverseNumber(num);
  
//   console.log(`Original number: ${num}`);
//   console.log(`Reversed number: ${reversedNum}`);
//   console.log(`Is palindrome: ${isPalindrome(num)}`);