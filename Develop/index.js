// TODO: Include packages needed for this application
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const inquirer = require('inquirer');
const path = require('path');
// TODO: Create an array of questions for user input
const questions = [
    {
        name: 'title',
        message: 'What is your project title?',
        type: 'input'
        
    },

    {
        name: 'description',
        message: 'What is the description of this project?',
        type: 'input'

    },
  
    {
        name: 'instructions',
        message: 'Give instructions for your project!',
        type: 'input'
    },
    {
        name: 'usage',
        message: 'How do you use this?',
        type: 'input'
    },
    {
        name: 'license',
        message: 'What is your project license?',
        type: 'list',
        choices: ["afl-3.0", "apache-2.0", "artistic-2.0" ]
    },
    {
        name: 'contributing',
        message: 'Who contributed & what were their roles?',
        type: 'input'
    },
    {
        name: 'Github',
        message: 'Enter Github username;',
        type: 'input'
    },
    {
        name: 'Email',
        message: 'Enter Email address:',
        type: 'input'
    }
];

// TODO: Create a function to write README file
const writeToFile = (fileName, data) => {
    const filePath = path.join(__dirname, fileName);
    fs.writeFile(filePath, data, (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log(`README.md file generated as ${filePath}!`);
        }
    });
};

// TODO: Create a function to initialize app
function init() {
     inquirer.prompt(questions)
          .then((answers) => {
           const readmeContent = generateMarkdown(answers);
           writeToFile('Readme.md', readmeContent);
          })
          .catch((error) => {
            console.error(error);
          });
}

// Function call to initialize app
init();
