import test from 'ava';

import { recursiveObjectComparison } from './recursive-comparison';

test('should return True when the objects are equal', (expect) => {
  const mockObject1 = {
    name: 'foo',
    email: 'bar@example.com',
    friend: {
      name: 'foo',
      email: 'bar',
    },
  };

  const mockObject2 = {
    name: 'foo',
    email: 'bar@example.com',
    friend: {
      name: 'foo',
      email: 'bar',
    },
  };

  const isEqual = recursiveObjectComparison(mockObject1, mockObject2);
  expect.true(isEqual);
});

test('should return False when the objects are not equal', (expect) => {
  const mockObject1 = {
    name: 'bar',
    email: 'bar@example.com',
    friend: {
      name: 'foo',
      email: 'bar',
    },
  };

  const mockObject2 = {
    name: 'foo',
    email: 'bar@example.com',
    friend: {
      name: 'foo',
      email: 'bar',
    },
  };

  const isEqual = recursiveObjectComparison(mockObject1, mockObject2);
  expect.false(isEqual);
});

test('should return False when the objects are not equal deeply', (expect) => {
  const mockObject1 = {
    name: 'foo',
    email: 'bar@example.com',
    friend: {
      name: 'foo',
      email: 'bar@',
    },
  };

  const mockObject2 = {
    name: 'foo',
    email: 'bar@example.com',
    friend: {
      name: 'foo',
      email: 'bar',
    },
  };

  const isEqual = recursiveObjectComparison(mockObject1, mockObject2);
  expect.false(isEqual);
});

test('should return False when the length of object keys are not equal', (expect) => {
  const mockObject1 = {
    name: 'foo',
    friend: {
      name: 'foo',
      email: 'bar@',
    },
  };

  const mockObject2 = {
    name: 'foo',
    email: 'bar@example.com',
    friend: {
      name: 'foo',
      email: 'bar',
    },
  };

  const isEqual = recursiveObjectComparison(mockObject1, mockObject2);
  expect.false(isEqual);
});

test('should return False when the length of object keys are not equal deeply', (expect) => {
  const mockObject1 = {
    name: 'foo',
    email: 'bar@example.com',
    friend: {
      name: 'foo',
      email: 'bar@',
    },
  };

  const mockObject2 = {
    name: 'foo',
    email: 'bar@example.com',
    friend: {
      name: 'foo',
    },
  };

  const isEqual = recursiveObjectComparison(mockObject1, mockObject2);
  expect.false(isEqual);
});
