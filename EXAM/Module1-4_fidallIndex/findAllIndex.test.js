const testFn = require('./findAllIndex.js')

test('output#1', () => {
  expect(testFn('abcdefgh ijklmnop', 'abcdefghijklmnop')).toStrictEqual([])
})

test('output#2', () => {
  expect(testFn('', 'a')).toStrictEqual([])
})

test('output#3', () => {
  expect(testFn('abcdefghijklmnop', 'hi')).toStrictEqual([7])
})

test('output#4', () => {
  expect(testFn('abc bdz kbce', 'bc')).toStrictEqual([1, 9])
})

test('output#5', () => {
  expect(testFn('ababababab', 'ab')).toStrictEqual([0, 2, 4, 6, 8])
})

test('output#6', () => {
  expect(testFn('lorem or lorems', 'lorem')).toStrictEqual([0, 9])
})

test('output#7', () => {
  expect(
    testFn(
      'be yourself and push yourself because no one else to do it for you',
      'you'
    )
  ).toStrictEqual([3, 21, 63])
})
