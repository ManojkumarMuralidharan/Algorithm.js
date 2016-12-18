//Time planner 
// Implement a meeting planner that can schedule meetings between two persons at a time.

// Time is represented by Unix format (also called Epoch) - a positive integer holding the seconds since January 1st, 1970 at midnight. 

// Planner input:

// dur - Meeting duration in seconds (a positive integer).
// timesA, timesB - Availability of each person, represented by an array of arrays.
// Each sub-array is a time span holding the start (first element) and end (second element) times.
// You may assume that time spans are disjointed.
// Planner output:

// Array of two items - start and end times of the planned meeting, representing the earliest opportunity for the two persons to meet for a dur length meeting.
// If no possible meeting can be scheduled, return an empty array instead.
// Design and implement an efficient solution and analyze its runtime and space complexity.

function TimePlanner(duration, person1Avail, person2Avail) {
    var result;
    //filter only duration values
    person1Avail = person1Avail.filter(function(element) {
        if (Math.abs(element[0], element[1]) >= duration) {
            element;
        }
    }).sort(function(a, b) {
        return a[0] - b[0];
    });
    //filter only duration values
    person2Avail = person2Avail.filter(function(element) {
        if (Math.abs(element[0], element[1]) >= duration) {
            element;
        }
    }).sort(function(a, b) {
        return a[0] - b[0];
    });


    //iterate over one entry
    var person1 = 0,
        person2 = 0;

    while (person1 < person1Avail.length && person2 < person1Avail.length) {


        //need to find if they are inside of one another 
        var startTime = Math.max(person1Avail[person1][0], person2Avail[person2][0]);
        var endTime = Math.min(person1Avail[person1][1], person1Avail[person1][1]);

        //checking if it intersects
        if (person1Avail[person1][0] + duration > endTime) {
            person1++;
        } else if (person2Avail[person2][0] + duration > endTime) {
            person2++;
        } else {
            //   p1.start + duration <= p2.end
            //   p2.start + duration <=p1.end      
            var timeStamp = [];
            timeStamp.push(startTime);
            timeStamp.push(endTime);
            result.push(timeStamp);
            person1++;
            person2++;
        }



    }

    return result;


}
// Thoughts


// dur -  10sec
// 1st person [ [1,8] [22,35] ,[38,42] ]
// 2nd person [ [12,18],[22,34]]
//op
//
// time in an arry - [tsStart, tsEnd ]


//brute force
// step 1 - identify all the possible time entries that match the duration
//   1st [ [20,35] ] //diff st n end >=10
//   2nd [ [22,34] ] //diff st n end >=10
// sort both by start time stamp tsStart
//step 3 try to see if they fit inside of the other
//twopointer method
// check the start time

// find the largest range
// look if the smaller range entry fits there
//              25  28 30   34
//     20   22   24  26 28 30 32  35

// [20,35]
// [25,37][45,56]
//iterating over p1 timestamp and check if the start entry in the next one is within the start and end

//  if( (p1.start<= p2.start && p1.end>=p2.end) || (p1.start>= p2.start && p2.end<=p1.end) ){
//     //find the one with higher start time
//       // and that end time <= lowest start time
//  }

//  find the max of start time and find the min of end time
//  [ st and end ]

// O(n) = O(n log n) m~n
// O(n, m) = O(mlogm) + O(nlogn)

// space O(n) + O(n) => O(n)