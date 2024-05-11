#!/usr/bin/evn node
//SHABING
import inquirer from "inquirer";
import chalk from "chalk";
let input1 = await inquirer.prompt([
    {
        name: "userAnswers",
        type: "string",
        message: "What is the capital of France."
    }
]);
function Quiz(question : string , correctAnswers : string) {
    if(input1.userAnswers.toLowerCase() === correctAnswers.toLowerCase()) {
        console.log(chalk.yellow("Correct!"));
} else {
    console.log(chalk.red("Wrong answer. Try Again."));
}
}
Quiz("What is the capital of France?", "Paris");