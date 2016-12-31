// Given a string, find the length of the longest substring without repeating characters.

// Examples:

// Given "abcabcbb", the answer is "abc", which the length is 3.

// Given "bbbbb", the answer is "b", with the length of 1.

// Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.

// Show Company Tags
// Show Tags
// Show Similar Problems

var lengthOfLongestSubstring = function(s) {
    var hashMap = {};
    var result = 0;
    var charArray = s.split('');

    for (var i = 0, start = 0; i < charArray.length; i++) {

        if (hashMap[charArray[i]] != undefined && start <= hashMap[charArray[i]]) {
            //if already found
            start = hashMap[charArray[i]] + 1;
        }
        hashMap[charArray[i]] = i;
        result = Math.max(result, i - start + 1);
    }
    return result;

};

(function UnitTest() {
    var expected = 3;
    var input = "abcabcbb";
    var actual = lengthOfLongestSubstring(input);
    if (actual === expected) {
        console.log('Pass');
    } else {
        console.log('Fail');
    }
})();

(function UnitTest() {
    var expected = 3;
    var input = "abcabcbb";
    var actual = lengthOfLongestSubstring(input);
    if (actual === expected) {
        console.log('Pass');
    } else {
        console.log('Fail');
    }
})();

(function UnitTest() {
    var expected = 1;
    var input = "bbbbb";
    var actual = lengthOfLongestSubstring(input);
    if (actual === expected) {
        console.log('Pass');
    } else {
        console.log('Fail');
    }
})();