// Uncomment the code below and write your tests
import { simpleCalculator, Action } from './index';

const testCases = [
  { a: 1, b: 2, action: Action.Add, expected: 3 },
  { a: 2, b: 2, action: Action.Add, expected: 4 },
  { a: 3, b: 2, action: Action.Add, expected: 5 },

  { a: 1, b: 2, action: Action.Subtract, expected: -1 },
  { a: 2, b: 2, action: Action.Subtract, expected: 0 },
  { a: 3, b: 2, action: Action.Subtract, expected: 1 },

  { a: 2, b: 2, action: Action.Divide, expected: 1 },
  { a: 2, b: 1, action: Action.Divide, expected: 2 },
  { a: 10, b: 2, action: Action.Divide, expected: 5 },

  { a: 2, b: 2, action: Action.Multiply, expected: 4 },
  { a: 2, b: 1, action: Action.Multiply, expected: 2 },
  { a: 10, b: 2, action: Action.Multiply, expected: 20 },

  { a: 2, b: 2, action: 'action', expected: null },
  { a: 2, b: 1, action: 'action', expected: null },
  { a: 10, b: 2, action: 'action', expected: null },

  { a: 'notANumber', b: 'notANumber', action: Action.Add, expected: null },
  { a: 'notANumber', b: 'notANumber', action: Action.Add, expected: null },
  { a: 'notANumber', b: 'notANumber', action: Action.Add, expected: null },
];

describe('simpleCalculator', () => {
  test.each(testCases)(
    '$a $action $b should be equal $expected',
    ({ a, b, action, expected }) => {
      expect(simpleCalculator({ a, b, action })).toEqual(expected);
    },
  );
});
