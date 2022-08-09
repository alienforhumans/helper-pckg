import test from 'ava';

import { quickSortNumberArray, quickSortObjectArray } from '.';

test('should sort number array', (t) => {
  const mockArray = [4, 2, 5, 1, 3, 6];
  const expectedResult = [1, 2, 3, 4, 5, 6];

  const sortedArray = quickSortNumberArray(mockArray);

  t.deepEqual(sortedArray, expectedResult);
});

test('should sort array of objects', (t) => {
  const mockArray = [
    {
      name: 'foo1',
      salary: 50000,
    },
    {
      name: 'foo2',
      salary: 44000,
    },
    {
      name: 'foo3',
      salary: 87000,
    },
    {
      name: 'foo4',
      salary: 59460,
    },
    {
      name: 'foo5',
      salary: 47000,
    },
    {
      name: 'foo6',
      salary: 55000,
    },
  ];
  const expectedResult = [
    {
      name: 'foo2',
      salary: 44000,
    },
    {
      name: 'foo5',
      salary: 47000,
    },
    {
      name: 'foo1',
      salary: 50000,
    },
    {
      name: 'foo6',
      salary: 55000,
    },
    {
      name: 'foo4',
      salary: 59460,
    },
    {
      name: 'foo3',
      salary: 87000,
    },
  ];

  const sortedArray = quickSortObjectArray(mockArray, 'salary');

  t.deepEqual(sortedArray, expectedResult, JSON.stringify(sortedArray));
});
