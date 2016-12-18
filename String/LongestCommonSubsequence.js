// LCS Problem Statement: Given two sequences, find the length of longest subsequence present in both of them. 
// A subsequence is a sequence that appears in the same relative order, but not necessarily contiguous. 
// For example, “abc”, “abg”, “bdf”, “aeg”, ‘”acefg”, .. etc are subsequences of “abcdefg”. 
// So a string of length n has 2^n different possible subsequences.

// It is a classic computer science problem, the basis of diff (a file comparison program that outputs the 
// differences between two files), and has applications in bioinformatics.

// Examples:
// LCS for input Sequences “ABCDGH” and “AEDFHR” is “ADH” of length 3.
// LCS for input Sequences “AGGTAB” and “GXTXAYB” is “GTAB” of length 4.

//O(2^n) - in case all of the characters are unique
function LongestCommonSub_Recursive(str1, str2, m, n) {

    //recusion stops
    if (m === 0 || n === 0) {
        return 0;
    } else {
        // If they match then remove that character by adding one and 
        // then keep looking at the remaining ones
        if (str1.charAt(m) === str2.charAt(n)) {
            return 1 + LongestCommonSub_Recursive(str1, str2, m - 1, n - 1);
        } else {
            // If they do no match, remove one character from one and match with the other
            return Math.max(LongestCommonSub_Recursive(str1, str2, m - 1, n),
                LongestCommonSub_Recursive(str1, str2, m, n - 1));
        }
    }


}

//O(mn) - worst case for a matrix of m*n
function LongestCommonSub_Iterative(str1, str2, m, n) {

    var tabulation = [];

    for (var i = 0; i <= m; i++) {
        for (var j = 0; j <= n; j++) {
            // initialize i=0 and j=0 rows and cols with 0, as we need these as initial state 
            if (i === 0 || j === 0) {
                if (tabulation[i] === undefined) {
                    tabulation[i] = [];
                }
                //takes care of populating a row with all Zero
                //Happens only for first row and first column i.e., i=0 || j=0
                tabulation[i][j] = 0;
            } else {
                if (str1.charAt(i - 1) === str2.charAt(j - 1)) {
                    //If they match then its reduced to 1 + LCS( str1 - 1char, str2 - 1char)
                    tabulation[i][j] = 1 + tabulation[i - 1][j - 1]
                } else {
                    //If they don't match then its reduced to Max of [ LCS( str1 - 1char, str2) , LCS( str1, str2 - 1char) ]  
                    tabulation[i][j] = Math.max(tabulation[i - 1][j], tabulation[i][j - 1]);
                }
            }
        }
    }

    printLCS(str1, str2, m, n, tabulation);
    return tabulation;

}

function printLCS(str1, str2, m, n, tabulation) {
    // Start from the right-most-bottom-most corner and
    // one by one store characters in lcs[]
    var i = m;
    j = n;
    var result = [];
    while (i > 0 && j > 0) {
        // If current character in str1 and str2 are same, then
        // current character is part of result
        if (str1.charAt(i - 1) === str2.charAt(j - 1)) {
            // Put current character in result
            result.push(str1.charAt(i - 1));
            // reduce values of i, j and index
            i--;
            j--;
        } else {
            // If not same, then find the larger of two and
            // go in the direction of larger value
            if (tabulation[i - 1][j] > tabulation[i][j - 1]) {
                i--;
            } else {
                j--;
            }
        }
    }

    console.log(result.reverse().join(''));
}


(function unitTest() {
    var X = "AGGTAB";
    var Y = "GXTXAYB";
    var expected = 4;
    var result = [];
    var actual = LongestCommonSub_Recursive(X, Y, X.length, Y.length);
    console.log(LongestCommonSub_Iterative(X, Y, X.length, Y.length));

    if (actual === expected) {
        console.log('Pass');
    } else {
        console.log('Failed');
    }

})();