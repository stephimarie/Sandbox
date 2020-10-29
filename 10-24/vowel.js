// Write code to return the the number of vowels in `str`
var vowelCount = function (str) {
    var result = 0;
    for (var i = 0; i < str.length; i++) {
      var letter = str[i].toLowerCase()
      if (letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u") {
        result++
      }
    }
    return result
  }
  console.log(vowelCount("Food"))
  console.log(vowelCount("eat"))
  console.log(vowelCount("Dog"))