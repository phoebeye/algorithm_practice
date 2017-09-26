// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
//
// The brackets must close in the correct order, "()" and "()[]{}" are all valid but "(]" and "([)]" are not.

// find matching using key/value pair obj and stack;
//Solution:
//O(n)
var isValid = function(s){
  let match = {
    "(" : ")",
    "[" : "]",
    "{" : "}"
  }
  let stack = [];
  if(s.length === 0){
    return true;
  }
  if(s.length%2 !== 0){
    return false;
  }
  for(let i=0;i<s.length;i++){
    if(stack.length ===0){
      stack.push(s[i]);
    } else {
      if(match[stack[stack.length - 1]] === s[i]){
        stack.pop();
      } else {
        stack.push(s[i]);
      }
    }
  }
  return stack.length === 0? true: false;
}
