const { expect } = require('@jest/globals')
const functions = require('./functions')

test('adds 1 + 2 to equal 3', () => {
  expect(functions.sum(1, 2)).toBe(3)
})

test('7 X 10 equals 70', () => {
  expect(functions.multiply(7, 10)).toBe(70)
})

test('isNull should be Null sucka!', () => {
  expect(functions.isNull()).toBeNull()
})

test('isUndefined should be undefined', () => {
  expect(functions.isUndefined()).toBeUndefined()
})

test('Larry is one of the champs', () => {
  champs = ['Larry', 'George', 'Khabib']
  expect(champs).toContain('Larry')
})
