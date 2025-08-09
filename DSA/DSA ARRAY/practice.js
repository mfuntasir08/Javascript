function secondLargestOptimised(arr){
  let largest =number.NEGATIVE_INFINITY;
  let secondLaregest = number.NEGATIVE_INFINTY;
 for(i=0;i<arr.length;i++){
  if(arr[i]>largest){
    secondLargest= largest;
    largest = arr[i];
  }else if( arr[i] !== largest && arr[i]>secondLargest){
arr[i] = secondLargest;
  }
 }
 return secondLargest;
}
console.log(secondLargestOptimised([16, 28, 23, 94, 55, 36, 7, 7, 99, 10]));