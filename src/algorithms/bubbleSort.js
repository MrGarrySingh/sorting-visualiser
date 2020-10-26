function bubbleSortHelper(array) {
  const animations = [];
  let noSwaps;
  for(let i = array.length - 1; i >= 0; i--){
      noSwaps = true;
      for(let j = 0; j <= i - 1; j++){
          if(array[j] >= array[j + 1]){
              animations.push([j, j + 1, array[j], array[j + 1]]);
              let temp = array[j];
              array[j] = array[j + 1];
              array[j + 1] = temp;
              noSwaps = false;
          }
      }
      if (noSwaps) break;
  }
  return animations;
}

export default bubbleSortHelper;