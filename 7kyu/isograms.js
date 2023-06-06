// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

// isIsogram "Dermatoglyphics" = true
// isIsogram "moose" = false
// isIsogram "aba" = false



//My Solutions

function isIsogram(str){
    //ignore the case 
    str = str.toLowerCase();
    //split the string
      let text = str.split("");
      if (text.length === 0) { 
          return true;
      }
      //walk the string letter by letter
      for (let i = 0; i < text.length; i++) {

        // is the letter present in new string?
            if (text.indexOf(text[i]) !== text.lastIndexOf(text[i]) ){
              return false; //it's present => return false
          }
      }
      return true; //it is not found => return true
  }