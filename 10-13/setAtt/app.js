// console.log(document.body.children[0])

let pElement = document.getElementById("changeMe");
let aDirect = document.getElementById("directMe")
let aDirect2 = document.querySelector("#directMe")
let allH1 = document.querySelectorAll("h1")

// allH1.setAttribute("class", "betterHeading")

aDirect2.setAttribute("href", "https://www.google.com")


console.log(allH1)

for (let i = 0; i < allH1.length; i++) {
  const element = allH1[i];
  console.log(element)
  element.setAttribute("class", "betterHeading")
}

pElement.setAttribute("class", "redText")