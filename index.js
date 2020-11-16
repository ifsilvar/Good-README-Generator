const fs = require("fs");
const inquirer = require("inquirer");
const markDown = require("./generateMarkdown");
// array of questions for user
const questions = [
        {
            message: "What is the title of your project?",
            type: "input",
            name: "title",
        },
        {
            message: "What is the description of your project?",
            type: "input",
            name: "description",
        },
        {
            message: "What installation packages are required?",
            type: "input",
            name: "install",
        },
        {
            message: "How will your application be used?",
            type: "input",
            name: "usage",
        },
        {
            message: "What licenses are you using, select one?",
            type: "checkbox",
            choices: ["Apache 2.0", "GNU General Public License", "MIT", "Mozilla Public License"],
            name: "license",
        },
        {
            message: "Who is contributing to the project?",
            type: "input",
            name: "contribute",
        },
        {
            message: "What are the testing quidelines?",
            type: "input",
            name: "test",
        },
        {
            message: "What is your Github username?",
            type: "input",
            name: "username",
        },
        {
            message: "What is your email?",
            type: "input",
            name: "email",
        },


];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile("./" + fileName, data, function(err) {

        if (err) {
          return console.log(err);
        }
      
        console.log("Success!");
      
      });
}

// function to initialize program
function init() {
    inquirer.prompt(questions)
    .then(function(data){
        writeToFile("README.md", markDown(data));
    })

}

// function call to initialize program
init();
