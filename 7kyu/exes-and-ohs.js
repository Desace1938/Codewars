// DESCRIPTION:
// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false


//My Solution 
function XO(str) {
    let o = [];
    let x = [];
    str = str.toLowerCase().split('');
    
    for( let i=0; i < str.length; i++){
      if(str[i] == 'o'){
        o.push(str[i]);
      }else if(str[i] == 'x'){
        x.push(str[i]);
      }
    }if(o.length === x.length){
      return true;
    }else{
      return false;
    }
      
  }