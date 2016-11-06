// Assume you have a method isSubstring which checks if one word is a substring of another
// Given two strings, s1 and s2, write code to check if s2 is a roation of s1 using only `ONE`
// call to isSubstring function.
// Example: 'waterbottle' is a rotation of 'erbottlewat'

function isSubstring(actualString, substring) {
    return actualString.indexOf(substring) != -1;
}

function StringRotate(string1, string2) {
    //concate the rotated string with itself
    // erbottlewat + erbottlewat =  erbottlewaterbottlewat
    var newString = string2 + string2;
    return isSubstring(newString, string1);
}

(function unitTest() {
    var string1 = "waterbottle";
    var string2 = "erbottlewat";
    if (StringRotate(string1, string2)) {
        console.log('pass');
    } else {
        console.log('fail');
    }
})();

(function unitTest() {
    var string1 = "mandlebone";
    var string2 = "lebon";
    if (isSubstring(string1, string2)) {
        console.log('pass');
    } else {
        console.log('fail');
    }
    var string3 = "asdsad";
    var string4 = "21312312";
    if (isSubstring(string3, string4)) {
        console.log('fail');
    } else {
        console.log('pass');
    }
})();