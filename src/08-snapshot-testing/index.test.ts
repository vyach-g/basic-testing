// Uncomment the code below and write your tests
import { generateLinkedList } from './index';

describe('generateLinkedList', () => {
  test('should generate linked list from values 1', () => {
    const mockLinkedList = {
      value: 1,
      next: {
        value: 2,
        next: {
          value: 3,
          next: {
            value: null,
            next: null,
          },
        },
      },
    };
    const linkedList = generateLinkedList([1, 2, 3]);

    expect(linkedList).toStrictEqual(mockLinkedList);
  });

  test('should generate linked list from values 2', () => {
    const linkedList = generateLinkedList([1, 2, 3]);

    expect(linkedList).toMatchSnapshot();
  });
});
