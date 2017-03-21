// function missingNumber(input){
// var result=[];
// var length = input.length;
//  input.forEach(function(element,index,array){
//      //skip the last element
//      if(index===length-1){
//          return;
//      }

//      //for all others
//      while(element+1!=array[index+1]){
//          element=element+1;
//          result.push(element);
//      }

//  });

// return result;

// }

var input = [2, 5, 0, 3, 4, 6, 9, 1]; //[ 0, 1, 2, 3, 4, 6, 9 ];
console.log(missingNumber(input));

// [ 2, 5, 0, 3, 4, 6, 9, 1 ]
// O(n)


function missingNumber(input) {
    var hashMap = {};
    var result;
    input.forEach(function(element) {
        hashMap[element] = element;
    });
    
    input.forEach(function(element) {
        if (result) return;
    
        if (hashMap[element + 1]) {
            //its continous 
        } else {
            result = element + 1;
        }
    });

    return result ? result : null;

}