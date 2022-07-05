const Employee = require('../lib/Employee.js')
const Intern = require('../lib/Intern.js')

test('create an Intern Object', () => {
  const intern = new Intern(
    'Jerry',
    '12313',
    'jerry@gmail.com',
    'Intern',
    'UNCC',
  )
  expect(intern.name).toBe('Jerry')
  expect(intern.id).toEqual('12313')
  expect(intern.email).toEqual('jerry@gmail.com')
  expect(intern.role).toBe('Intern')
  expect(intern.school).toEqual('UNCC')
  expect(intern.getName()).toBe('Jerry')
  expect(intern.getId()).toEqual('12313')
  expect(intern.getEmail()).toEqual('jerry@gmail.com')
  expect(intern.getRole()).toBe('Intern')
  expect(intern.getSchool()).toEqual('UNCC')
})
