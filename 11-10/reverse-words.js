// - Return a new string that has all the words in the given string in reversed order. Reverse the order of the _words_, not the _letters_ in the string.
// // - e.g. given the following string:
// ```js
// var str = "just keep swimming";
// ```
// - The following string should be returned:
// ```js
// "swimming keep just";
// ``` join puts the string together - split string 

var reverseWords = function (str) { 
    var words = str.split(" ").reverse().join(" ")
};
console.log(reverseWords("just keep swimming"))

// my code 
function reverseString(str) {
    return str
}
reverseString("just keep swimming")

//  Thomas code 
var reverseWords = function (str) {
    return str.split(" ").reverse().join(" ")
  };
  console.log(reverseWords("just keep swimming"))