function sayHello() {
    var message = "Hello"
    function sayMessage() {
      console.log(message + " You cant change me")
    }
    function changeMessage(str) {
      message = str
    }
    return { sayMessage, changeMessage }
  }
  console.log(sayHello)
  var test = sayHello()
  console.log(test)
  test.sayMessage()
  test.changeMessage("BYYYEEEEE")
  test.sayMessage()