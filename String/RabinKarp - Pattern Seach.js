//Rabin Karp Algorithm

//// LEARN HOW TO GET A SUBSTRING IN JS - SUBSTRING ( START_INDEX, END_INDEX)

// Given a text txt[0..n-1] and a pattern pat[0..m-1], write a function search(char pat[], char txt[]) that prints all occurrences of pat[] in txt[]. You may assume that n > m.

// Examples:
// 1) Input:

//   txt[] =  "THIS IS A TEST TEXT"
//   pat[] = "TEST"
// Output:

// Pattern found at index 10

// 2) Input:
//   txt[] =  "AABAACAADAABAAABAA"
//   pat[] = "AABA"
// Output:

//    Pattern found at index 0
//    Pattern found at index 9
//    Pattern found at index 13

var PRIME_NUMBER = 3;

function patternMatch(string, pattern) {
    var result = [];
    var n = string.length;
    var m = pattern.length;
    var pattern_hash = createHash(pattern, 0, m);
    var text_hash = createHash(string, 0, m);
    //Loop should stop at n - m , check using small example like 'THIS' and 'THI' 
    // i should stop at 2, as n = 5, m=3 , n-m=2
    for (i = 0; i < n - m; i++) {
        if (pattern_hash === text_hash && equalsString(pattern, string.substring(i, m + i))) {
            result.push(i);
        }
        //Calculate the rolling hash for next character
        text_hash = rollingHash(text_hash, string, i + 1, m);
    }
    return result;
}

function equalsString(str1, str2) {
    if (str1 === str2) {
        return true;
    } else {
        return false;
    }
}

function rollingHash(current_hash, string, start, length) {
    //Item to remove from hash
    var charCode = parseInt(string.charCodeAt(start - 1));
    //Item to add to hash
    var charToAdd = parseInt(string.charCodeAt(start + length - 1));

    current_hash = current_hash - charCode;
    current_hash = current_hash / PRIME_NUMBER;
    //Item to add to hash will always be multiplied with the exponent value always equal to length -1 of pattern
    current_hash = current_hash + (charToAdd * Math.pow(PRIME_NUMBER, length - 1));
    return current_hash;
}

function createHash(string, start, length) {
    var hash = 0;
    var charArray = string.split('');

    charArray.map(function(value, index) {

        if (index >= start && index < (start + length)) {
            hash += parseInt(string.charCodeAt(index)) * Math.pow(PRIME_NUMBER, index);
        }
    })
    return hash;
}

//Should {Pass}
(function unitTest() {
    var input_text = "THIS IS A TEST TEXT";
    var pattern = "TEST";
    var result = [10];
    if (isEqual(patternMatch(input_text, pattern), result)) {
        console.log('pass');
    } else {
        console.log('Fail');
    }

})();

//Should {Pass}
(function unitTest2() {
    var input_text = "THIS IS A TSET TEXT";
    var pattern = "TEST";
    var result = [];
    if (isEqual(patternMatch(input_text, pattern), result)) {
        console.log('pass');
    } else {
        console.log('Fail');
    }

})();

// Comparing two dimensional arrays 
// You cannot compare 2D arrays like array1 == array2 in javascript 
function isEqual(array1, array2) {
    return (array1.join('-') == array2.join('-'));
}