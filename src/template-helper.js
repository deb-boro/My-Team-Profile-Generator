const generateEmployeeInfo = (data) => {
  return `
    ${data
      .filter(({ officeNumber }) => officeNumber)
      .map(({ name, id, email, officeNumber, role }) => {
        return `
      <div class="card" style="width: 18rem;">
        <div class="card-header">
          <div class="name">${name}</div>
          <div class="Role">${role}</div>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID : ${id}</li>
          <li class="list-group-item">email : <a href="mailto:${email}">${email}<a></li>
          <li class="list-group-item">office-no.: ${officeNumber}</li>
        </ul>
      </div>
        `
      })
      .join('')}
  
    ${data
      .filter(({ github }) => github)
      .map(({ name, id, email, github, role }) => {
        return `
      <div class="card" style="width: 18rem;">
        <div class="card-header">
          <div class="name">${name}</div>
          <div class="Role">${role}</div>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID : ${id}</li>
          <li class="list-group-item">email : <a href="mailto:${email}">${email}<a></li>
          <li class="list-group-item">github: ${github}</li>
        </ul>
      </div>
        `
      })
      .join('')}
    ${data
      .filter(({ school }) => school)
      .map(({ name, id, email, school, role }) => {
        return `
      <div class="card" style="width: 18rem;">
        <div class="card-header">
          <div class="name">${name}</div>
          <div class="Role">${role}</div>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID : ${id}</li>
          <li class="list-group-item">email : <a href="mailto:${email}">${email}<a></li>
          <li class="list-group-item">school: ${school}</li>
        </ul>
      </div>
        
        `
      })
      .join('')}
    `
}

const htmlGenerator = (data) => {
  return `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UFT-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>My Team</title>
    <link
      rel="stylesheet"
      href="https://cdns.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css"
    />
    <link
      href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap"
      rel="stylesheet"
    />
    <link
      href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap"
      rel="stylesheet"
    />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/open-iconic/1.1.1/font/css/open-iconic-bootstrap.min.css"
    />
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <header class="header-container">
      My Team
    </header>

    <main>
      <div class="employee-container">
        ${generateEmployeeInfo(data)}
      </div>
    </main>
  </body>
</html>
`
}

module.exports = htmlGenerator
