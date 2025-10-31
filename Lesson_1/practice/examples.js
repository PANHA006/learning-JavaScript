console.log("External JS from examples.js is running!");

const originalText = "I am the original text.";
const newText = "The text has been changed by JavaScript!";

/**
 * Section 3 Example: Changes the text of an element.
 */
function changeText1() {
    const textElement = document.getElementById('textToChange1');
    const buttonElement = document.getElementById('changeTextBtn1');
    if (textElement.innerText === originalText) {
        textElement.innerText = newText;
        buttonElement.innerText = 'Revert'; // Corrected from previous state
    } else {
        textElement.innerText = originalText;
        buttonElement.innerText = 'Change'; // Corrected from previous state
    }
}
const oldText2 = "I Love You❤❤❤";
const newText2 = "I Love You Too❤❤❤";
function changeText2() {
    const text = document.getElementById('textToChang2');
    const button = document.getElementById('changeTextBtn2');
    if (text.innerText === oldText2) {
        text.innerText = newText2;
        button.innerText = 'Revert Text';
    }else {
        text.innerText = oldText2;
        button.innerText = 'Change Text';
    }

}
/**
 * Section 5 Example: Runs the "Hello World" program in the console.
 */
function runHelloWorld() {
    console.log("Hello World");
}