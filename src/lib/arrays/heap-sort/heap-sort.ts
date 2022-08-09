import { swap } from '..';

function heapify(
  arrayToSort: Array<number>,
  index: number,
  length: number = arrayToSort.length
): Array<number> {
  let largest = index;
  const left = index * 2 + 1,
    right = index * 2 + 2;

  if (left < length && arrayToSort[left] > arrayToSort[largest]) {
    largest = left;
  }
  if (right < length && arrayToSort[right] > arrayToSort[largest]) {
    largest = right;
  }

  if (largest !== index) {
    swap(arrayToSort, index, largest);
    heapify(arrayToSort, largest, length);
  }

  return arrayToSort;
}

function heapifyObjectList<T extends { [key: string]: unknown }>(
  arrayToSort: Array<T>,
  key: string,
  index: number,
  length: number = arrayToSort.length
): Array<T> {
  let largest = index;
  const left = index * 2 + 1,
    right = index * 2 + 2;

  if (
    left < length &&
    (arrayToSort[left][key] as number) > (arrayToSort[largest][key] as number)
  ) {
    largest = left;
  }
  if (
    right < length &&
    (arrayToSort[right][key] as number) > (arrayToSort[largest][key] as number)
  ) {
    largest = right;
  }

  if (largest !== index) {
    swap(arrayToSort, index, largest);
    heapifyObjectList(arrayToSort, key, largest, length);
  }

  return arrayToSort;
}

export function heapSortNumberArray(array: Array<number>): Array<number> {
  for (let i = Math.floor(array.length / 2); i >= 0; i--) {
    heapify(array, i);
  }

  for (let i = array.length - 1; i > 0; i--) {
    swap(array, 0, i);
    heapify(array, 0, i);
  }

  return array;
}

export function heapSortObjectArray<T extends { [key: string]: unknown }>(
  array: Array<T>,
  key: string
): Array<T> {
  for (let i = Math.floor(array.length / 2); i >= 0; i--) {
    heapifyObjectList(array, key, i);
  }

  for (let i = array.length - 1; i > 0; i--) {
    swap(array, 0, i);
    heapifyObjectList(array, key, 0, i);
  }

  return array;
}
