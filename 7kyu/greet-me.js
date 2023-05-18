// Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.

// Example:

// "riley" --> "Hello Riley!"
// "JACK"  --> "Hello Jack!"



//My Solution
var greet = function(name) {
    //name [0] will affect the first letter & toUpperCase will change it to uppercase.
    //slice(1) will affect the second letter to the last, and keep it lowercase.
    return `Hello ${name[0].toUpperCase() + name.slice(1).toLowerCase()}!`;
  };