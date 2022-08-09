import test from 'ava';

import { swap } from '.';

test('should swap array elements', (t) => {
  const mockArray = [5, 4, 7, 8, 1, 4, 8];
  const expectedArray = [5, 8, 7, 4, 1, 4, 8];

  swap(mockArray, 1, 3);

  t.deepEqual(mockArray, expectedArray);
});

test('should swap array elements with negative indexes', (t) => {
  const mockArray = [5, 4, 7, 8, 1, 4, 8];
  const expectedArray = [5, 1, 7, 8, 4, 4, 8];

  swap(mockArray, -6, -3);

  t.deepEqual(mockArray, expectedArray);
});
