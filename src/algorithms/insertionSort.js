function insertionSortHelper(array) {
  const animations = [];

  for (let i = 1; i < array.length; i++) {
    let currentVal = array[i];
    let j = i - 1;

    while (j >= 0 && currentVal < array[j]) {
      animations.push([j, j + 1, array[j], currentVal]);
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = currentVal;
  }

  return animations;
}

export default insertionSortHelper;