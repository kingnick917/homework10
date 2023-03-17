const fs = require('fs');

const manager = require(`./lib/Manager`)
const mysql = require('mysql2');
const inquirer = require(`inquirer`)




const menuQuestions = [
  {
    type: 'list',
    message: 'What do you like to do ?',
    name: 'menu',
    choices: [`view all departments`, `view all roles`, `view all employees`, `add a department`,
      `add a role`, `add an employee`, `update an employee role`]
  }
];


const employeeQuestions = [
  {
    type: 'list',
    message: 'What type of employee do you what to be ?',
    name: 'employee',
    choices: [`manager`]
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

function addDepartment() {
  const sql = `add database form department Left  join role`;
  db.query(sql, (err, rows) => {
    if (err) {
      console.log(err.message)
      return;
    }
    console.log(rows)
    init()
  });
}

function addRole() {
  const sql = `add role form roles Left  join employee`;
  db.query(sql, (err, rows) => {
    if (err) {
      console.log(err.message)
      return;
    }
    console.log(rows)
    init()
  });
}

function addEmployee() {
  const sql = `add database form roles Left  join employee`;
  db.query(sql, (err, rows) => {
    if (err) {
      console.log(err.message)
      return;
    }
    console.log(rows)
    init()
  });
}
function updateEmployeeRole() {
  const sql = `add database form roles Left  join employee`;
  db.query(sql, (err, rows) => {
    if (err) {
      console.log(err.message)
      return;
    }
    console.log(rows)
    init()
  });
};

function init() {
  inquirer
    .prompt(menuQuestions)
    .then(answers => {
      console.log(answers);
      if (answers.menu == `view all departments`) {
        console.log(answers);
        viewdepartments()
      } else if (answers.menu == `view all roles`) {
        viewroles()
      } else if (answers.menu == `view all employees`) {
        viewemployees()
      } else if (answers.menu == `add a department`) {
        addDepartment()
      } else if (answers.menu == `add a role`) {
        addRole()
      } else if (answers.menu == `add an employee`) {
        addEmployee()
      } else if (answers.menu == `update an employee role`) {
        updateEmployeeRole()
      } else {
        return
      };

    }).catch(err => {
      console.log(err);
    });

  console.log('finished');
}







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



console.log("start")
init();