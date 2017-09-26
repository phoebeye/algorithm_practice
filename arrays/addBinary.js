// Given two binary strings, return their sum (also a binary string).
//
// For example,
// a = "11"
// b = "1"
// Return "100"

//Solution: iterate binary from end and use carry to carry over number for the next iteration;
var addBinary = function(a, b) {
    let carry = 0;
    let i = a.length - 1;
    let j = b.length - 1;
    let str = '';

    while(j>=0 || i >=0){
        let sum = carry;
        if(i>=0){
            sum += parseInt(a[i]);
            i--;
        }
        if(j>=0){
            sum += parseInt(b[j]);
            j--
        }
        let item = sum%2;
        carry = Math.floor(sum/2);
        str = item + str;
    }
    return carry === 0? str : carry + str;
};
