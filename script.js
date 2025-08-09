// Array - Declaration 


// let arr =["apple", "banana", "cherry"];
//  looping an array
// for (let i = 0; i < arr.length; i++)
//    {
//     console.log(arr[i]);
// }
 
// Inbuilt loop methods
//  const numbers =[1, 2, 3, 4, 5];

// const newNums = numbers.map((item,index,array) => {
//  return array [index] * 2;
//  })
// const newNums = numbers.reduce((prev,curr) => {
//  return prev + curr;
//  })

// console.log(newNums);

//  const nums =[1, 2, 3, 4];
//   const nums2 =[5, 6, 7, 8];

//   const finalNums = [...nums,...nums2]; //spread operator
  
//   function sum(...numbers) {
//     return numbers
//   }
//   console.log(sum(`${finalNums} dhaka ${nums2}`));
// splice array

// let arr =["apple", "banana", "cherry"];

// arr.splice(1, 2, "orange");

// console.log(arr);
 
// fill

// newArr = arr.slice(-1);
// console.log(newArr);

// const nums =[16, 8, 23, 54,29,27,10,478,87,97,81,27,309,5272,478,478,87,97,81,27,309,5272,478];
 
// nums.findIndex(2);
// newNums=nums.sort((a, b) => a - b); // ascending order
// const newNums2 =newNums.slice(-2,-1);
// console.log(newNums2);

//  nums.sort((a, b) => b - a); // descending order
//  console.log(nums)

function secondLargest(arr){
  const uniqueArr =Array.from(new Set(arr));
 const uniqueArr1 = uniqueArr.sort((a, b) => a- b);
const secLargest = uniqueArr1.slice(-2, -1);
  console.log(secLargest);
}
 secondLargest ([16, 28, 23, 94, 55, 36, 7, 7, 99, 10]);
























