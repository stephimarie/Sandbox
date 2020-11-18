var reverse = function (str) {
    var result = ""
}

for (var i =  str.length - 1; i >= 0; i--) 
{  result += str[i]

}

return result

// input: "hello"
// output: "olleh"

console.log(reverse("hello"))

// Answer:
// Write code to return a new string with all of the characters in `str` reversed.
// You may NOT use the built-in reverse method ... no reverse(), split(), or join()
// remember when we wrote code to count down instead of counting up? That might be helpful.
var reverse = function (str) {
    var result = ""
    // for (var i = 0; i < str.length; i++) {
    //   result = str[i] + result
    // }
    for (var i = str.length - 1; i >= 0; i--) {
      result += str[i]
    }
    return result
  };
  /**
    input: "hello"
    output: "olleh"
  */
  console.log(reverse("hello"))