#! /usr/bin/env node

import inquirer from "inquirer";

// Printing a Wellcome Message
console.log("\n\tWellcome To \ 'CodeWithAlam'- CLI SimpleCalculator\n");

const answer = await inquirer.prompt([
  { message: "Enter first number", type: "number", name: "firstNumber" },
  { message: "Enter second number", type: "number", name: "secondNumber" },
  {
    message: "sellect one of the operators to perform operation",
    type: "lists",
    name: "operator",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"],
  },
]);

// conditional statement
if (answer.operator === "Addition") {
  console.log (answer. firstNumber + answer. secondNumber);
}
else if (answer.operator === "subtraction") {
  console.log (answer. firstNumber - answer. secondNumber);
}
else if (answer.operator === "multiplication") {
  console.log (answer. firstNumber * answer. secondNumber);
}
  else if (answer.operator === "division") {
    console.log (answer. firstNumber / answer. secondNumber);
  }
console.log("please select a valid operator");






