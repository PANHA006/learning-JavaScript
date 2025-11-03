console.log("Lesson 4 JavaScript file loaded.");

const greet = () => {
  console.log("Welcome to JavaScript!!");
}

// callback
const sayHello = (callback) => {
  console.log("Hello");
  callback();
}

const callback = () => {
  console.log("This function is called after sayHello function");
}

function sayHi1() {
  console.log("Hi");
}

const sayHi2 = function(){
  console.log("Hi");
}

const sayHi3 = () => {
  console.log("Hi");
}

const sayHi4 = () => console.log("Hi");

