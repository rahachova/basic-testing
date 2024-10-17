import { simpleCalculator, Action } from './index';

const testCases = [
  { a: 1, b: 2, action: Action.Add, expected: 3 },
  { a: 2, b: 2, action: Action.Add, expected: 4 },
  { a: 3, b: 2, action: Action.Add, expected: 5 },
  { a: 2, b: 2, action: Action.Subtract, expected: 0 },
  { a: 2, b: 2, action: Action.Multiply, expected: 4 },
  { a: 2, b: 2, action: Action.Divide, expected: 1 },
  { a: 3, b: 2, action: Action.Exponentiate, expected: 9 },
  { a: 2, b: 2, action: 'InvalidAction', expected: null },
  { a: 'two', b: 2, action: Action.Subtract, expected: null },
  { a: 2, b: 'three', action: Action.Subtract, expected: null },
  { a: 'two', b: 'three', action: Action.Subtract, expected: null },
];

describe('simpleCalculator', () => {
  test.each(testCases)(
    'should return $expected when $a $action $b',
    ({ expected, ...restParam }) => {
      expect(simpleCalculator(restParam)).toBe(expected);
    },
  );
});
