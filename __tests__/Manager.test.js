const Employee = require('../lib/Employee.js')
const Manager = require('../lib/Manager.js')

test('create an Manager Object', () => {
  const manager = new Manager(
    'Jerry',
    '12313',
    'jerry@gmail.com',
    'Manager',
    '343-578-5897',
  )
  expect(manager.name).toBe('Jerry')
  expect(manager.id).toEqual('12313')
  expect(manager.email).toEqual('jerry@gmail.com')
  expect(manager.role).toBe('Manager')
  expect(manager.officeNumber).toEqual('343-578-5897')
  expect(manager.getName()).toBe('Jerry')
  expect(manager.getId()).toEqual('12313')
  expect(manager.getEmail()).toEqual('jerry@gmail.com')
  expect(manager.getRole()).toBe('Manager')
  expect(manager.getOfficeNumber()).toEqual('343-578-5897')
})
