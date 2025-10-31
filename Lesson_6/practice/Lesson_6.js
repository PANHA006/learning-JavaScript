console.log("Lesson 6 JS file is running!");

console.log("\n--- Section 2: Passing an Array to a Function ---");
function printArray(arrs) {
    for (let arr of arrs) {
        console.log(arr);
    }
}
let myArray = [1, 2, 3, 4, 5];
printArray(myArray);

console.log("\n--- Section 3: Sum All Numbers in an Array ---");
function sumArray(arr) {
    let sum = 0;
    for (let num of arr) {
        sum += num;
    }
    return sum;
}
let numbersForSum = [1, 2, 3, 4, 5];
console.log(sumArray(numbersForSum)); // Output: 15

console.log("\n--- Section 4: Find Maximum Number in an Array ---");
function findMax(arr) {
    if (arr.length === 0) {
        return undefined; // Handle empty array case
    }
    let max = arr[0];
    for (let num of arr) {
        if (num > max) {
            max = num;
        }
    }
    return max;
}
let numbersForMax = [1, 2, 3, 4, 5];
console.log(findMax(numbersForMax)); // Output: 5

console.log("\n--- Section 5: Passing Objects to Functions ---");
function sumObject(obj) {
    let sum = 0;
    for (let key in obj) {
        if (typeof obj[key] === 'number') { // Ensure we only add numbers
            sum += obj[key];
        }
    }
    return sum;
}
let myObject = {a: 1, b: 2, c: 3};
console.log(sumObject(myObject)); // Output: 6

console.log("\n--- Section 6: Returning an Object from a Function ---");
function calculate(num1, num2) {
    return {
        sum: num1 + num2,
        difference: num1 - num2,
        product: num1 * num2,
        quotient: num2 !== 0 ? num1 / num2 : "Cannot divide by zero"
    };
}
let result = calculate(10, 5);
console.log(result); // Output: { sum: 15, difference: 5, product: 50, quotient: 2 }

console.log("\n--- Section 7: Array of Objects Example ---");
let students = [
    { name: "Bannya", score: 85 },
    { name: "Sok", score: 74 },
    { name: "Dara", score: 91 }
];
function showHighScore(studentArray) {
    if (studentArray.length === 0) return null;
    let maxScoreStudent = studentArray[0];
    for (let student of studentArray) {
        if (student.score > maxScoreStudent.score) {
            maxScoreStudent = student;
        }
    }
    return maxScoreStudent;
}
let topStudent = showHighScore(students);
console.log(topStudent); // Output: { name: "Dara", score: 91 }

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
function calculateAverageGrade(studentArray) {
    if (studentArray.length === 0) return 0;
    let sum = 0;
    for (let student of studentArray) {
        sum += student.grade;
    }
    return sum / studentArray.length;
}
let averageGrade = calculateAverageGrade(studentGrades);
console.log(averageGrade); // Output: 86.25