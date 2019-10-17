function mergeSort(array){
  if (array.length === 1){
    return array;
  }
  const mid = Math.floor(array.length/2);
  const left = array.slice(0, mid);
  const right = array.slice(mid, array.length);
  return helper(mergeSort(left), mergeSort(right));
}

function helper(left, right){
  let leftIdx = 0;
  let rightIdx = 0;
  let output = []
  while (leftIdx < left.length && rightIdx < right.length){
    if (left[leftIdx] <= right[rightIdx]){
      output.push(left[leftIdx]);
      leftIdx++;
    }
    else{
      output.push(right[rightIdx]);
      rightIdx++;
    }
  }
  while (leftIdx < left.length){
    output.push(left[leftIdx]);
    leftIdx++;
  }
  while (rightIdx < right.length){
    output.push(right[rightIdx]);
    rightIdx++;
  }
  return output;
}