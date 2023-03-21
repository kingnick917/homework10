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






 const DepartmentQ = [
  {
    type:`input`,
    message:`what is the name of Department`,
    name:`name`
   }
 ]


 const RoleQ = [
  {
    type:`input`,
    message:`what is the name of your role`,
    name:`title`
   }
 ]

 const EmployeeQ = [
  {
    type:`input`,
    message:`what is  name `,
    name:`first`
   },
   {
    type:`input`,
    message:`what is last name `,
    name:`last`
   }
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
  const sql = `INSERT INTO department  (department_name)  VALUES (?)`;
  inquirer
  .prompt(DepartmentQ)
  .then(answers => {
    const params = [answers.name];

  db.query(sql,params, (err, rows) => {
    if (err) {
      console.log(err.message)
      return;
    }
    console.log(rows)
    init()
  });
})}

function addRole() {
  const sql = `INSERT INTO role (title, salary) VALUES (?)`;
  inquirer
  .prompt(RoleQ)
  .then(answers => {
    const params = [answers.title.salary];
  db.query(sql,params,(err, rows) => {
    if (err) {
      console.log(err.message)
      return;
    }
    console.log(rows)
    init()
  });
})}

function addEmployee() {
  const sql = `INSERT INTO (first_name, last_name) VALUES (?)`;
  inquirer
  .prompt(EmployeeQ)
  .then(answers => {
    const params = [answers.first_name.last_name];
  db.query(sql,params,(err, rows) => {
    if (err) {
      console.log(err.message)
      return;
    }
    console.log(rows)
    init()
  });
})}
function updateEmployeeRole() {
  const sql = `update Employee set first_name  = ?  id = ? `;
  
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