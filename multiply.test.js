const mutliply = require('./multiply')

test('multiply 9 * 7 to equal 63', () => {
  expect(mutliply(9, 7)).toBe(63)
})
