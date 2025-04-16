import { plus } from './example';

describe('plus should', () => {
  test('calculate sum of two numbers', () => {
    expect(plus(2, 3)).toBe(5);
  });
});
