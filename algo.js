// 912. Sort an Array



// Given an array of integers nums, sort the array in ascending order and return it.

// You must solve the problem without using any built-in functions in O(nlog(n)) time complexity and with the smallest space complexity possible.

 





/**
 * @param {number[]} nums
 * @return {number[]}
 */
function quicksort(nums) {
    if (nums.length <= 1) {
        return nums;
    }

    const pivot = nums[Math.floor(nums.length / 2)];
    const left = [];
    const right = [];
    const equal = [];

    for (let num of nums) {
        if (num < pivot) {
            left.push(num);
        } else if (num > pivot) {
            right.push(num);
        } else {
            equal.push(num);
        }
    }

    return quicksort(left).concat(equal, quicksort(right));
}

var sortArray = function(nums) {
    return quicksort(nums);
};