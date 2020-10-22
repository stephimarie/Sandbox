// Write code to add all the numbers in `arr` and ***return*** the total.
// var numArr = [1, 2, 3, 4];
// var numArr2 = [1, 2, 3.23, 4, 5, 6.34243324, 7, 8, 9];
// var sumArray = function (arr) {
//   var result = 0;
//   for (var i = 0; i < arr.length; i++) {
//     result += arr[i];
//   }
//   return result;
// };
// console.log(sumArray(numArr))
// console.log(sumArray(numArr2))
// Challenge 2
// Write a function that takes in an array of numbers and outputs the maximum number.
// Ex:
// Input: [ 1, 2, 3 ]
// Output: 3
// Input: [ 3, 6, 4, 5, 2, 1 ]
// Output: 6
// Input: [ 3, 3, 3 ]
// Output: 3
var numArr = [1, 2, 9, 5, 6];
var numArr2 = [1, 2, 9, 5, 6, 20];
var findMax = function (arr) {
  var maxNum = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxNum) {
      maxNum = arr[i];
    }
  }
  console.log(maxNum);
};
findMax(numArr)
findMax(numArr2)
findMax([2, 3, 4, 56, 3, 2])
