# Reverse an Array

Writing a function called insertShiftArray which takes an array and a value as an arguments. Without utilizing any of the built-in methods available in javascript language, eturn an array with the new value added at the middle index.

## Whiteboard Process

![whiteboard image](array-shift.jpg)
![whiteboard image](array-shift1.jpg)

## Code

```javascript
function insertShiftArray(arr, value){
  let midIndex = Math.floor(arr.length / 2);
  arr[arr.length] = 0;

  for(let i = arr.length - 1; i > midIndex; i--){
    arr[i] = arr[i - 1];
  }
  arr[midIndex] = value;
  
  return arr;
}

```

## Approach & Efficiency

The approach that was taken is by adding an element to the array with any inital value then calcaulating the middle index of the array. After that loop through half of the array to shift each element by one position to the right. This approach is easy to implement and need a fixed space to be implemented.

**The time Big O**  -----> O(n)

**The space Big O** -----> O(1)
