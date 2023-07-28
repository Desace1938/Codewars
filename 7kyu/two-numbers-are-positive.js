// Your job is to write a function, which takes three integers a, b, and c as arguments, and returns True if exactly two of of the three integers are positive numbers (greater than zero), and False - otherwise.

// Examples:
// twoArePositive(2, 4, -3) == true
// twoArePositive(-4, 6, 8) == true
// twoArePositive(4, -6, 9) == true
// twoArePositive(-4, 6, 0) == false
// twoArePositive(4, 6, 10) == false
// twoArePositive(-14, -3, -4) == false



// My Solution
function twoArePositive(a, b, c) {
   if (a > 0 && b > 0 && c < 1){
     return true
    }else if(a > 0 && b < 1 && c > 0){
      return true
    } else if(a < 1 && b > 0 && c > 0){
      return true
    }else{
     return false
   }
}