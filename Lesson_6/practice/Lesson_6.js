console.log("Lesson 6 JS file is running!");

console.log("\n--- Section 2: Passing an Array to a Function ---");
const array = [1, 2, 3, 4, 5];
const printArray = (array) => {
    for (let arr of array) {
        console.log(arr);
    }
}
printArray(array);

console.log("\n--- Section 3: Sum All Numbers in an Array ---");
let arrayNumber = [1, 2, 3, 4, 5];
const sumArray = function(arrays) {
    let totalSum = 0;
    for (let arr of arrays) {
        totalSum += arr;
    }
    return totalSum;
}
console.log(sumArray(arrayNumber));

console.log("\n--- Section 4: Find Maximum Number in an Array ---");
const findMax = [1, 2, 3, 4, 5];
const findMaxNumber = (arrays) => {
    let max = arrays[0];
    for (let arr of arrays) {
        if (arr > max) {
            max = arr;
        }
    }
    return max;
}
console.log(findMaxNumber(findMax));


console.log("\n--- Section 5: Passing Objects to Functions ---");
let objectPerson = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    occupation: "Developer"
};

function printObject(object) {
    for (let key in object) {
        console.log(`${key}: ${object[key]}`);
    }
}
printObject(objectPerson);

console.log("\n--- Section 6: Returning an Object from a Function ---");
function createPerson(firstName, lastName, age, occupation) {
    return {
        firstName: firstName,
        lastName: lastName,
        age: age,
        occupation: occupation
    };
}
let person = createPerson("John", "Doe", 30, "Developer");
console.log(person);
//output {
//     firstName: 'John',
//     lastName: 'Doe',
//     age: 30,
//     occupation: 'Developer'
//}

console.log("\n--- Section 7: Array of Objects Example ---");
let students = [
    {
        firstName: "John",
        lastName: "Doe",
        age: 30,
        occupation: "Developer"
    },
    {
        firstName: "Jane",
        lastName: "Doe",
        age: 25,
        occupation: "Designer"
    },
    {
        firstName: "Bob",
        lastName: "Smith",
        age: 35,
        occupation: "UX/UI Designer"
    }
];
// print all students
printArray(students); // use function printarray in section 2


console.log("\n--- Section 8: Modify Data Inside a Function ---");
let numbers = [1, 2, 3, 4, 5];
function addOne(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] += 1;
    }
}
addOne(numbers);
console.log(numbers); // Output: [2, 3, 4, 5, 6]

console.log("\n--- Section 9: Functions Returning Arrays ---");
let numbersToFilter = [1, 2, 3, 4, 5, 6];
function filterEven(arr) {
    let evenNumbers = [];
    for (let number of arr) {
        if (number % 2 === 0) {
            evenNumbers.push(number);
        }
    }
    return evenNumbers;
}
let evenResult = filterEven(numbersToFilter);
console.log(evenResult); // Output: [2, 4, 6]

console.log("\n--- Section 10: Practice Example – Student Average Function ---");
let studentGrades = [
    { name: "John", grade: 85 },
    { name: "Jane", grade: 90 },
    { name: "Bob", grade: 75 },
    { name: "Alice", grade: 95 },
];
function calculateAverageGrade(students) {
    let sum = 0;
    for (let student of students) {
        sum += student.grade;
    }
    return sum / students.length;
}
let averageGrade = calculateAverageGrade(studentGrades);
console.log(averageGrade); // Output: 86.25