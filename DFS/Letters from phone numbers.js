// 17. Letter Combinations of a Phone Number   QuestionEditorial Solution  My Submissions

// Given a digit string, return all possible letter combinations that the number could represent.

// A mapping of digit to letters (just like on the telephone buttons) is given below.

// http://d1gjlxt8vb0knt.cloudfront.net//wp-content/uploads/phoneKeyboard.png

// Given a keypad as shown in diagram, and a n digit number, list all words which are possible by pressing these numbers.
// For example if input number is 234, possible words which can be formed are (Alphabetical order):
// adg adh adi aeg aeh aei afg afh afi bdg bdh bdi beg beh bei bfg bfh bfi cdg cdh cdi ceg ceh cei cfg cfh cfi

// Let’s do some calculations first. How many words are possible with seven digits with each digit representing n letters? 
// For first digit we have at most four choices, and for each choice for first letter, we have at most four choices for 
// second digit and so on. So it’s simple maths it will be O(4n). Since keys 0 and 1 don’t have any corresponding alphabet 
// and many characters have 3 characters, 4n would be the upper bound of number of words and not the minimum words.

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    var input = digits;
    var data = ['','',['a','b','c'],['d','e','f'],['g','h','i'],['j','k','l'],['m','n','o'],['p','q','r','s'],['t','u','v'],['w','x','y','z']];
    var factor = Math.floor(input / 10);
    var remainder = input % 10;
    if(input>1 && input<10){
       return data[input];
    }else{
        //we build a string by iterating
        var result = [];
        result = data[remainder];
         console.log('remainder is:',remainder,':value',data[remainder],'result:',result);
        input = input - remainder;
        while(factor>0){
            console.log('factor is:',factor,':value',data[factor]);
            var temp_result = result;
            result = [];
            data[factor].map(function(element){
                temp_result.map(function(result_elm){
                    result.push(element + result_elm);
                    return element + result_elm;
                });
                console.log('result is :',result);
            });
            input = input/10;
            factor = Math.floor(input/10);
            remainder = input % 10;
        }
      console.log('remainder is:',remainder,':value',data[remainder]);
     
    
    }
    
    return result;
    
};


//runnning time is O(3^n) - we need to give out all possible combinations


//Solution:
// Now let’s do some examples.
// For number above 234. Do you see any pattern? Yes, we notice that the last character always either G,H or I and whenever it resets its value from I to G, the digit at the left of it gets changed.
// Similarly whenever the second last alphabet resets its value, the third last alphabet gets changes and so on. First character resets only once when we have generated all words. This can be looked from other end also. That is to say whenever character at position i changes, character at position i+1 goes through all possible characters and it creates ripple effect till we reach at end.
// Since 0 and 1 don’t have any characters associated with them. we should break as there will no iteration for these digits.
// Let’s take the second approach as it will be easy to implement it using recursion. We go till the end and come back one by one. Perfect condition for recursion. let’s search for base case.
// When we reach at the last character, we print the word with all possible characters for last digit and return. Simple base case.
// When we reach at the last character, we print the word with all possible characters for last digit and return. Simple base case.