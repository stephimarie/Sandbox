var eventType = document.querySelector("#event-type"); 
var mouseEventsEl = document.querySelector("#click-events");
var keyEventsEl = document.querySelector("#key-events");

function toggleDisplay(event) {
  var value = event.getElementById("event-type").value;
  if(value === "keydown") {
    mouseEventsEl.classList.add("hide");
    keyEventsEl.classList.remove("hide");
  }
  else {
    mouseEventsEl.classList.remove("hide");
    keyEventsEl.classList.add("hide");
  }
}

document.addEventListener("keydown", function(event){
  console.log(event.code)
})

// zip drive and screenshot for answer 