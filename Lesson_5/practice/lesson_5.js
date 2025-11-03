console.log("Lesson 5 JavaScript file loaded.");
// 1. Objects

// Objects syntax
// const objectName = {
//  key1: value1,
//  key2: value2,
//  key3: value3,
//  key4: value4,
//  key5: value5,
// };

const person = {
    fullName: "LAO panha",
    age: 21,
    gender: "Male",
    isMarried: false,
    hobbies: ["Coding", "Music", "Playing games"],
    address: {
        street: "St. 271",
        city: "Phnom Penh",
        country: "Cambodia",
    }
};

// Accessing object properties

// console.log(person.fullName);
// console.log(person["age"]);

// Accessing nested object properties
// console.log(person.address.city);
// console.log(person.address.country);

// Updating object properties
// person.fullName = "LAO PANHA";
// person.age = 25;
// person.isMarried = true;
// person.address.city = "Phnom Penh City";
// person.address.country = "Cambodia"
// console.log(person);

// Adding new properties to an object
// person.occupation = "Student";
// person["school"] = "Kirirom School";
// console.log(person);

// Removing properties from an object
// delete person.address;
// delete person.isMarried;
// console.log(person);

// 2. Array

// arrays syntax
// let arrName = [
//  value1,
//  value2,
//  value3,
//  ......
// ];

let fruits = [
    "Apple", 
    "Banana", 
    "Orange", 
    "Mango"
];

// Accessing array elements
// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);
// console.log(fruits[3]);

// Modifying array elements
// fruits[0] = "Pineapple";
// fruits[1] = "Kiwi";
// console.log(fruits);

// Adding new elements to an array
// fruits.push("Lemon");  // add new element to the end of the array
// fruits.unshift("Strawberry"); // add new element to the beginning of the array
// fruits.splice(2, 0, "Grapes"); // add new element at index 2 (index, remove, add)
// console.log(fruits);

// Removing elements from an array
// fruits.pop(); // remove the last element
// fruits.shift(); // remove the first element
// fruits.splice(2, 1); // remove element at index 2 (indes, remove, add)
// console.log(fruits);

// 3. Use for of loop to iterate over an array
for (let fruit of fruits) {
    console.log(fruit);
}

// 4. Use for in method to iterate over an object
for (let key in person) {
    console.log(key, person[key]);
}