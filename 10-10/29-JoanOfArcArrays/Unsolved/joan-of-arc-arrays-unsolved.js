// Joan of Arc "properties".
var joanOfArcInfoParts = ["Real Name", "Grew Up Where", "Known For", "Scars", "Symbolism"];

// Values for Joan's "properties".
var joanOfArcInfoValues = [
  "Jehanne la Pucelle.",
  "Domremy, a village in northeastern France.",
  "Peasant girl, daughter of a farmer, who rose to become Commander of the French army.",
  "Took an arrow to the shoulder and a crossbow bolt to the thigh while trying to liberate Paris.",
  "Stands for French unity and nationalism."
];

for (let i = 0; i < joanOfArcInfoParts.length; 1++){
  console.log(`${joanOfArcInfoParts[i]}; ${joanOfArcInfoValues[i]}\n`)
}


// for (let i = 0; i < joanOfArcInfoParts.length; i++) {
//   console.log(`${joanOfArcInfoParts[i]}: ${joanOfArcInfoValues[i]}\n`)
// }
// for (let i = 0; i < joanOfArcInfoParts.length; i++) {
//   if (joanOfArcInfoParts[i] === "Real Name") {
//     console.log(joanOfArcInfoValues[i])
//   }
// }

let joan = {
  "Real Name": "Jehanne la Pucelle."
}

var input = "Grew Up Where"
var valueByIndex = joanOfArcInfoParts.indexOf(input)
console.log(valueByIndex)
console.log(joanOfArcInfoParts[valueByIndex] + ":", joanOfArcInfoValues[valueByIndex])