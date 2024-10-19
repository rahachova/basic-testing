import { generateLinkedList } from './index';

const values1 = ['a', 'b', 'c', 'd'];
const values2 = ['e', 'f', 'g', 'h'];

describe('generateLinkedList', () => {
  // Check match by expect(...).toStrictEqual(...)
  test('should generate linked list from values 1', () => {
    const list = generateLinkedList(values1);
    expect(list).toStrictEqual({
      next: {
        next: {
          next: { next: { next: null, value: null }, value: 'd' },
          value: 'c',
        },
        value: 'b',
      },
      value: 'a',
    });
  });

  // Check match by comparison with snapshot
  test('should generate linked list from values 2', () => {
    const list = generateLinkedList(values2);
    expect(list).toMatchSnapshot();
  });
});
