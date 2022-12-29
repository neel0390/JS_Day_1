// 1. == & ===
var x = "2";
var y = 2;
console.log(x == y);
console.log(x === y);
//2. Spread and Rest operators.
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr = [...arr1, ...arr2];
console.log(arr);
// rest operator introduced in ES5 and it allows us to structure the nonPDTs like arrya and objects.
const arrr = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(...arrr);
// here we are destructuring...elements of array....
var [x, y, z, ...rest] = arrr;
console.log(x);
console.log(y);
console.log(z);
console.log(...rest);
var [...rest] = arr1;
console.log(...rest);
//3. var let const
// reference error bcz before intialization we cannot log
// console.log(a);
let a = 10;
// console.log(b);
// const b=10;
// console.log(c);
// var c=10;
// 6.
function outer() {
  var x = 10;
  function inner() {
    console.log(x);
    let x = 20;
  }
  return inner();
}
let outt = outer();
console.log(outt());

// 5.
let myfunction = function () {
  console.loh("hi");
};
myfunction();

function greet() {
  console.log("Happy");
}
function specialgreet(callback, message) {
  console.log(callback(), message);
}
specialgreet(greet, "Christmas friend");

function outer() {
  var x = 10;
  function inner() {
    console.log(x);
  }
  return inner();
}
let out = outer();
console.log(out());
// 7.
var emp1 = {
  name: "sam",
  age: 22,
};
var emp2 = {
  name: "ram",
  age: 24,
};
function greeting(wish1, wish2) {
  console.log(wish1 + "this.name" + wish2);
}
greeting.call("Hello!", "How are you!");
greeting.apply(emp2, ("Good Morning!", "Have some tea.."));
var grreting1 = greeting.bind(emp1);
var grreting2 = greeting.bind(emp2);
greeting1 = ("hi", "how are you");
greeting2 = ("good nyt", "go to sleep..");
