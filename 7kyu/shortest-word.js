// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.


//My Solution
function findShort(s){
    //split the words into an array
    let wordArr = s.split(' ');
    
    let shortest = wordArr[0].length;
    
    for (let i = 0; i < wordArr.length; i++){
      let length = wordArr[i].length;
      if (length < shortest){
        shortest = length
      }
    }
    return shortest;
  }