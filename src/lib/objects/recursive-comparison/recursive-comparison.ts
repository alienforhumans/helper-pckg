export function recursiveObjectComparison(
  obj_1: unknown,
  obj_2: unknown
): boolean {
  if (
    typeof obj_1 == 'object' &&
    obj_1 != null &&
    typeof obj_2 == 'object' &&
    obj_2 != null
  ) {
    const state = {
      isEqual: true,
    };
    const firstObjectKeyList = Object.keys(obj_1);
    const secondObjectKeyList = Object.keys(obj_2);

    if (firstObjectKeyList.length - secondObjectKeyList.length !== 0)
      state.isEqual = false;

    firstObjectKeyList.map((key) => {
      if (
        !secondObjectKeyList.includes(key) ||
        !recursiveObjectComparison(
          (obj_1 as { readonly [key: string]: unknown })[key],
          (obj_2 as { readonly [key: string]: unknown })[key]
        )
      )
        state.isEqual = false;
    });

    secondObjectKeyList.map((key) => {
      if (
        !firstObjectKeyList.includes(key) ||
        !recursiveObjectComparison(
          (obj_2 as { readonly [key: string]: unknown })[key],
          (obj_1 as { readonly [key: string]: unknown })[key]
        )
      )
        state.isEqual = false;
    });

    return state.isEqual;
  } else {
    return obj_1 === obj_2;
  }
}
