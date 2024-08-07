function maxProfit(prices) {

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

console.log(maxProfit([7,6,4,3,1]))
