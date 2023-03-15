const fs = require('fs');
const inquirer = require('inquirer');
const manager = require (`./lib/Manager`)





const menuQuestions = [
  {
    type: 'list',
    message: 'What do you like to do ?',
    name: 'menu',
    choices: [`add employee`, `quit`]
  },

]


const employeeQuestions = [
  {
    type: 'list',
    message: 'What type of employee do you what to be ?',
    name: 'employee',
    choices: [`manager`]
  },

]



const managerQ = [
  {
    type: `input`,
    message: `what is your name`,
    name: `name`,
  },
  {
    type: `input`,
    message: `what is your ID`,
    name: `ID`,
  },
  {
    type: `input`,
    message: `what is your email`,
    name: `email`,
  },
  {
    type: `input`,
    message: `what is your office number`,
    name: `officeNumber`,
  },



]

function addmanagerQ(){
  inquirer
  .prompt(managerQ)
  .then((answers) => { 
    const htmlPageContent = generateHTML(answers);
    fs.writeFile('index.html', htmlPageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created index.html!')
    );
    const man = new manager (answers.name,answers.ID,answers.officeNumber,answers.email)
  })
}

function init() {
  inquirer
    .prompt(menuQuestions)
    .then((answers) => {
      if (answers.menu == `add employee`) {
        console.log(answers);
        addEmployee()
      } else {
        return
      }
    })
}
init()