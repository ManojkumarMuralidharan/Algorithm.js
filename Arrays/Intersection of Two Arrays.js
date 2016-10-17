// Given two arrays, write a function to compute their intersection.

// Example:
// Given nums1 = [1, 2, 2, 1], nums2 = [2, 2], return [2].

// Note:
// Each element in the result must be unique.
// The result can be in any order.

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    //sort the two arrays 
    nums1.sort(function(a,b){
        return a - b;
    });
    nums2.sort(function(a,b){
        return a - b;
    });
    var found = false;
    var elementCommon = [] ;
    var elementfound = {};
    if(nums1.length ===0 && nums2.length===0) return [];
    if(nums1.length>nums2.length){
        
        nums2.map(function(element){
            
            if(binarySearch(nums1,element,0,nums1.length)!=-1){
                if(elementfound[element]===undefined){
                    elementCommon.push(element);
                    elementfound[element]=element;
                }
            }
        });
        
    }else{
         nums1.map(function(element){
           
            if(binarySearch(nums2,element,0,nums2.length)!=-1){
                if(elementfound[element]===undefined){
                    elementCommon.push(element);
                    elementfound[element]=element;
                }
            }
        })
    }
    return elementCommon;
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