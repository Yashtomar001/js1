// remove all the negative numbers from an array using push and pop method  
// let arr = [12, -7, 5, -3, 9, -1, 4];    
// let res = [];
// while (arr.length > 0) {
//     let val = arr.shift();
//     if (val >= 0) {
//         res.push(val);
//     }
// }
// console.log(res);

// palindrome check using push and pop method
// let arr=[1,2,3,2,2]
// let original=[];
// let reverse=[]

// for(let i=0;i<arr.length;i++){
//     original.push(arr[i]);
//     console.log(original);
// }
// while(arr.length>0){
//         reverse.push(arr.pop());
//         console.log(reverse);
//     }
// for(i=0;i<original.length;i++){
//     if(original[i]!==reverse[i]){
//         console.log(" it is palindrome");
//     }
//    else{
//     console.log(" it is not palindrome");
//    }
// }
// console.log(palindrome);  

// let arr = [1, 2, 3, 2, 1]; // You can change this array
// let original = [];
// let reverse = [];

// // Copy original array
// for (let i = 0; i < arr.length; i++) {
//   original.push(arr[i]);
// }

// // Create reversed array (without modifying original)
// for (let i = arr.length - 1; i >= 0; i--) {
//   reverse.push(arr[i]);
// }

// // Compare both arrays
// let isPalindrome = true;
// for (let i = 0; i < original.length; i++) {
//   if (original[i] !== reverse[i]) {
//     isPalindrome = false;
//     break;
//   }
// }

// // Final result
// if (isPalindrome) {
//   console.log("It is a palindrome");
// } else {
//   console.log("It is not a palindrome");
// }