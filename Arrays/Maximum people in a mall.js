// The "Busiest Time in The Mall" Problem

// The mall management is trying to figure out what was the busiest moment in the mall in the last year.
// You are given data from the door detectors: each data entry includes a timestamp (seconds in Unix Epoch format),
//  an amount of people and whether they entered or exited.

// Example of a data entry:
// { time: 1440084737,  count: 4,  type: "enter" }

// Find what was the busiest period in the mall on the last year. Return an array with two Epoch timestamps representing 
// the beginning and end of that period. 
// You may assume that the data your are given is accurate and that each second with entries or exits is recorded. 
// Implement the most efficient solution possible and analyze its time and space complexity.



function BusiestTime(arr){
  var max=0,count=0,max_timestamp_index,min_timestamp_index,result = [];
  arr.map(function(element,index){
   
    if(element.type==='enter'){
        count = count + element.count;
    }else if(element.type ==='exit'){
        count = count - element.count;
    }
    if(count>max){
        max=count;
        max_timestamp_index = index;
        console.log('max_timestamp inside is:',max_timestamp_index);
    }
    console.log('count is:',count);
  
  });
  console.log('max_timestamp outside is:',max_timestamp_index);
  
  for(var i=max_timestamp_index;i<arr.length;i++){
console.log('',arr[i]);
        if(arr[i]['type']==='exit'){
            min_timestamp_index = i;
        }
  }
  
  if(min_timestamp_index===undefined){
    min_timestamp_index = arr.length-1;
  }
  
    result.push(arr[max_timestamp_index]);
    result.push(arr[min_timestamp_index]);
  return result;
}

var sampleEntry = 
[
{ time: 1440084737,  count: 4,  type: "enter" },
{ time: 1440085737,  count: 2,  type: "exit" },
{ time: 1440089737,  count: 4,  type: "enter" },
{ time: 1440090737,  count: 1,  type: "exit" },
{ time: 1440091737,  count: 7,  type: "enter" }];

BusiestTime(sampleEntry);

//{ time: 1440086737,  count: 4,  type: "enter" },
//{ time: 1440087737,  count: 4,  type: "exit" },
//{ time: 1440088737,  count: 4,  type: "enter" },
