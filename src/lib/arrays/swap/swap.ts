export function swap(
  array: Array<unknown>,
  index1: number,
  index2: number
): void {
  if (index1 < 0) {
    index1 = array.length + index1;
  }

  if (index2 < 0) {
    index2 = array.length + index2;
  }

  [array[index1], array[index2]] = [array[index2], array[index1]];
}
