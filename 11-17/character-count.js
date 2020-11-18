// - Create a `characterCount` function to achieve the following:
// - Create a new object.
// - Loop through each character in the given string and create a new key for each character in the string.
// - The value of the character's key should be the number of times it appears in the string.
// - See the following function for an example:
//   ```js
//   var str = "Hello World!";
//   console.log(characterCount(str))
//   ```
// - Given the preceding function, the following object should be returned:
//   ```js
//   { H: 1, e: 1, l: 3, o: 2, ' ': 1, W: 1, r: 1, d: 1, '!': 1 }
//   ```
// Hints: remind yourself about bracket notation, and you may want to look up "for in"

var characterCount = function (str) {
    // code goes here
    var charMap = {};
    for (var i = 0; i < str.length; i++) {
      var char = str[i];
      if (char in charMap) {
        charMap[char]++;
      } else {
        charMap[char] = 1;
      }
    }
    return charMap;
  };
  console.log(characterCount('This is a string with some stuff in it'));