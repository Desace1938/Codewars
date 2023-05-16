// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example(Input => Output):
// 35231 => [1,3,2,5,3]
// 0 => [0]



//My Solution

function digitize(n) {
    return n.toString().split('').reverse().map(Number);
  }


//convert number to string and split
//reverse the number
//map() creates a new array from calling a function for every array element