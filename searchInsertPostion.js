// using binary search algo

function searchInsert(nums, target) {
  let start = 0;
  let end = nums.length - 1

  while (start <= end) {
    let middleSecIndex = Math.floor((start + end) / 2);

    if (nums[middleSecIndex] === target) {
      return middleSecIndex;
    }

    if (nums[middleSecIndex] < target) {
      end = middleSecIndex - 1;
    }
    else {
      start = middleSecIndex + 1;
    }
  }

  return -1;
}

console.log(searchInsert([1, 2, 3, 4, 5], 4));
