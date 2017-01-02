// The "Array Index & Element Equality" Problem

// Given an array of sorted distinct integers named arr, write a function that returns an index i in arr for which arr[i] = i or -1 if no such index exists.

// Implement the most efficient solution possible, prove the correctness of your solution and analyze its runtime complexity (in terms of n - the length of arr).

// Examples:

// Given arr = [-8,0,2,5] the function returns 2, since arr[2] = 2
// Given arr = [-1,0,3,6] the function returns -1, since no index in arr satisfies arr[i] = i

 
  // i/p array[]
  // o/p  integer
  
//   function arrayIndexEquality(input){
//      var result=-1;
//      input.forEach(function(element,index){
//         //if found
//         if(result!=-1) return;
        
//         if(element===index){
//            result = index;
//         }
//      })
//      return result;
//   }
   
// time : o(n) - we can do better - if we fitler out negative numbers
   
   
// [-1,0,1,3,4]
//   0 1 2
// [-2,-1,1,5,7] arr[mid] < mid
   
function arrayIndexEqualityWrapper(input){
   
   var end = input.length;
   return arrayIndexEquality(input,0,end);
   
}
   
function arrayIndexEquality(input,start,end){
      
    var mid = (start+end) / 2;
   
   if(input[mid]>mid){
       //look only on left
      return arrayIndexEqality(input,start,mid-1);
   }else if(input[mid]<mid ){
      // look only on right
      return arrayIndexEquality(input,mid+1,end);
   }else if(input[mid]===mid){
      //if it matches
      return mid;
   }
   
   return -1;
   
}
   
   