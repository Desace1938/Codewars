// Jenny has written a function that returns a greeting for a user. However, she's in love with Johnny, and would like to greet him slightly different. She added a special case to her function, but she made a mistake.

// Can you help her?





//My Solution

function greet(name){
    if(name === "Johnny"){
      return "Hello, my love!";
    }else{
      return "Hello, " + name + "!";
    }
    }
    
  //function should check if name is Johnny first. If true, return the special greeting and it will end right there. 
  //If false, then it would move to the 'else' and return the normal greeting. 