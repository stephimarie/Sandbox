// Challenge 

var countdown = function (num) {
    for (var i = num; i > 0; i--) {
      console.log(i)
    }
  };
  countdown(10)

//   Challenge 2
// Write a function that takes in an integer and outputs the sum of all the numbers from 1 to that integer
// ex. 
// input: 2
// Output: 3 (because 0 + 1 + 2 =3)
// input: 4
// Output: 10 
// Total output: 55

var totalSum = function (num) {
    var sum = 0;
    for (var i = 0; i <= num; i++) {
      sum = sum + i
    }
    return sum
  }
  console.log(totalSum(2))
  console.log(totalSum(2) + 2)