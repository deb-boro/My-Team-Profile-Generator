const Manager = require('./lib/Manager.js')
const Engineer = require('./lib/Engineer.js')
const Intern = require('./lib/Intern.js')
const Employee = require('./lib/Employee')
const htmlGenerator = require('./src/template-helper')
const { writeFile, copyFile } = require('./utils/generate-site')

const inquirer = require('inquirer')

const arrtemplateData = []

const promptEngineer = () => {
  console.log(`
  ======================
  Enter Engineer's Details
  ======================
  `)

  return inquirer
    .prompt([
      {
        type: 'input',
        name: 'engName',
        message: 'Enter Engineer name : ',
      },
      {
        type: 'input',
        name: 'engId',
        message: 'Please enter Engineer Employee id: ',
      },
      {
        type: 'input',
        name: 'engEmail',
        message: 'Please enter Engineer email: ',
      },
      {
        type: 'input',
        name: 'engGithub',
        message: 'Please enter Engineer Github user-name: ',
      },
      {
        name: 'addRole',
        type: 'checkbox',
        message: 'Select an option',
        choices: ['Engineer', 'Intern', 'Finished Building My Team'],
      },
    ])
    .then((data) => {
      arrtemplateData.push(data)
      new Engineer(
        data.name,
        data.id,
        data.email,
        'Engineer',
        data.github,
      ).getGithub()
      if (data.addRole.join('') === 'Engineer') {
        return promptEngineer()
      } else if (data.addRole.join('') === 'Intern') {
        return promptIntern()
      } else return arrtemplateData
    })
}

const promptIntern = () => {
  console.log(`
    ==================
    Enter Intern Details
    ===================
    `)

  return inquirer
    .prompt([
      {
        type: 'input',
        name: 'internName',
        message: 'Enter Intern name : ',
      },
      {
        type: 'input',
        name: 'internId',
        message: 'Please enter Intern id',
      },
      {
        type: 'input',
        name: 'internEmail',
        message: 'Please enter Intern email',
      },
      {
        type: 'input',
        name: 'internSchool',
        message: 'Please enter Intern School',
      },
      {
        name: 'addRole',
        type: 'checkbox',
        message: 'Select an option',
        choices: ['Engineer', 'Intern', 'Finished Building My Team'],
      },
    ])
    .then((data) => {
      arrtemplateData.push(data)
      if (data.addRole.join('') === 'Engineer') {
        return promptEngineer()
      } else if (data.addRole.join('') === 'Intern') {
        return promptIntern()
      } else return arrtemplateData
    })
}

const promptManager = () => {
  console.log(`
  ==================
  Build My Team
  ===================
  `)

  return inquirer
    .prompt([
      {
        type: 'input',
        name: 'managerName',
        message: 'Enter Manager name : ',
      },
      {
        type: 'input',
        name: 'managerId',
        message: 'Please enter Manager Employee id',
      },
      {
        type: 'input',
        name: 'managerEmail',
        message: 'Please enter Manager email',
      },
      {
        type: 'input',
        name: 'managerOfficeNumber',
        message: 'Please enter Manager Office Number',
      },
      {
        name: 'addRole',
        type: 'checkbox',
        message: 'Select an option',
        choices: ['Engineer', 'Intern', 'Finished Building My Team'],
      },
    ])
    .then((templateData) => {
      arrtemplateData.push(templateData)

      if (templateData.addRole.join('') === 'Engineer') {
        return promptEngineer()
      } else if (templateData.addRole.join('') === 'Intern') {
        return promptIntern()
      } else return arrtemplateData
    })
}

promptManager()
  .then((data) => {
    return htmlGenerator(data)
  })
  .then((pageHTML) => {
    return writeFile(pageHTML)
  })
  .then((writeFileResponse) => {
    console.log(writeFileResponse)
    return copyFile()
  })
  .then((copyFileResponse) => {
    console.log(copyFileResponse)
  })
  .catch((err) => {
    console.log(err)
  })
