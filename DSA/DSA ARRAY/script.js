// DSA qs_1 =>second largest number in an array

function secondLargestOptimised(arr) {

let largest = Number.NEGATIVE_INFINITY;
let secondLargest = Number.NEGATIVE_INFINITY;
for(i=0;i<arr.length;i++){
  if(arr[i]>largest){
    secondLargest =largest;
    largest = arr[i];
  }else if(arr[i]!== largest && arr[i]>secondLargest){
    secondLargest = arr[i];
  }
}

return secondLargest;

}
console.log(secondLargestOptimised([16, 28, 23, 94, 55, 36, 7, 7, 99, 10]) );




















