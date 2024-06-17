function mergeSort(arr) {
  if (arr.length === 1 || arr.length === 0) {
    return arr;
  } else {
    let left = arr.splice(0, arr.length / 2);
    let right = arr;
    return merge(mergeSort(left), mergeSort(right));
  }
}

function merge(left, right) {
  let result = [];
  let i = 0;
  let j = 0;
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  while (i < left.length) {
    result.push(left[i]);
    i++;
  }

  while (j < right.length) {
    result.push(right[j]);
    j++;
  }
  return result;
}

const arr1 = [];
const arr2 = [2];
const arr3 = [2, 3, 5, 4, 0, 1, 6, 7];
const arr4 = ["a", "c", "z", "f", "p", "m", "c"];

console.log(mergeSort(arr1));
console.log(mergeSort(arr2));
console.log(mergeSort(arr3));
console.log(mergeSort(arr4));
