const { add, subtract, multiply } = require('./math');

test('adds 5 + 2 to equal 7', () => {
  expect(add(5, 2)).toBe(7);
});

test('subtracts 10 - 4 to equal 6', () => {
  expect(subtract(10, 4)).toBe(6);
});

test('multiplies 3 * 4 to equal 12', () => {
  expect(multiply(3, 4)).toBe(12);
});
