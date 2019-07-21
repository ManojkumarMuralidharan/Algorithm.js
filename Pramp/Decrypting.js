//******** Question Start ********/
// Decrypt Message
// An infamous gang of cyber criminals named “The Gray Cyber Mob”, which is behind many hacking attacks and drug trafficking, has recently become a target for the FBI. After intercepting some of their messages, which looked like complete nonsense, the agency learned that they indeed encrypt their messages, and studied their method of encryption.

// Their messages consist of lowercase latin letters only, and every word is encrypted separately as follows:

// Convert every letter to its ASCII value. Add 1 to the first letter, and then for every letter from the second one to the last one, add the value of the previous letter. Subtract 26 from every letter until it is in the range of lowercase letters a-z in ASCII. Convert the values back to letters.

// For instance, to encrypt the word “crime”

// Decrypted message:	c	r	i	m	e
// Step 1:	99	114	105	109	101
// Step 2:	100	214	319	428	529
// Step 3:	100	110	111	116	113
// Encrypted message:	d	n	o	t	q
// The FBI needs an efficient method to decrypt messages. Write a function named decrypt(word) that receives a string that consists of small latin letters only, and returns the decrypted word.

// Explain your solution and analyze its time and space complexities.

// Examples:

// input:  word = "dnotq"
// output: "crime"

// input:  word = "flgxswdliefy"
// output: "encyclopedia"
// Since the function should be used on messages with many words, make sure the function is as efficient as possible in both time and space. Explain the correctness of your function, and analyze its asymptotic runtime and space complexity.

// Note: Most programing languages have built-in methods of converting letters to ASCII values and vica versa. You may search the internet for the appropriate method.

// Constraints:

// [time limit] 5000ms

// [input] string word

// The ASCII value of every char is in the range of lowercase letters a-z.
// [output] string
//******** Question End ********/


//******** Thoughts ********/
// Input
// consists only of lowercase latin letters
// dealing with only ASCII values - 128 things to consider

// First letter - convert to ASCII and add 1
// From second letter -> N letter - add value of prev
// Last step- subtract 26 from letter 1 to N ( so its in ASCII )


// We are dealing with only 128 characters
// brute force
// take in a word, process each character as you parse


// Can we do better
// alaska -> a is reapted 3 times
// process a and store its value in a map
// re-use the same for decrptying

// input:  word = "dnotq"
// output: "crime"

// d -> c

// we need a decrypt

// First letter - convert to ASCII and add 1
// From second letter -> N letter - add value of prev
// Last step- subtract 26 from letter 1 to N ( so its in ASCII )

//******** Thoughts ********/


function decrypt(word) {
    // d	n	o	t	q
    const firstCharacter =  extractFirstCharacter(word); //d
    const asciiValue = convertToASCII(firstCharacter); //100
    let resultantArray = [];
    resultantArray.push(convertNumtoAscii(asciiValue-1)); //99 c
     //[n,o,t,q];
    const remaninValueArray = word.slice(1,word.length).split(''); //
     remaninValueArray.reduce((accumulutor,value)=>{
       const asciiValue = convertToASCII(value); //110
       const newAsciiValue = reduceFromPreviousValue(accumulutor,asciiValue);  // 110 - 100 = 10
       const originalValue = add26TillAscii(newAsciiValue); // 10 +(26* 4)= 114
       resultantArray.push(convertNumtoAscii(originalValue));//r
       return asciiValue;
     },asciiValue); //100
     
     return resultantArray.join('');
   }
   
   function reduceFromPreviousValue(prev, current){
     return current - prev;
   }
   
   function extractFirstCharacter(word){
    return word.split('')[0];
   }
   
   function convertToASCII(character){
     return character.charCodeAt(0);
   }
   
   // This could go recursively and push out algorightm run time greater than O(N), 
   // so its better not to do it recursively as it could incur a lot of callStack
   // Its better to do this iteratively
   function add26TillAscii(num){
       while(num<97){
         num = num + 26;    
       }
       return num;
   }
   
   function convertNumtoAscii(num){
     return String.fromCharCode(num);
   }
   
   
   decrypt("dnotq");


   //Useful functions
   // fromCharCode()
   // toCharCode()
   // split()
   // slice()