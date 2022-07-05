const Employee = require('./Employee')

class Engineer extends Employee {
  constructor(name, id, email, role, github) {
    super(name, id, email, role)
    this.github = github
  }

  getGithub() {
    console.log(`The github username is : ${this.github}`)
  }
}

module.exports = Engineer
