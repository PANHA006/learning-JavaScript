console.log("Lesson 7 JS file is running!");

// --- Section 1: What is DOM? ---
const title = document.getElementById("title");
const btn = document.getElementById("btn");

btn.addEventListener("click", function() {
    title.innerText = "Hello World";
});

// --- Section 3: Changing Content and Style ---
const changeStyleBtn = document.getElementById('changeStyleBtn');
changeStyleBtn.addEventListener('click', () => {
    const titleToStyle = document.querySelector('#main-title-style');
    // Change the text content of the element
    titleToStyle.textContent = 'Hello, JavaScript!';
    // Change the style of the element
    titleToStyle.style.color = 'blue';
    titleToStyle.style.fontSize = '24px';
});

// --- Section 4: Event Listeners ---
const myButton = document.querySelector('#myButton');
myButton.addEventListener('click', function() {
    alert('Button clicked!');
});

// --- Section 5: DOM Manipulation ---
const list = document.querySelector('#myList');
const addItemBtn = document.getElementById('addItemBtn');
const removeItemBtn = document.getElementById('removeItemBtn');
const updateItemBtn = document.getElementById('updateItemBtn');

addItemBtn.addEventListener('click', () => {
    // Add a new list item
    const newItem = document.createElement('li');
    newItem.textContent = 'Item 4';
    newItem.classList.add('list-item');
    list.appendChild(newItem);
});

removeItemBtn.addEventListener('click', () => {
    // Remove the first list item
    if (list.firstChild) {
        list.removeChild(list.firstChild);
    }
});

updateItemBtn.addEventListener('click', () => {
    // Change the text of the second list item (if it exists)
    if (list.children[1]) {
        list.children[1].textContent = 'Updated Item 2';
    }
});

// --- Section 6: Event Propagation ---
const parent = document.querySelector('#parent');
const child = document.querySelector('#child');

// Add event listeners for the capturing and bubbling phases
parent.addEventListener('click', function(event) {
    console.log('Parent CAPTURING phase');
}, true); // true for capturing phase

parent.addEventListener('click', function(event) {
    console.log('Parent BUBBLING phase');
}, false); // false for bubbling phase (default)

child.addEventListener('click', function(event) {
    console.log('Child TARGET/BUBBLING phase');
    // event.stopPropagation(); // Uncomment to stop the event from bubbling to the parent
}, false);

// --- Section 7: Changing HTML Dynamically ---
const container = document.querySelector('#container');
const changeTextBtn = document.getElementById('changeTextBtn');
const addNewElementBtn = document.getElementById('addNewElementBtn');
const removeTextBtn = document.getElementById('removeTextBtn');

changeTextBtn.addEventListener('click', () => {
    const text = document.querySelector('#text');
    if (text) text.textContent = 'Hello, JavaScript!';
});

addNewElementBtn.addEventListener('click', () => {
    const newElement = document.createElement('p');
    newElement.textContent = 'This is a new element';
    container.appendChild(newElement);
});

removeTextBtn.addEventListener('click', () => {
    const text = document.querySelector('#text');
    if (text) container.removeChild(text);
});