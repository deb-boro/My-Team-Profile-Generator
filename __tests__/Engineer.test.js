const Employee = require('../lib/Employee.js')
const Engineer = require('../lib/Engineer.js')

test('create an Engineer Object', () => {
  const engineer = new Engineer(
    'Jerry',
    '12313',
    'jerry@gmail.com',
    'Engineer',
    'github@github.com',
  )
  expect(engineer.empName).toBe('Jerry')
  expect(engineer.id).toEqual('12313')
  expect(engineer.email).toEqual('jerry@gmail.com')
  expect(engineer.role).toBe('Engineer')
  expect(engineer.github).toEqual('github@github.com')
  expect(engineer.getName()).toBe('Jerry')
  expect(engineer.getId()).toEqual('12313')
  expect(engineer.getEmail()).toEqual('jerry@gmail.com')
  expect(engineer.getRole()).toBe('Engineer')
  expect(engineer.getGithub()).toEqual('github@github.com')
  console.log(engineer)
})
