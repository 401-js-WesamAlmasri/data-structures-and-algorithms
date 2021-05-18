function binarySearch(arr, key){
    let start = 0;
    let end = arr.length - 1;
    let mid;
  
    while(start <= end){
      mid = Math.floor((start + end) / 2);
      if(key === arr[mid]){
        return mid;
      } else if (key < arr[mid]){
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }
    return -1;
  }

module.exports = binarySearch;