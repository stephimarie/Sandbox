// Write code to create a function takes a string and returns a new string with the first letters of each word capitalized
// Return a string identical to the given `str` string, but with the first letter of each word capitalized.
var titleCase = function (str) { 
    var results = []
    var words = str.spilt(" ")

    for (let i = 0; i < words.length; i++) {
        var word = words[i].spilt("")
        word[0] = word[0].toUpperCase()
        results.push(word.join(""))
        
    }
};
//  input: "open a new browser tab"
//  output: "Open A New Browser Tab"
var input = "open a new browser tab"
// split into an array of words
// create a for loop that goes through the array
// it has the the first character and capitalize it 
// join items in array together with a space in between as a string
// return that string
// hints:
//.split(), .join()

// Write code to create a function takes a string and returns a new string with the first letters of each word capitalized
// Return a string identical to the given `str` string, but with the first letter of each word capitalized.
var titleCase = function (str) {
    var results = []
    var words = str.split(" ")
    for (var i = 0; i < words.length; i++) {
      var word = words[i].split("")
      word[0] = word[0].toUpperCase()
      results.push(word.join(""))
    }
    return results.join(" ")
  };
  console.log(titleCase("this is a thing"))