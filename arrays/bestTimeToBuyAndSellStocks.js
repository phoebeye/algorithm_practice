// Question_2: Best time to buy and sell stocks
// find the biggest diff of (arr[i], arr[j]) and i < j
// Say you have an array for which the ith element is the price of a given stock on day i.
// If you were only permitted to complete at most one transaction (ie, buy one and sell one share of the stock),
//design an algorithm to find the maximum profit.
// Input: [7, 1, 5, 3, 6, 4]
// Output: 5

//Solution_2
// Approach1: Brute force, two for loop to trial and error finding the all possible profits
//            and compare with best profit. O(n^2)
// Approach2: One pass,
function maxProfit(prices){
  let lowest = prices[0];
  let bestProfit =0;
  for(let i=1;i<prices.length;i++){
    if(prices[i]<lowest){
      lowest = prices[i];
    }
    if(prices[i] - lowest > bestProfit){
      bestProfit = prices[i] - lowest;
    }
  }
  return bestProfit;
}
