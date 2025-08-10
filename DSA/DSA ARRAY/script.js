// // DSA qs_1 =>second largest number in an array

// function secondLargestOptimised(arr) {

// let largest = Number.NEGATIVE_INFINITY;
// let secondLargest = Number.NEGATIVE_INFINITY;
// for(i=0;i<arr.length;i++){
//   if(arr[i]>largest){
//     secondLargest =largest;
//     largest = arr[i];
//   }else if(arr[i]!== largest && arr[i]>secondLargest){
//     secondLargest = arr[i];
//   }
// }

// return secondLargest;

// }
// console.log(secondLargestOptimised([16, 28, 23, 94, 55, 36, 7, 7, 99, 10]) );
 
// --------------------------------

// DSA qs_2 => Rotate array by k
// Given an integer array nums, rotate the array to the right by k steps
//  where k is non-negative.
 
// input nums = [1,2,3,4,5,6,7], k = 3// output [5,6,7,1,2,3,4] 
// input nums = [-1,-100,3,99], k = 2// output [3,99,-1,-100]

// function rotateArray(nums, k){
//   let size = nums.length;
//   if(k>size){
//     k = k % size;
//   }
//   const rotated = nums.splice(size - k, size);
// nums.unshift(...rotated);
// return nums;
// }
// console.log(rotateArray([1,2,3,4,5,6,7], 3)); 

// solution #02
// [1,2,3,4,5,6,7] =>[7,6,5,4,3,2,1] =>[5,6,7,4,3,2,1] =>[5,6,7,1,2,3,4]


 function reverse(nums,left,right)
{
  while(left<right){
    const temp = nums[left];
     nums[left++] = nums[right]; 
      nums[right--] = temp;
    
  }
}
function rotateArrayOptimised(nums, k){
reverse(nums,0,nums.length-1);
reverse(nums,0,k-1);
reverse(nums,k,nums.length-1);
return nums;
} 
console.log(rotateArrayOptimised([1,2,3,4,5,6,7], 3));




