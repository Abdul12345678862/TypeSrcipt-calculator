#! /usr/bin/env node
import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "Enter firstNumber", type: "number", name: "firstNumber" },
  { message: "Enter secondNumber", type: "number", name: "secondNumber" },
  {
    message: "Select operator",
    type: "list",
    name: "operator",
    choices: ["addition", "subtraction", "multiplication", "divison"],
  },
]);
if (answer.operator === "addition"){
  console.log("Your value is: " + (answer.firstNumber+answer.secondNumber));
}
else if (answer.operator === "subtraction"){
  console.log("Your value is: " + (answer.firstNumber - answer.secondNumber));
}
else if (answer.operator === "multiplication"){
  console.log("Your value is: "+ (answer.firstNumber*answer.secondNumber));
}
else if (answer.operator === "divison"){
  console.log("Your value is: "+ (answer.firstNumber/answer.secondNumber));
}