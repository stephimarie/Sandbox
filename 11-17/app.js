//new declaration
const sayThing = (cb) => {
    cb();
  };
  // old declaration
  function sayThingOld(cb) {
    cb();
  }
  sayThingOld(function () {
    console.log("Hello old way");
  });
  sayThing(() => {
    console.log("hello node!");
  });

 
  const me = {
    name: "Thomas",
    sayName: function () {
      console.log(this.name);
    },
  };
  me.sayName();
  const car = {
    make: "Honda",
    startCar: function () {
      setTimeout(() => {
        console.log(this.make + " started");
      }, 1000);
    },
  };
  car.startCar();
  // setTimeout(function () {
  //   console.log("Happened");
  // }, 1000);

  const arrow = (str) => {
    return str.toUpperCase() + "!";
  };
  //const arrow = (str) => str.toUpperCase() + "!";
  const message = arrow("Hi");
  console.log(message);

  const moviePatrons = [
    { name: "Tom", age: 16 },
    { name: "Ashley", age: 31 },
    { name: "Sarah", age: 18 },
    { name: "Alvin", age: 22 },
    { name: "Cherie", age: 14 },
    { name: "Malcolm", age: 15 },
  ];
  // for (let i = 0; i < moviePatrons.length; i++) {
  //   console.log(moviePatrons[i]);
  // }
  // moviePatrons.forEach((item, i) => {
  //   console.log(item, i);
  // });
  const mypatrons = moviePatrons.map((patron) => {
    // this is called the spread operator
    const pObj = { ...patron };
    if (pObj.age >= 17) {
      pObj.canWatchRateR = true;
    } else {
      pObj.canWatchRateR = false;
    }
    return pObj;
  });
  // Its a pure function because it doesn't change the array it was passed
  console.log(mypatrons);
  // original array is unaffected
  console.log(moviePatrons);

  // ordinary
function add(x, y) {
  return x + y;
}
// arrow function
const add = (x, y) => {
  return x + y;
}
// arrow function (without return / return directly)
const add = (x, y) => x + y;

const moviePatrons = [
  { name: "Tom", age: 16 },
  { name: "Ashley", age: 31 },
  { name: "Sarah", age: 18 },
  { name: "Alvin", age: 22 },
  { name: "Cherie", age: 14 },
  { name: "Malcolm", age: 15 },
];
// for (let i = 0; i < moviePatrons.length; i++) {
//   console.log(moviePatrons[i]);
// }
// forEach like basic for-loop
// moviePatrons.forEach((item, i) => {
//   console.log(item, i);
// });
// map can return items to new var
const mypatrons = moviePatrons.map((patron) => {
  // this is called the spread operator
  const pObj = { ...patron };
  if (pObj.age >= 17) {
    pObj.canWatchRateR = true;
  } else {
    pObj.canWatchRateR = false;
  }
  return pObj;
});
// Its a pure function because it doesn't change the array it was passed
console.log("patrons with new value added", mypatrons);
// original array is unaffected
console.log("original array after map", moviePatrons);
const canWatchRatedR = moviePatrons.filter((patron) => {
  return patron.age > 17;
});
//const canWatchRatedR = moviePatrons.filter((patron) => patron.age > 17);
console.log("filtered array", canWatchRatedR);

const colors = require("colors");
function makeCaps(str, cb) {
  cb(str.toUpperCase());
}
function makeTrappy(str, cb) {
  cb(str.trap);
}
function makeCyan(str, cb) {
  cb(str.cyan);
}
makeCaps("Hello", (capsRes) => {
  makeTrappy(capsRes, (trappyRes) => {
    makeCyan(trappyRes, (cyanRes) => {
      console.log(cyanRes);
    });
  });
});

const colors = require("colors");
function makeCaps(str, cb) {
  if (typeof str !== "string") cb("must be of type string");
  cb(null, str.toUpperCase());
}
function makeTrappy(str, cb) {
  cb(str.trap);
}
function makeCyan(str, cb) {
  cb(str.cyan);
}
makeCaps(5, (err, capsRes) => {
  if (err) throw err;
  makeTrappy(capsRes, (trappyRes) => {
    makeCyan(trappyRes, (cyanRes) => {
      console.log(cyanRes);
    });
  });
});