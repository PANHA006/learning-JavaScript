console.log("Lesson 3 JavaScript file loaded.");

// 1. Condition Statement
// + if statement
let x = 10;
if (x > 4) {
  console.log("x is greater than 4");
}
// + if else statement
let xx = 10;
if (xx > 4) {
  console.log("xx is greater than 4");
}else {
  console.log("xx is less than 4");
}
// + if else if else statement
let xxx = 10;
if (xxx > 4) {
  console.log("xxx is greater than 4");
}else if (xxx < 4) {
  console.log("xxx is less than 4");
}else {
  console.log("xxx is equal to 4");
}
// + switch statement
let day = 3;
switch (day) {
    case 1:{
        console.log("Monday");
        break;
    }case 2:{
        console.log("Tuesday");
        break;
    }case 3:{
        console.log("Wednesday");
        break;
    }case 4:{
        console.log("Thursday");
        break;
    }case 5:{
        console.log("Friday");
        break;
    }case 6:{
        console.log("Saturday");
        break;
    }case 7:{
        console.log("Sunday");
    }default:{
        console.log("Invalid day");
    }
}

// 2. Iteration Statement
// + for loop
for (let i = 0; i < 5; i++) {
  console.log(i);
}
// + while loop
let j = 0;
while (j < 5) {
  console.log(j);
  j++;
}
// + do while loop
let k = 0;
do {
  console.log(k);
  k++;
} while (k < 5);
// + for of loop (array)
let arr = [1, 2, 3, 4, 5];
for (let val of arr) {
  console.log(val);
}
// + for in loop (object)
let obj = {a: 1, b: 2, c: 3};
for (let key in obj) {
  console.log(key, obj[key]);
}
// 3. jump statement
// + break
// + continue
// + return
// + throw
