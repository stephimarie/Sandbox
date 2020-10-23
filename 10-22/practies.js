
// Write a function that takes in a single word as a string and returns true if it's a palindrome and false otherwise(a palindrome is spelled the same way forwards and backwards).
//   Ex:
// Input: "noon"
// Output: true
// Input: "horse"
// Output: false
// Input: "racecar"
// Output: true
var isPalindrome = function (str) {
    return str.split("").reverse().join("") === str
  }
  var isPalindrome = function (str) {
    for (var i = 0; i < str.length; i++) {
      if (str[i] !== str[str.length - (i + 1)]) {
        return false
      }
    }
    return true
  }
  console.log(isPalindrome("horse")) //false
  console.log(isPalindrome("mom")) //true
  console.log(isPalindrome("racecar")) //true