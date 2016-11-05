// Write a method to replace all spaces in a string with '%20'. You may assume that the string

// has sufficient space at the end to hold the additional characters, and that you are given the "true"

// length of the string. (Note: If implementing in Java, please use a character array so that you can

// perform this operation in place.)

// EXAMPLE

// Input: "Mr John Smith    ", 13

// Output: "Mr%20John%20Smith"


function urlify(input) {
    if (!input) {
        return "";
    } else {
        var individualWords = input.split(' ');
        var concatenatedString = '';
        individualWords.map(function(element, index) {
            if (element === '') {
                return;
            }else if (index != individualWords.length) {
                concatenatedString = concatenatedString + element + "%20";
            } else {
                concatenatedString = concatenatedString + element;
            }

        });
        return concatenatedString;
    }
}

//TestCase 
(function unitTest() {
    var input = "Mr John Smith    ";
    var output = "Mr%20John%20Smith";
    if (urlify(input) === output) {
        console.log('Pass');
    } else {
        console.log('Fail');
    }
})();