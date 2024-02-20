// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?'
  },
  {
    type: 'input',
    name: 'description',
    message: 'Enter a description of your project:'
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Enter installation instructions:'
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Enter usage information:'
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Enter contribution information:'
  },
  {
    type: 'input',
    name: 'test',
    message: 'Test instructions:'
  }, 
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license for your application:',
    choices: ['MIT', 'Apache', 'GPL', 'Other']
  },
  {
    type: 'input',
    name: 'github',
    message: 'Enter your GitHub username:'
  },
{
  type: 'input',
  name: 'email',
  message: 'Enter your email address:'
}

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFileSync(fileName, data);
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions)
  .then(userResponses => {
    const markdown = generateMarkdown(userResponses);
    writeToFile('README.md', markdown);
    console.log('README.md has been successfully generated!');
  })
  .catch(error => {
    console.error('An error occurred:', error);
  });
}

// Function call to initialize app
init();
