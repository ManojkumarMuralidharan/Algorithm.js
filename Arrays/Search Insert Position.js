// Given a sorted array and a target value, return the index if the target is found. 
// If not, return the index where it would be if it were inserted in order.

// You may assume no duplicates in the array.

// Here are few examples.

// [1,3,5,6], 5 → 2

// [1,3,5,6], 2 → 1

// [1,3,5,6], 7 → 4

// [1,3,5,6], 0 → 0
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    var start = 0, end = nums.length-1, mid ;
    var largest = 0;
    if(nums.length===1){
        largest = nums[0] >= target ? 0  : 1;
        console.log('largest is ',largest)
    }else{
        while(start<=end){
            mid = Math.floor((start + end) /2);
            console.log('mid is :',mid)
            if(nums[mid]===target){
                largest = mid;
                break;
            }else if(nums[mid]<target){
                largest = mid+1;
                start = mid+1;
                console.log('comes here');
            }else if(nums[mid]>target){
                //if(nums[mid]>nums[largest] && nums[mid]>target){
                    largest = mid;
                //} 
                end = mid -1;
                console.log('comes here2');
            }
        }
    }
    
    // if(largest===-1){
    //     if(nums[0]<=target){return 0;}  
    //     else if(nums[nums.length-1]<=target){return nums.length+1}
    // }else{
    //     return largest;
    // }
    return largest;
};