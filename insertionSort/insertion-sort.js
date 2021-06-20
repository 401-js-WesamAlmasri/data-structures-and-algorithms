'use strict';

function InsertionSort(array) {
    if(array.length <= 1) return;
    for(let i =1; i < array.length; i++){
        let j = i  - 1;
        let temp = array[i];

        while(j >= 0 && temp < array[j]){
            array[j + 1] = array[j];
            j--;
        }
        array[j+1] = temp;
    }
}   


module.exports = {InsertionSort}