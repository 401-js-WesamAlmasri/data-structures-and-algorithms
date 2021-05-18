function insertShiftArray(arr, value){
    if(arr.length === 0 || !Array.isArray(arr)){
        return -1;
    }

    if(arr.length === 1){
        arr[1] = value;
        return arr;
    }

    let midIndex = Math.floor(arr.length / 2);
    arr[arr.length] = 0;
  
    for(let i = arr.length - 1; i > midIndex; i--){
      arr[i] = arr[i - 1];
    }
    arr[midIndex] = value;
    
    return arr;
  }


module.exports = insertShiftArray;
