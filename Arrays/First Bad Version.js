// You are a product manager and currently leading a team to develop a new product. 

// Unfortunately, the latest version of your product fails the quality check. 

// Since each version is developed based on the previous version, all the versions after a bad version are also bad.

// Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one, which causes all the following ones to be bad.

// You are given an API bool isBadVersion(version) which will return whether version is bad. Implement a function to find the first bad version. 

// You should minimize the number of calls to the API.
/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
 //   console.log(isBadVersion.toString());
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function recur(n) {
        //Divide and conquer
        
        //check current version
       var start = 1 , end = n,mid;
       //Edge case
       if(start == end ) return start;
       
       while(start<end){
           mid = Math.floor((start + end )/2);
           console.log('mid',mid);
           //keep going till u hit a bad version
           if(!isBadVersion(mid)){
              start = mid+1;
           }else{
               //when you hit a bad version boom - there u go
               end = mid;
           }
       }
  
       return end;
       
    };
};