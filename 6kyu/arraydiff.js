// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]




//My Solution

function arrayDiff(a, b) {
    //define a return array 
    let result = [];
    // loop the length of array a
    for(let i = 0; i < a.length;i++){
      //check array a index to see if element is in array b 
      if (!b.includes(a[i])){
      //if not, push to return array 
        result.push(a[i]);
      }
    }
    return result;
  }
