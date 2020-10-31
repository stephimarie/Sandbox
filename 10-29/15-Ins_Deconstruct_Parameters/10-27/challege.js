// Write a function that takes in an array of numbers and outputs the average of all the numbers.
// Ex:
// Input: [ 1 , 4 , 7 ]
// Output: 4
// Input: [ 10, 5 ]
// Output: 7.5
// Input: [ 1.5, 3, 2.5, 1 ]
// Output: 2

var average = function(numArr){
    var sum = 0
    for(var i = 0; i < numArr.length; i++){
      sum += numArr[i]
    }
    return sum / numArr.length
  }
  console.log("First example: ", average([ 1.5, 3, 2.5, 1 ]))
  console.log("Second example: ", average([ 10, 5 ]))
  var arrOfNums = [ 1 , 4 , 7 ]
  console.log("Third example: ", average(arrOfNums))