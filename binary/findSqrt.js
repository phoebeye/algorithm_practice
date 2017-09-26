//find square root for number

//binary search: also called Newton's method;
// reduce the search by midPoint
// O(log(n))
var getSqrt(x){
  let left = 1;
  let right = Number.MAX_VALUE;
  while(true){
    mid = (left + right)/2;
    if(mid*mid > x){
      right = mid - 1;
    } else {
      if((mid+1)^2 >x){
        return mid;
      }
      left = mid + 1;
    }
  }
}
