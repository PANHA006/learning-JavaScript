console.log("Lesson 7 JS file is running!");

// --- Section 1: What is DOM? ---
const title1 = document.querySelector('#title');
const btn1 = document.querySelector('#btn');
// // old way
// btn1.onclick = function(){
//     title1.innerText = "Hello World!";
// }

// modern way 
btn1.addEventListener('click', () => {
    title1.innerText = "Hello World!";
});

const title2 = document.querySelector('#title2');
const btn2 = document.querySelector('#btn2');
// // old way
btn2.onclick = () => {
    title2.innerText = "I LOVE YOU ❤❤";
};

// .innerText / .textcontent        // Change text
// .innerHTML                       // Change HTML
// .style.property                  // Change color
// .createElement()                 // add new element
// .appendChild()                   // add new element
// .remove()                        // remove element
// .classList.add()                 // add class
// .classList.remove()              // remove class
// .addEventListener()              // add event listener

const noteClass = document.querySelector('.note');
noteClass.style.color = 'green';
noteClass.style.fontWeight = 'bold';

// --- Section 3: Changing Content and Style ---

// const xxx = document.querySelector('.xxx');
// const newChild = document.createElement('p');
// newChild.innerText = "I am a new child";
// newChild.classList.add('new-child');
// xxx.appendChild(newChild);

// .innerText / .textContent                Change text
// .innerHTML                               Change HTML
// .getattribute('class')                   Get attribute
// .setattribute('class', 'new-class')      Set attribute
// .removeAttribute('class')                Remove attribute
// .style.property = 'value'                Change style
// .classList.add('new-class')              Add class
// .classList.remove('new-class')           Remove class
// .classList.toggle('new-class')           Toggle class

// write example with attributes
const photo = document.querySelector('.photo');
// use get attribute
console.log(photo.getAttribute('src'));
// use set attribute
photo.setAttribute('src', 'https://cdn-icons-png.freepik.com/512/2175/2175188.png');
// use style
photo.style.width = '200px';
// use remove attribute
photo.removeAttribute('src');
// remove element
photo.remove();

const changeStyleBtn = document.getElementById('changeStyleBtn');
const changeContentAndStyle = document.getElementById('main-title-style');

changeStyleBtn.onclick = () => {
    changeContentAndStyle.style.color = "red";
    changeContentAndStyle.style.fontSize = "50px";
    changeContentAndStyle.innerText = "I LOVE YOU ❤❤";
};

// --- Section 4: Event Listeners ---
const container = document.querySelector('#container');
const changeTextBtn = document.getElementById('changeTextBtn');
const reverseTextBtn = document.getElementById('reverseTextBtn');
const addNewElementBtn = document.getElementById('addNewElementBtn');
const removeTextBtn = document.getElementById('removeTextBtn');
const removeNewTextBtn = document.getElementById('removeNewTextBtn');

changeTextBtn.addEventListener('click', () => {
    const text = document.querySelector('#text');
    if (text) text.textContent = 'Hello, JavaScript!';
});

reverseTextBtn.addEventListener('click', () => {
    const text = document.querySelector('#text');
    if (text) text.textContent = 'Hello, World!';
})

addNewElementBtn.addEventListener('click', () => {
    const newElement = document.createElement('p');
    newElement.textContent = 'This is a new element';
    newElement.id = 'text2';
    container.appendChild(newElement);
});

removeTextBtn.addEventListener('click', () => {
    const text = document.querySelector('#text');
    if (text) container.removeChild(text);
});

removeNewTextBtn.addEventListener('click', () => {
    const text = document.querySelector('#text2');
    if (text) {
        container.removeChild(text);
    }
});

// Note
// document.createElement('tag')                // Create new element
// .innerText / .textContent                   // Add text
// .appendChild()                              // Add element to parent
// .insetBefore()                              // Add element before another element
// .removeChild()                              // Remove element
// .remove()                                   // Remove element

// --- Section 5: DOM Events (User Interaction) ---

// Note of Common event Types
// .click                   // User clicks on an element
// .dblclick                // User double clicks on an element
// .mouseover               // User hovers over an element
// .mouseout                // User stops hovering over an element
// .keydown                 // User presses a key on the keyboard
// .keyup                   // User releases a key on the keyboard
// .input                   // User types into an input field
// .submit                  // User submits a form
// .change                  // User changes the value of an input field
// .focus                   // User focuses on an input field
// .load                    // Page has finished loading

const btnAddEventListener = document.querySelector('#btn-addEventListener');
btnAddEventListener.addEventListener('click', () => {
    alert('Hello Students!');
})

// add style to button
const btnAddStyle = document.querySelector('#btn-need-class');
btnAddStyle.addEventListener('click', () => {
    btnAddStyle.classList.add('btn-style');
})

// Event with innput
const input = document.querySelector('.input');
const displayName = document.querySelector('#displayName');

input.addEventListener('input', () => {
    displayName.textContent = "Hello Wellcome to my website " + input.value;
})

// Example: Form Submit Event
const form = document.querySelector('#form');
const displayUserName = document.querySelector('#displayUserName');
form.addEventListener('submit', (event) => {
    event.preventDefault();         // stop page from reloading
    const username = document.querySelector('#username').value;
    displayUserName.innerText = "Hello, Wellcome to my website " + username + "!!";
});

// Mouse Events Example:
const box = document.querySelector('#box');
box.addEventListener('mouseover', () => {
    box.style.backgroundColor = 'yellow';
});

box.addEventListener('mouseout', () => {
    box.style.backgroundColor = 'lightgray';
});

// Keyboard Event Example
const typeBox = document.querySelector('#typeBox');
const showKey = document.querySelector('#showKey');
typeBox.addEventListener('keydown', (e) => {
    showKey.innerText = "You pressed " + e.key;
});

// Toggle Text with Button
const message = document.querySelector('#message');
const toggleButton = document.querySelector('#toggleBtn');
toggleButton.addEventListener('click', () => {
    if (message.style.display === 'none') {
        message.style.display = 'block';
        toggleButton.innerText = 'Hide Message';
    } else {
        message.style.display = 'none';
        toggleButton.innerText = 'Show Message';
    }
});

// --- Section 6: DOM Traversing (Navigating the DOM Tree) ---
// Note :
// .parentElement                    // Move up one level
// .children                         // Get all child elements
// .firstElementChild                // Get first child element
// .lastElementChild                 // Get last child element
// .nextElementSibling               // Get next sibling element
// .previousElementSibling           // Get previous sibling element
// .children[n]                      // Get specific child element

// --- Section 7: Changing HTML Dynamically ---

const counterTitle = document.querySelector('#counterTitle');
const count = document.querySelector('#count');
const incrementButton = document.querySelector('#increase');
const decrementButton = document.querySelector('#decrease');
const resetButton = document.querySelector('#reset');

let countValue = 0;

incrementButton.addEventListener('click', () => {
    countValue++;
    count.innerText = countValue;
    if (countValue > 0) {
        count.style.color = 'green';
    } else if (countValue < 0) {
        count.style.color = 'red';
    } else {
        count.style.color = 'black';
    }
});

decrementButton.addEventListener('click', () => {
    countValue--;
    count.innerText = countValue;
        if (countValue > 0) {
        count.style.color = 'green';
    } else if (countValue < 0) {
        count.style.color = 'red';
    } else {
        count.style.color = 'black';
    }
});

resetButton.addEventListener('click', () => {
    countValue = 0;
    count.innerText = countValue;
        if (countValue > 0) {
        count.style.color = 'green';
    } else if (countValue < 0) {
        count.style.color = 'red';
    } else {
        count.style.color = 'black';
    }
});


