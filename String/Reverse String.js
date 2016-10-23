// Given an input string, reverse the string word by word.

// For example,
// Given s = "the sky is blue",
// return "blue is sky the".

// Update (2015-02-12):
// Try to solve it in-place in O(1) space. - in C

// click to show clarification.

// Clarification:
// What constitutes a word?
// A sequence of non-space characters constitutes a word.
// Could the input string contain leading or trailing spaces?
// Yes. However, your reversed string should not contain leading or trailing spaces.
// How about multiple spaces between two words?
// Reduce them to a single space in the reversed string.

//Things to consider 
// _____a______b
// should give an o/p of b_a
// HINT:
// Use filter function and filter(Boolean) to discard falsy values


/**
 * @param {string} str
 * @returns {string}
 */
var reverseWords = function(str) {
  //  str="the sky is blue"
    var reversedWords = str.split('');
    
    var start=0,end=reversedWords.length-1;
    while(start<end){
        var temp = reversedWords[start];
        reversedWords[start] = reversedWords[end];
        reversedWords[end] = temp;
        start++;
        end--;
    }
    console.log('arr:',reversedWords);
    start = 0;
    end=0;
    while(end<=reversedWords.length-1){
        
        if(reversedWords[end]!=' '&& end!=reversedWords.length-1){
            end++;
            continue;
        }else{
            console.log('end is',end,'start is:',start);
            var tempStart = start;
            var tempEnd ; 
            if(end===reversedWords.length-1){
                 console.log('end is',end,'start is:',start);
                 tempEnd = end;
            }else{
                tempEnd = end - 1;
            } 
            while(tempStart<tempEnd){
                 var temp = reversedWords[tempStart];
                reversedWords[tempStart] = reversedWords[tempEnd];
                reversedWords[tempEnd] = temp;
                tempStart++;
                tempEnd--;
            } 
            
            end ++;
            start = end;
        }
        console.log('end is ',end);
    }
    
    //remove space duplicates
    var result = [];
    //extract words
    var fullSentence = reversedWords.join('');
    result = fullSentence.split(' ').filter(Boolean);
    console.log('result is ',result);
        return result.join(' ');
};
