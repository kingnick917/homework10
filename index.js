const fs = require('fs');
const inquirer = require('inquirer');



const questions = [
    {
      type: 'input',
      message: 'What is your user name?',
      name: 'name',
    },
    {
        type: 'input',
        message: 'What is your user last name?',
        name: 'lastName',
      },
    {
      type: 'input',
      message: 'What is your project Description?',
      name: 'Description',
    },
    {
      type: 'input',
      message: 'what is your title :',
      name: 'title',
    },
    {
      type: 'input',
      message: 'What is your License ?',
      name:'License'
    }

  ]