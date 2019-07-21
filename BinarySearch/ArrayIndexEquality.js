// Array Index & Element Equality
// Given a sorted array arr of distinct integers, write a function
// indexEqualsValueSearch that returns the lowest index i for which arr[i] == i.
// Return -1 if there is no such index. Analyze the time and space complexities
// of your solution and explain its correctness.

// Examples:
// input: arr = [-8,0,2,5]
// output: 2 # since arr[2] == 2

// input: arr = [-1,0,3,6]
// output: -1 # since no index in arr satisfies arr[i] == i.
// Constraints:

// [time limit] 5000ms

// [input] array.integer arr

// 1 ≤ arr.length ≤ 100
// [output] integer

// Array Index & Element Equality
// While coding the solution is simple, this question takes a solid understanding of binary search and how to apply it.
// the solution is not complete without getting a logarithmic time complexity and an explanation/proof for it.

// If your peer can’t advance beyond the naive solution, ask them how they usually perform a an efficient scan on a sorted array (binary search, of course).
// Using binary search “as is” won’t work since we aren’t looking for a specific value in the array, but rather a value for which arr[i] == i. Can your peer think of how to modify the binary search algorithm so it works on latter case?

// If still no progress, ask your peer how they can transform the input array in a way that will allow them to apply the binary search algorithm and get the correct answer. Hint: subtraction.
// The key to solving this problem is understanding that we can apply binary search on the values that result from subtracting every index i from its corresponding value arr[i], i.e arr[i] - i. Ask your peer if they understand why this works.

// Even if your peer isn’t familiar with the notion of a strictly monotonically increasing sequence, they should be able to articulate intuitively the correctness of their solution (share this notion with them if they didn’t mention it in their answer).
// The subtraction trick is elegant but it’s not a must. You can instead check whether arr[i] is equal to, lower than or greater than i to decide whether to return i, scan the upper half of the array, or scan the lower half of the array, respectively.

// If your peer finds an element that satisfies arr[i] == i, but there are elements before it that also satisfy the condition, you may advise them to alter their implementation of the binary search to specifically find the first occurrence of an element, by checking whether the preceding element also satisfies the condition.


// recursive solution
function indexEqualsValueSearch(arr) {
    // your code goes here for edge cases
    //return recursiveBinarySearch(arr, 0, arr.length - 1);
    return iterativeBinarySearch(arr, 0, arr.length - 1);
}


//Iterative solution
function iterativeBinarySearch(arr) {
  // your code goes here for edge cases

  let start = 0; //0
  let end = arr.length - 1; //4
  let result = -1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] - mid === 0 && (mid == 0 || arr[mid - 1] != mid - 1)) {
      result = arr[mid];
      end = mid - 1;
    } else if (arr[mid] - mid < 0) {
      start = mid + 1;
    } else if (arr[mid] - mid > 0) {
      end = mid - 1;
    }
  }
  return result;
}

// recursive solution
function recursiveBinarySearch(arr, start, end) {
    if (start > end) {
      return -1;
    }
    const mid = Math.floor((start + end) / 2);
    if (arr[mid] === mid) {
      //continue to check if there exists a smaller mid on the left
      //else return current mid
      const left = recursiveBinarySearch(arr, start, mid - 1); 
      //Did we find a smaller element ?
      //-1 if not found, x will be >=0 if an element is found
      return (left >= 0) ? left : mid;
    } else if (arr[mid] - mid < 0) {
      //There cannot exists a smaller element on the left since the current element is already smaller and we are dealing with integers - Monotonically increasing sequence
      return recursiveBinarySearch(arr, mid + 1, end);
    } else if (arr[mid] - mid > 0) {
          //There cannot exists a smaller element on the right, since the current element is already bigger than the index and we are dealing with integers - Monotonically increasing sequence
      return recursiveBinarySearch(arr, start, mid - 1);  
    }
  }
  
  

  //reference:
  //https://en.wikipedia.org/wiki/Sequence#Increasing_and_decreasing

  //Variations 
  // find  lowest index i for which arr[i] == i.
  // find an index for which arr[i] == i
  // Listen to the question