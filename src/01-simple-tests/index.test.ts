// Uncomment the code below and write your tests
import { simpleCalculator, Action } from './index';

describe('simpleCalculator tests', () => {
  test('should add two numbers', () => {
    expect(simpleCalculator({ a: 2, b: 5, action: Action.Add })).toBe(7);
  });

  test('should substract two numbers', () => {
    expect(simpleCalculator({ a: 5, b: 2, action: Action.Subtract })).toBe(3);
  });

  test('should multiply two numbers', () => {
    expect(simpleCalculator({ a: 5, b: 2, action: Action.Multiply })).toBe(10);
  });

  test('should divide two numbers', () => {
    expect(simpleCalculator({ a: 10, b: 2, action: Action.Divide })).toBe(5);
  });

  test('should exponentiate two numbers', () => {
    expect(simpleCalculator({ a: 2, b: 3, action: Action.Exponentiate })).toBe(
      8,
    );
  });

  test('should return null for invalid action', () => {
    expect(simpleCalculator({ a: 2, b: 3, action: 'action' })).toBeNull();
  });

  test('should return null for invalid arguments', () => {
    expect(
      simpleCalculator({
        a: 'notANumber',
        b: 'notANumber',
        action: Action.Add,
      }),
    ).toBeNull();
  });
});
