// Implement a method to perform basic string compression using the counts of the repeated characters. 
// For example, the string aabcccccaaa would become a2b1c5a3. 
// If the "compressed" string would not become smaller than the original string, 
// your method should return the original string.


function StringCompression(input) {
    var currentChar = '',
        result = '',
        charArray = input.split(''),
        count = 1;
    //Iterate over all chars
    charArray.map(function(element) {
        if (element != currentChar) {
            if (currentChar != '') {
                result = result + currentChar + count;
            }
            currentChar = element;
            count = 1;

        } else {
            count++;
        }
    });
    if (currentChar != '') {
        result = result + currentChar + count;
    }
    return result.length > input.length ? input : result;
}

(function unitTest() {
    var input = 'aaabbbbccccdddaaaAA';
    var output = 'a3b4c4d3a3A2';
    if (StringCompression(input) === output) {
        console.log('pass');
    } else {
        console.log('fail');
    }

    if (StringCompression('') === '') {
        console.log('pass');
    } else {
        console.log('fail');
    }

    if (StringCompression('AbCd23458dshjl1a') === 'AbCd23458dshjl1a') {
        console.log('pass');
    } else {
        console.log('fail');
    }

})();