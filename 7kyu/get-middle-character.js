// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

// #Examples:

// Kata.getMiddle("test") should return "es"

// Kata.getMiddle("testing") should return "t"

// Kata.getMiddle("middle") should return "dd"

// Kata.getMiddle("A") should return "A"



//My Solution

function getMiddle(s)
{
    let middle = Math.floor(s.length / 2);
  // divide string by its length by 2.  if 0 remainder, it means evens.
  if (s.length % 2 === 0) {
  //if even, we want the middle character plus the character next to middle. we will have 2 characters to equal the middle.
      return s[middle - 1] + s[middle];
  }
  else{
    //if odd, we need the exact middle character
      return s[middle];
  }
}