'use strict';

function mergeSort(arr) {
  let n = arr.length;

  if (n > 1) {
    let mid = Math.floor(n / 2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);

    // sort the left side
    mergeSort(left);
    // sort the right side
    mergeSort(right);
    // merge the sorted left and right sides together
    merge(left, right, arr);
  }
}

function merge(left, right, arr) {
  let i = 0;
  let j = 0;
  let k = 0;

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      arr[k] = left[i];
      i++;
    } else {
      arr[k] = right[j];
      j++;
    }
    k++;
  }

  if (i === left.length) {
      while(j < right.length){
        arr[k] = right[j];
        j++;
        k++;
      }
  } else {
    while(i < left.length){
        arr[k] = left[i];
        i++;
        k++;
      }
  }
}

module.exports = {
  mergeSort,
};
