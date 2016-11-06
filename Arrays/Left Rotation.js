// A left rotation operation on an array of size  shifts each of the array's elements  unit to the left. For example, if  left rotations are performed on array , then the array would become .

// Given an array of  integers and a number, , perform  left rotations on the array. Then print the updated array as a single line of space-separated integers.

// Input Format

// The first line contains two space-separated integers denoting the respective values of  (the number of integers) and  (the number of left rotations you must perform). 
// The second line contains  space-separated integers describing the respective elements of the array's initial state.

// Constraints

// Output Format

// Print a single line of  space-separated integers denoting the final state of the array after performing left rotations.

// Sample Input

// 5 4
// 1 2 3 4 5
// Sample Output

// 5 1 2 3 4
// Explanation

// When we perform  left rotations, the array undergoes the following sequence of changes:

// Thus, we print the array's final state as a single line of space-separated values, which is 5 1 2 3 4.



function LeftRotate(a, n, k) {
    //reduce the no of rotations
    k = k % n;
    //rotation is just appending 
    var first = [];
    var second = [];

    //build the second array when you are still under # of rotation
    //build first array when you are done rotations 

    a.map(function(element, index) {
        if (index < k) {
            second.push(element) //pushing to back
        } else {
            first.push(element)
        }
    });

    //console.log((first.concat(second)).join(' '));
    return (first.concat(second));
}

(function unitTest() {
    var input = [1, 2, 3, 4, 5];
    var d = 4;
    var output = [5, 1, 2, 3, 4];

    if (isEqual(LeftRotate(input, input.length, d), output)) {
        console.log('pass');
    }
})();

// Comparing two dimensional arrays 
// You cannot compare 2 arrays like array1 == array2 in javascript 
function isEqual(array1, array2) {
    return (array1.join('-') == array2.join('-'));
}