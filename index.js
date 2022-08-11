// TODO: Include packages needed for this application
const userInput = process.argv.slice(2, process.argv.length);
const [title, data]= userInput;
const fs = require('fs');
const licenseMod = require('./utils/generateMarkdown');
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
const questions = [description, install, usage, license, contribution, test, contact];
  


// TODO: Create a function to write README file
const writeToFile = (fileName, data) => {
  return `
  # ${fileName} 
 ${data}

 ## Table of Contents
 - [Installation](#installation)
 - [Usage](#usage)
 - [Credits](#credits)
 - [License](#license)
 - [Contribution](#contribution)
 - [Test](#test)
 - [Contact](#contact)

 ### Installation
 ${data}

 ### Usage
 ${data}

 ### License
 ${data}

 ### Contributions
 ${data}

 ### Test
 ${data}

 ### Contact
 ${data}
  `
    };
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
