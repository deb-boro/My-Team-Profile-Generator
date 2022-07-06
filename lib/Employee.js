const inquirer = require('inquirer')

class Employee {
  constructor(empName, id, email, role) {
    ;(this.empName = empName), (this.id = id), (this.email = email)
    this.role = role
  }

  getName() {
    return this.empName
  }
  getId() {
    return this.id
  }
  getEmail() {
    return this.email
  }
  getRole() {
    return this.role
  }
}

module.exports = Employee
