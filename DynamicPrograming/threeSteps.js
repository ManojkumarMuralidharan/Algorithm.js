// A child is running up a staircase with n steps and can hop either 1 step, 2 steps or 3 steps at 
// a time. Implement a method to count how many possible ways the child can run up the stairs


function getHops(n, tabulation) {

    if (n < 0) {
        return 0;
    } else if (n === 0) {
        return 1;
    } else if (tabulation[n] != undefined) {
        return tabulation[n];
    } else {
        tabulation[n] = getHops(n - 1, tabulation) + getHops(n - 2, tabulation) + getHops(n - 3, tabulation);
        return tabulation[n];
    }

}


console.log(getHops(5, []));

// If you are on 5th step
// you could have reached 5th 
// step by 1hop/2hop/3hop    5
//                           |
//               -----------------------------
//              /            |                \
//             /             |                 \ 
//            /              |                  \
//    (4steps,+1hop)    (3step,+2hop)        (2steps,+3hop)   you could have reached 2nd  
//                                                 |          step by 1hop or 2hop or 3hop
//                                          ----------------
//                                        /        |        \ 
//                                       /         |         \
// you could have reached 1st  (1step,+1hop)    (0step,+2hop)  (-1step,+3hop)
// step by 1hop/2hop/3hop          |              [result=1]    [result=0]
//                        -----------------
//                       /       |         \
//                      /        |          \
//           (0steps,+1hop) (-1steps,+2hop)  (-2steps,+3hop)
//           [result=1]        [result=0]     [result=0]