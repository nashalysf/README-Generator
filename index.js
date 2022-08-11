// TODO: Include packages needed for this application
const fs = require('fs');
const licenseMod = require('./potential-enigma/Develop/utils/generateMarkdown');
const userInput = process.argv.slice(2, process.argv.length);
const [title, data] = userInput;
const writeToFile = require('./potential-enigma/Develop/utils/page-template');
let description = "What is the app for?";
let install = "How can one intall it?";
let usage = "How can one use it?";
let license = "Does it contain a Liscense?";
let contribution = "How can one contribute?";
let test = "How can one test your code?";
let contact = "For more questions, how can one contact you?";

const printInputData = (readDataArgs) => {
  readDataArgs.forEach((promptResponse) => console.log(promptResponse));
};

// TODO: Create an array of questions for user input
const questions = [
  description,
  install,
  usage,
  license,
  contribution,
  test,
  contact,
];


// TODO: Create a function to write README file

    fs.writeFile( "README.md", writeToFile(title, data),(err) => {
        if (err) throw err;
        console.log('README file has been created. Check it out!');
      });
console.log(writeToFile(title, data));
printInputData(userInput);

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
