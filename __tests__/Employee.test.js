const Employee = require('../lib/Employee.js')

test('create an Employee Object', () => {
  const employee = new Employee('Jerry', '12313', 'jerry@gmail.com', 'employee')
  expect(employee.empName).toBe('Jerry')
  expect(employee.id).toEqual('12313')
  expect(employee.email).toEqual('jerry@gmail.com')
  expect(employee.role).toBe('employee')
  expect(employee.getName()).toBe('Jerry')
  expect(employee.getId()).toEqual('12313')
  expect(employee.getEmail()).toEqual('jerry@gmail.com')
  expect(employee.getRole()).toBe('employee')
})
