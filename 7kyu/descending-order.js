// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321


//My Solution

function descendingOrder(n){
    return Number(n.toString().split('').sort().reverse().join(''))
  }
    //turn n into a string and split.
    //sort the numbers in acsending order
    //reverese the numbers to descending order
    //join back into a single string