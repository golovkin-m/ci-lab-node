const { add, sub, mult } = require('./index');
test('adds 1 + 2', () => { expect(add(1, 2)).toBe(3); });
test('subs 5 - 2', () => { expect(sub(5, 2)).toBe(3); });
test('mults 2 * 3', () => { expect(mult(2, 3)).toBe(6); });
