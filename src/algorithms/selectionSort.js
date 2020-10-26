function selectionSortHelper(array) {
  const animations = [];

  const swap = (array, idx1, idx2) => {
    [array[idx1], array[idx2]] = [array[idx2], array[idx1]];
  }

  for (let i = 0; i < array.length; i++) {
    let min = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[min]) {
        min = j;
      }
    }
    animations.push([i, min, array[i], array[min]]);
    if (i !== min) {
      swap(array, i, min);
    }
  }

  return animations;
}

export default selectionSortHelper;