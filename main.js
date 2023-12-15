// alert("Enter your name for information");
// const yourName = prompt("What is your name?");
// alert("Hello," + yourName + "! How are you?")
// console.log(yourName);

const a = parseFloat(prompt('Enter your first number'))
const b = parseFloat(prompt('Enter your second number'))


const sum = a + b;
const difference = a - b;
const product = a * b;
const quotient = a / b;

alert("User entered " + a + " and " + b + ":\n\n" +
                    a + " + " + b + " = " + sum + "\n" +
                    a + " - " + b + " = " + difference + "\n" +
                    a + " * " + b + " = " + product + "\n" +
                    a + " / " + b + " = " + quotient)