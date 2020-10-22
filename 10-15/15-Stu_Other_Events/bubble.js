var outerDiv = document.querySelector(".outer-div")
var innerDiv = document.querySelector(".inner-div")
var mostInner = document.querySelector(".most-inner-div")

outerDiv.addEventListener("click", function () {
    event.stopPropagation()
    console.log("hello from the outer-div") 
})

innerDiv.addEventListener("click", function () {
    event.stopPropagation()
    console.log("hello from the inner-div") 
})

mostInner.addEventListener("click", function () {
    event.stopPropagation()
    console.log("hello from the most inner-div") 
})