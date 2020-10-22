var myImg = document.querySelector("#myImg")

var stateAttr = myImg.getAttribute("data-state")
var animateAddress = myImg.getAttribute("data-animate")
var stillAddress = myImg.getAttribute("data-still")

myImg.addEventListener("click", function () {
    console.log(stateAttr)
    if (stateAttr === "still") {
        stateAttr = "animate"
        myImg.setAttribute("src", animateAddress)
        console.log("this should now animate")
    }    else {
        stateAttr = "still "
        myImg.setAttribute("src", stillAddress)
        console.log("this should now be still") 
    }
})

// Use the attribute - then you use the getattribute