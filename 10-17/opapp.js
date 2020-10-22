var formInput = document.querySelector("#formInput")
var textInput = document.querySelector("#textInput")
var pwInput = document.querySelector("#pwInput")

formInput.addEventListener("submit", function (e) {
    e.preventDefault()
    console.log ("hello")

    var user = {
        name: textInput.value,
        pw: pwInput.value
    }

    console.log(user)

    localStorage.setItem("user", JSON.stringify(user))
    // localStorage.setItem("user", user)
})

var userObject = localStorage.getItem("user")
console.log(JSon.parse(userObject.name))

// objects are heavy in the browser - in light weight characters -
// - max 5mega bits of local storage and you can save more
// its better to display/Save in a string then in an object because of weight of file
