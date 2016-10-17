// Given an array of integers that is already sorted in ascending order, find two numbers such that they add up to a specific target number.

// The function twoSum should return indices of the two numbers such that they add up to the target, where index1 must be less than index2. Please note that your returned answers (both index1 and index2) are not zero-based.

// You may assume that each input would have exactly one solution.

// Input: numbers={2, 7, 11, 15}, target=9
// Output: index1=1, index2=2

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    //Already sorted  - Array -> Binary search if you trying to find something !!!
    var hash = {};
    var results = [];
    var found = false;
    // Hash Map solution 
    // numbers.map(function(element,index){
    //     //skip other values
    //     if(found) return;
        
    //     if(hash[element]!==undefined){
    //         results.push(hash[element]+1,index+1);
    //     }else{
    //         hash[target-element]=index;
    //         console.log('hash [',(target-element),']:',index);
    //     }
    // });
    
    //Binary search approach
    numbers.map(function(element,index,array){
        if(found) return;
        var diff = target - element;
        var otherindex = binarySearch(array,diff,index+1,array.length-1);
        //console.log('searching for :',diff,'from index:',index+1,'to index:',array.length-1);
        if(otherindex!=-1){
            //console.log('found',index,':',otherindex);
            results.push(index+1,otherindex+1);
            found = true;
        }
    });
        
    
    
    return results;
    
};


function binarySearch(arr,value,startindex,endindex){
    var mid;
   // console.log('start index:',startindex,'endindex:',endindex);
    while(startindex<=endindex){
        mid = Math.floor((startindex+endindex)/2);
        if(arr[mid]===value){
            return mid;
        }else if(arr[mid]>value){
            endindex = mid-1;
        }else{
            startindex = mid + 1;
        }    
    }
    
    return -1;
}