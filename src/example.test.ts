import { plus } from './example';

describe('plus should', () => {
  test('calculate the sum of two numbers', () => {
    expect(plus(2, 3)).toBe(5);
  });
});
