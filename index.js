const fs = require('fs');
const inquirer = require('inquirer');
const manager = require(`./lib/Manager`)
const mysql = require('mysql2');


const PORT = process.env.PORT || 3001;
const app = express();


const menuQuestions = [
  {
    type: 'list',
    message: 'What do you like to do ?',
    name: 'menu',
    choices: [`view all departments`, `view all roles`, `view all employees`, `add a department`,
      `add a role`, `add an employee`, `update an employee role`]
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



const employeeQ = [
  {
    type: `input`,
    message: `what is your name and last`,
    name: `name`,
  },
  {
    type: `input`,
    message: `what is your ID`,
    name: `ID`,
  },
  {
    type: `input`,
    message: `what is your job Title  `,
    name: `jobTitle`,
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


const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: 'root',
    // TODO: Add MySQL password here
    password: 'Basil.123',
    database: 'Employee_db'
  },
);



function viewdepartments() {
  const sql = `SELECT id, department_name FROM department ;`;
  db.query(sql, (err, rows) => {
    if (err) {
      console.log(err.message)
      return;
    }
    console.log(rows)
    init()
  });
}




function viewroles() {
  const sql = `SELECT id, title,salary FROM role ;`;
  db.query(sql, (err, rows) => {
    if (err) {
      console.log(err.message)
      return;
    }
    console.log(rows)
    init()
  });
}


function viewemployees() {
  const sql = `SELECT id, first_name,last_name,Employee_role FROM Employee ;`;
  db.query(sql, (err, rows) => {
    if (err) {
      console.log(err.message)
      return;
    }
    console.log(rows)
    init()
  });
}



function init() {
  inquirer
    .prompt(menuQuestions)
    .then((answers) => {
      if (answers.menu == `view all departments`) {
        console.log(answers);
        viewdepartments()
      } else if (answers.menu == `view all roles`) {
        viewroles
      } else if (answers.menu == `view all employees`) {
        viewemployees
      } else if (answers.menu == `add a department`) {

      } else if (answers.menu == `add a role`) {

      } else if (answers.menu ==  `add an employee`) {

      }else if (answers.menu ==  `update an employee role`) {

      }else  {
        return
      }
      
    })
}
init()







function addEmployee() {
  inquirer
    .prompt(employeeQuestions)
    .then((answers) => {
      if (answers.employee == `manager`) {
        addmanagerQ();
      } else {
        return

      }

    })
}



function addmanagerQ() {
  inquirer
    .prompt(managerQ)
    .then((answers) => {
      const htmlPageContent = generateHTML(answers);
      fs.writeFile('index.html', htmlPageContent, (err) =>
        err ? console.log(err) : console.log('Successfully created index.html!')
      );
      const man = new manager(answers.name, answers.ID, answers.officeNumber, answers.email)
    })
}

