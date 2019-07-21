// Implement an algorithm to check if a string has all unique characters.
// What if you cannot use additional data structure

// Brute force approach
// iterate through the string
// push each character in a hashMap
// iterate through the hashmap and check and if there is a count > 1
// if exists - Not unique
// else - unique
// Runtime Complexity = O(2n) = O(n)
// Space Complexity = O(n) as we use a extra memory for hashmap


// Example 
// abncasdkasjdks
// asdfhgjtyuiop

// BCR - O(n) since I have to look at all characters to determine uniqueness


// If no DS is to be used
// we can do it O(n^2)
// Another approach is to sort the string and do a linear comparison

// Sorting takes additional ds and costs O(nlogn)
// linear search takes O(n)


function findUniqueCharacters(text){
    const dict={};
    let found = true;
    text.split('').forEach((element)=>{
       if(dict[element]){
           found = false;
       }else{
           dict[element]=element;
       }
    });
    return found;
}

