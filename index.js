// packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');
// const writeToFile = require("./src/generateMarkdown");
const generatePage = require('./src/page-template');
//
// const userInput = process.argv.slice(2, process.argv.length);
// const [title, data] = userInput;
// const printInputData = (readDataArgs) => {
//   readDataArgs.forEach((promptResponse) => console.log(promptResponse));
// };

// array of questions for user input
const promptUser = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What's your project's title?",
      validate: nameInput => {
        if (nameInput){
          return true;
        } else {
          console.log("Please enter your project's title");
          return false;
        }
      }
    },
    {
      type: "input",
      name: "description",
      message: "What is the app for? (Provide a description of the project)",
      validate: nameInput => {
        if(nameInput){
          return true;
        } else {
          console.log("Please enter a description of the project");
          return false;
        }
      }
    },
    {
      type: "checkbox",
      name: "languages",
      message: "What did you build this project with?",
      choices: [
        "JavaScript",
        "HTML",
        "CSS",
        "ES6",
        "jQuery",
        "Bootstrap",
        "Node",
      ],
    },
    {
      type: "input",
      name: "install",
      message: "How can one intall it?",
      validate: nameInput => {
        if(nameInput){
          return true;
        } else {
          console.log("Enter instructions");
          return false;
        }
      }
    },
    {
      type: "input",
      name: "usage",
      message: "How can one use it?",
      validate: nameInput => {
        if(nameInput){
          return true;
        } else {
          console.log("Indicate how to use your app");
          return false;
        }
      }
    },
    { 
      type: "list",
      name: "license",
      message: "Which Liscense?",
      choices: [
        "MIT",
        "Apache",
        "GPL",
        "BSD-2",
        "BSD-3",
        "BSD-4",
      ]
    },
    {
      type: "input",
      name: "contribution",
      message: "How can one contribute?",
    },
    {
      type: "input",
      name: "link",
      message: "How can one test your code?",
      validate: nameInput => {
        if(nameInput){
          return true;
        } else{
          console.log("Enter GitHub Pages URL or other method to test code");
          return false;
        }
      }
    },
    {
      type: "input",
      name: "contact",
      message: "For more questions, how can one contact you?",
    },
    {
      type: "confirm",
      name: "confirmAddSection",
      message: "Would you like to enter another section?",
      default: false,
    },
    {
      type: 'input',
      name: 'sectionTitle',
      message: "Enter the section title",
      when: ({confirmAddSection})=> {
        if(confirmAddSection){
          return true;
        } else {
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'sectionInfo',
      message: "Enter the information you want added",
      when: ({sectionTitle})=>{
        if(sectionTitle){
          return true;
        } else{
          return false;
        }
      }
    }
  ]);
};

promptUser().then((answers)=> {
  const README = generatePage(answers);
 fs.writeFile("README.md", README,(err) => {
    if (err) throw err;
    console.log('README file has been created. Check it out!');
  });
 });

// printInputData(userInput);