// Valid Parentheses   QuestionEditorial Solution  My Submissions

// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// The brackets must close in the correct order, "()" and "()[]{}" are all valid but "(]" and "([)]" are not.

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  var str_arr = s.split('');
  var error = false;
  var stack=[];
  console.log(str_arr);
  str_arr.map(function(element){
      if(error)return;
      if(element==='{'||element==='['||element==='('){
          stack.push(element);
          return;
      }else if(element==='}'||element===']'||element===')'){
          var top_element = stack.pop();
          if((element==='}'&&top_element==='{')||(element===']'&&top_element==='[')||(element===')'&&top_element==='(')){
              //skip - do nothing
          }else{
              error = true;
              return;
          }
      }else{
          //skip the element;
      }
  });
  
  return (!error&&stack.length===0)? true:false;
};

//runnning time is O(n) - we need to walk the entire array once
//space - is O(n) for stack

// Solution:
// [1] use stack to track paranthesis
// [2] make sure stack is empty at the extends
// [3] if i/p contains only closing tag, stack stays empty. But this is an invalid case, make sure it is handled 