
// Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0



//My Solution
// Sum Numbers
function sum (numbers) {
    "use strict";
  
  //define the sum
    let sum = 0;
  
  //take every item in array and add it to sum
  for (let i = 0; i < numbers.length; i += 1){
    
    sum += numbers[i]
  }
    return sum;
};