Get Started!

    1. Paste your code, then name it on the right, or drag & drop a file in .

2. Share your link!(https: //kobra.io/#/e/-K_RMjNA6NprcKQiRTjT)


        111 +
        001 _________ XOR: 0110

        ADD: 1000

        

        111111 1

        100 a = parseInt(num, 2); //4
        1 b = parseInt(num, 2); //1


        public class Solution {
            public String addBinary(String a, String b) {
                StringBuilder sb = new StringBuilder();
                int i = a.length() - 1, j = b.length() - 1, carry = 0;
                while (i >= 0 || j >= 0) {
                    int sum = carry;
                    if (j >= 0) sum += b.charAt(j--) - '0';
                    if (i >= 0) sum += a.charAt(i--) - '0';
                    sb.append(sum % 2);
                    carry = sum / 2;
                }
                if (carry != 0) sb.append(carry);
                return sb.reverse().toString();
            }
        }



        function addBinary(a, b) {
            2
            return (a + b).toString(2); // function takes 2 numbers, adds them, and .toString(2) returns binary
            3
        }

        https: //discuss.leetcode.com/topic/14441/c-solution-4ms




        Microsoft 2 sorted integer arrays, Find the Kth smallest distinct sum.
        [1, 2, 4, 6] and[2, 3, 5, 8, 10] with K == 3, the answer is 5

        minElm = 1 sum = 1


        Given two integer arrays sorted in ascending order and an integer k.Define sum = a + b,
        where a is an element from the first array b is an element from the second one.Find the kth smallest sum out of all possible sums.Example Given[1, 7, 11] and[2, 4, 6].For k = 3,
        return 7.
        For k = 4,
        return 9.
        For k = 8,
        return 15.
        a + b = sum 1 + 2 = 3 k = 1 st sum 1 + 4 = 5 k = 2 nd sum 1 + 6 = 7 k =
        7 + 2 = 9 7 + 4 = 11 7 + 6 = 13 11 + 2 = 13 11 + 4 = 15 11 + 6 = 17


        [1, 7, 11][2, 4, 6] ^
        ^
        |
        |

        k = 1 // sum = 1 + 2 = 3

        7 vs 4 ? => 4

        [1, 7, 11][2, 4, 6] ^
        ^
        |
        |
        k = 2 // sum = 1+ 4 = 6

        Challenge Do it in either of the following time complexity :
        O(k log min(n, m, k)).where n is the size of A, and m is the size of B.O((m + n) log maxValue).where maxValue is the max number in A and B.





        [1, 2, 3] 5

        find all possible combinations of

        function(arr, n) {




        }

        1 1 1 1 1 1 1

        1 1 1 1 2 1 1 1 3

        1 2 1 3

        1 2 2 1 2


        0 st1 st2 st3 4 5.....n(steps) 0 0 0 0 0 0 0 1, 2, 3 X1 X2(1, 1) c1(2, 1) - > (1, 123) = best way of solvin(1, 123 hops) + 1 = X1 + 1 +
        +
        (1, 2) c2(2, 2) - > (0, 123) 1 +
        +
        (1, 3) c3(2, 3) - > (-1.123) 0


        3 count(n, )



        2 steps and 1 or 2 hops 1, 1 2

        3 steps 1, 2

        111 12 21



        1 step 1 hop 1 1 step 1, 2 hops 1 1 step 1, 2, 3 hops 1

        function tabulation(hops, steps) {
            var tabulation = [];
            for (var i = 0; i <= hops; i++) {

                for (var j = 0; j <= steps; j++) {

                    if (i === 0 || j === 0) {
                        if (tabulation[i] === undefined) {
                            tabulation[i] = [];
                        }
                        tabulation[i][j] = 0

                    } else {
                        if (hops[i - 1] < j) {
                            tabulation[i][j] = tabulation[i - 1][j];
                        } else {
                            tabulation[i][j] = Math.max(tabulation[i - 1], tabulation[j - 1]) + 1;
                        }

                    }

                }
            }

            return tabulation;
        }

        function threeSteps(hops, steps) {

            var table = tabulation(hops, steps);
            return table[hops.length, steps]

        }

        tablulation 0 1 2 3 4 5[0]


        getHops(n, memo) {
            if (n < 0) {
                return 0;
            } else if (n === 0) {
                return 1;
            } else {

                memo[n] = getHops(n - 1, memo) + getHops(n - 2, memo) + getHops(n - 3, memo);

            }


        }


        10111 00100 00001




        // ani
        function getHops(arr, n) {
            let sum = 0;
            if (n === 0)
                return 1;

            for (let i = 0; i < arr.length; i++) {
                if (n - arr[i] >= 0)
                    sum += getHops(arr, n - arr[i]);
            }

            return sum;
        }

        getHops([1, 2, 3], 5)


        // 3 steps

        // 1,1,1
        // 2,1
        // 1,2
        // 3
        //ans:4

    

    getHops(n,tabulation){

        if(n<0){
            return 0;
        }else if(n === 0 ){
            return 1;
        }else if(tabulation[n]!=-1){
            return tabulation[n];
        }else{
            tabulation[n] = getHops(n-1,tabulation) + getHops(n-2,tabulation) + getHops(n-3,tabulation); 
            return tabulation[n];
        }

    }


        https: //www.topcoder.com/community/data-science/data-science-tutorials/dynamic-programming-from-novice-to-advanced/