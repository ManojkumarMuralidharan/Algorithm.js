// Given two String, write a method to find if one is a 
// permutation of the other 

// i/p: asdf vs fdsa
// o/p true

// i/p: asdf vs fds
// o/p false


// Brute Force:
// check length
// if length matches
// iterate first string and create a hashmap adding frequency
// iterate second string and check in hashmap subtracting frequency
// if the final hashmap has 0 in all entries then it is 

function hashApproach(text1, text2) {
    const dict = {};
    let permuatation = true;
    text1.split('').forEach(element => {
        if(!dict[element]){
            dict[element]=1;
        }else{
            dict[element] += 1;
        }
    });
    text2.split('').forEach(element => {
        if(dict[element]>0){
            dict[element] -=1;
        }else{
            permuatation = false;
        }
    });
    return permuatation;
}
// Alternate approach
// Sort the two strings
// compare the strings

function sortText(text) {
    return (text.split('')).sort().join('');
}
function sortApproach(text1, text2){
    return sortText(text1) === sortText(text2);
}
 
sortApproach('asdf','fdsa');
// If its a string - ask if its ASCII or UTF-8/16
// If its a permutation - ask if Upper and Lower case matter
// If its a string match - ask if space matters

