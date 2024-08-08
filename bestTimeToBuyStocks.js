function maxProfit(prices) {

  /**
   * Goal is to find the smallest value in array from left to right. But first, set it with
   * the first element in array.  If the next value of element is lower than previous leastNumber, then set
   * the leastNumber variable to it and set the maxProjectedProfit[i] to 0.
   */    
  const maxProjectedProfit = new Array(prices.length);
  let leastNumber = prices[0]

  maxProjectedProfit[0] = 0
  for(i = 1; i < prices.length; i++){
      if(leastNumber > prices[i]){
            leastNumber = prices[i]
            maxProjectedProfit[i] = 0;
      }
      else{
            maxProjectedProfit[i] = prices[i] - leastNumber
      }
  }

  return Math.max(...maxProjectedProfit)

}

console.log(maxProfit([5,2,4,1]))
