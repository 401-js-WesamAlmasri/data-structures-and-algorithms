# Quick Sort Algorithm

## What it is?

Quicksort is a sorting algorithm based on the divide and conquer approach where an array is divided into subarrays by selecting a pivot element (element selected from the array).

While dividing the array, the pivot element should be positioned in such a way that elements less than pivot are kept on the left side and elements greater than pivot are on the right side of the pivot.

The left and right subarrays are also divided using the same approach. This process continues until each subarray contains a single element.

At this point, elements are already sorted. Finally, elements are combined to form a sorted array.

## How it works?

1. **Select the Pivot Element**

There are different variations of quicksort where the pivot element is selected from different positions. Here, we will be selecting the rightmost element of the array as the pivot element.

![Select the Pivot Element](https://cdn.programiz.com/cdn/farfuture/7qpYqe1UtqYbKzIBY_W8ljqkUz9iS6jZGobim6LDhtM/mtime:1582112622/sites/tutorial2program/files/quick-sort-0.1_0.png)

2. **Rearrange the Array**

Now the elements of the array are rearranged so that elements that are smaller than the pivot are put on the left and the elements greater than the pivot are put on the right.

The arrange steps as follow

- A pointer is fixed at the pivot element. The pivot element is compared with the elements beginning from the first index.

![1](https://cdn.programiz.com/cdn/farfuture/zaN86RZ0WfV0PhWpWDhis-f9lWlfgKJt_liYoGjZAIk/mtime:1617189498/sites/tutorial2program/files/quick-sort-partition-first-step.png)

- If the element is greater than the pivot element, a second pointer is set for that element. 

![2](https://cdn.programiz.com/cdn/farfuture/RzFeResnC88JRu9IFh2YqUKZMXltQ51EeiioINCMcEA/mtime:1617189487/sites/tutorial2program/files/quick-sort-partition-second-step.png)

- Now, pivot is compared with other elements. If an element smaller than the pivot element is reached, the smaller element is swapped with the greater element found earlier.

![3](https://cdn.programiz.com/cdn/farfuture/QA-TsXFkcz3cNyJikcbIWxepFVDu8ntl220KzlG8zdw/mtime:1617189492/sites/tutorial2program/files/quick-sort-partition-third-step.png)

- Again, the process is repeated to set the next greater element as the second pointer. And, swap it with another smaller element. 

![4](https://cdn.programiz.com/cdn/farfuture/tMmdAbX5gev9K20XI1kzQ3n932vSjnN1MszZouHV7Yc/mtime:1617189469/sites/tutorial2program/files/quick-sort-partition-fourth-step.png)

- The process goes on until the second last element is reached. 

![5](https://cdn.programiz.com/cdn/farfuture/MNYV977xf4N3cgCpAtkB1KDyPqyG9OvlKSkHSdd0kys/mtime:1617189475/sites/tutorial2program/files/quick-sort-partition-fifth-step.png)

- Finally, the pivot element is swapped with the second pointer. 

![6](https://cdn.programiz.com/cdn/farfuture/lAMcHRRzL8TJEh7bjY3rAufTTy3y5-o4Nt0z5L1AB8A/mtime:1617189481/sites/tutorial2program/files/quick-sort-partition-sixth-step.png)

3. **Divide Subarrays**

Pivot elements are again chosen for the left and the right sub-parts separately. And, step 2 is repeated.

![Divide Subarrays](https://cdn.programiz.com/cdn/farfuture/dK3pGyiHqFZOYklwABPBZ4zq_VZU1dMWBIbWhHJ-Rgw/mtime:1617189464/sites/tutorial2program/files/quick-sort_1.png)

The subarrays are divided until each subarray is formed of a single element. At this point, the array is already sorted.

## Pseudocode

```
ALGORITHM QuickSort(arr, left, right)
    if left < right
        // Partition the array by setting the position of the pivot value 
        DEFINE position <-- Partition(arr, left, right)
        // Sort the left
        QuickSort(arr, left, position - 1)
        // Sort the right
        QuickSort(arr, position + 1, right)

ALGORITHM Partition(arr, left, right)
    // set a pivot value as a point of reference
    DEFINE pivot <-- arr[right]
    // create a variable to track the largest index of numbers lower than the defined pivot
    DEFINE low <-- left - 1
    for i <- left to right do
        if arr[i] <= pivot
            low++
            Swap(arr, i, low)

     // place the value of the pivot location in the middle.
     // all numbers smaller than the pivot are on the left, larger on the right. 
     Swap(arr, right, low + 1)
    // return the pivot index point
     return low + 1

ALGORITHM Swap(arr, i, low)
    DEFINE temp;
    temp <-- arr[i]
    arr[i] <-- arr[low]
    arr[low] <-- temp
```

## Efficiency

- **Time**: `O(n^2)`
- **Space**: `O(log n)`
