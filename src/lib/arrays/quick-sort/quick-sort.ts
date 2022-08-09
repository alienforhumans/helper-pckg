import { swap } from '..';

function arrayPartition(items: number[], left: number, right: number): number {
  const pivot = items[Math.floor((right + left) / 2)];
  let i = left,
    j = right;

  while (i <= j) {
    while (items[i] < pivot) {
      i++;
    }

    while (items[j] > pivot) {
      j--;
    }

    if (i <= j) {
      swap(items, i, j);
      i++;
      j--;
    }
  }

  return i;
}

function objectArrayPartition<T extends { [key: string]: unknown }>(
  items: T[],
  key: string,
  left: number,
  right: number
): number {
  const pivot = items[Math.floor((right + left) / 2)][key];
  let i = left,
    j = right;

  while (i <= j) {
    while ((items[i][key] as number) < (pivot as number)) {
      i++;
    }

    while ((items[j][key] as number) > (pivot as number)) {
      j--;
    }

    if (i <= j) {
      swap(items, i, j);
      i++;
      j--;
    }
  }

  return i;
}

export function quickSortNumberArray(
  array: Array<number>,
  left = 0,
  right = array.length - 1
): Array<number> {
  if (array.length > 1) {
    const index = arrayPartition(array, left, right);

    if (left < index - 1) {
      quickSortNumberArray(array, left, index - 1);
    }
    if (index < right) {
      quickSortNumberArray(array, index, right);
    }
  }
  return array;
}

export function quickSortObjectArray<T extends { [key: string]: unknown }>(
  array: Array<T>,
  key: string,
  left = 0,
  right = array.length - 1
): Array<T> {
  if (array.length > 1) {
    const index = objectArrayPartition(array, key, left, right);

    if (left < index - 1) {
      quickSortObjectArray(array, key, left, index - 1);
    }
    if (index < right) {
      quickSortObjectArray(array, key, index, right);
    }
  }
  return array;
}
