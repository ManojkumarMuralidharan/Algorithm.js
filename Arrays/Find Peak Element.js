// A peak element is an element that is greater than its neighbors.

// Given an input array where num[i] ≠ num[i+1], find a peak element and return its index.

// The array may contain multiple peaks, in that case return the index to any one of the peaks is fine.

// You may imagine that num[-1] = num[n] = -∞.

// For example, in array [1, 2, 3, 1], 3 is a peak element and your function should return the index number 2.

// Can be achieved in log n runtime

/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    // Greedy approach - has a runtime of O(n)
    // var currentpeak = 0;
    
    // nums.map(function(element,index){
    //     if(nums[currentpeak] < element){
    //         currentpeak = index;
    //     }
    // });
    
    // return currentpeak;
    
    // we can achieve log(n) run time if we use Divide and Conquer - how ?
    // Even though its not sorted
    // if middle element is greater than its left and right neighbors then its the peak,
    // else if left is greater than middle - there is a peak in left
    // also if right is greater than middle - there is a peak in right 
    if(nums.length)
    
    return findpeak(nums,0,nums.length-1,nums.length);
    
    
};

function findpeak(arr,start,end,length){
    // console.log('start:',start,'end:',end);
    var middle = Math.floor((start + end)/2); //like binary search find the middle guy
    // if this is start element, no need to check the left neighbhor
    // if this is end element, no need to check the right neighbhor
    if((middle===0||arr[middle]>=arr[middle-1])&&(middle===(length-1)||arr[middle]>=arr[middle+1])){
        return middle;
    }
    if(arr[middle]<arr[middle-1]){
        //there is a peak in the left
        return findpeak(arr,start,middle-1,length);
    }
    if(arr[middle]<arr[middle+1]){
        //there is a peak in the left
        return findpeak(arr,middle+1,end,length);
    }
    
}