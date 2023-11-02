//if we have a function inside the module that we invoke that code runs even though we didn't assign it to a variable n invoke it

//some basic functionalities

const num1 = 5;
const num2 = 10;

function addValues(){
    console.log(`the sun is : ${num1 + num2}`);
}

//funtion executed which is invoked in app.js
addValues()