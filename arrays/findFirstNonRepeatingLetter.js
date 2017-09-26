// find the 1st non-repeating letters from a string;
//Solution: use two arrays to keep track of letter counts and its corresponding position;
// find the letter with just 1 count and its index is the smallest;
function findNonRepeatingChar(s){
  let counts = [];
  let positions = [];
  for(let i=0;i<s.length;i++){
    let num = s.charAt(i).charCodeAt(0) - 97;
    counts[num] = counts[num] === undefined? 1 : counts[num]++;
    positions[num] = i;
  }
  let minIndx = s.length;
  for(let k=0;k<counts.length;k++){
    if(counts[k]===1 && positions[k] < minIndx){
      minIndx = positions[k];
    }
  }
  return minIndx === s.length? '_' : s.charAt(minIndx);

}
