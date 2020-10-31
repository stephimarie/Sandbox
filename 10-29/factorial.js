// In this activity, you will be writing code to create a function that returns the factorial of a given number. A **factorial** of a number is the product of all positive integers less than or equal to the number. For more information, see the [Wikipedia page on factorials](https://en.wikipedia.org/wiki/Factorial).
// ## Instructions
//     * Return the factorial of the given `num` integer.
//     * See the following code for an example:
//       var num = 3;
//     * Given the preceding number, the following should be returned:
//       6;
      // 1 x 2 x 3 === 6 (edited) 

      var factorial = function (num) {
          let answer = 1
        //   declare answer
        for (var i = 1; i <= num; i++) {
            answer = i * answer
        }
        return answer
      }

      console.log(factorial(5))

      /
      /*
      5!=1*2*3*4*5

      function factorialize(num) {
        return num;
      }
      factorialize(5);



      function factorialize(num) {
        // If the number is less than 0, reject it.
        if (num < 0) 
              return -1;
          
        // If the number is 0, its factorial is 1.
        else if (num == 0) 
            return 1;
          
        // Otherwise, call the recursive procedure again
          else {
              return (num * factorialize(num - 1));
              /* 
              First Part of the recursion method
              You need to remember that you won’t have just one call, you’ll have several nested calls
              
              Each call: num === "?"        	         num * factorialize(num - 1)
              1st call – factorialize(5) will return    5  * factorialize(5 - 1) // factorialize(4)
              2nd call – factorialize(4) will return    4  * factorialize(4 - 1) // factorialize(3)
              3rd call – factorialize(3) will return    3  * factorialize(3 - 1) // factorialize(2)
              4th call – factorialize(2) will return    2  * factorialize(2 - 1) // factorialize(1)
              5th call – factorialize(1) will return    1  * factorialize(1 - 1) // factorialize(0)
              
              Second part of the recursion method
              The method hits the if condition, it returns 1 which num will multiply itself with
              The function will exit with the total value
              
              5th call will return (5 * (5 - 1))     // num = 5 * 4
              4th call will return (20 * (4 - 1))    // num = 20 * 3
              3rd call will return (60 * (3 - 1))    // num = 60 * 2
              2nd call will return (120 * (2 - 1))   // num = 120 * 1
              1st call will return (120)             // num = 120
              
              If we sum up all the calls in one line, we have
              (5 * (5 - 1) * (4 - 1) * (3 - 1) * (2 - 1)) = 5 * 4 * 3 * 2 * 1 = 120
                  }
      }
              */
      
      factorialize(5);