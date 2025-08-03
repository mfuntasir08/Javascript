// console.log("hello!");
//  function myFunction(){
//   console.log("Welcome Home")
//   console.log("we are learning JS")
//  }
// myFunction();
//  function myFunction(msg,n){ 
//   // parameter-->input
//   console.log(msg + n)
//  }

// myFunction("js is easy",90); //argument

//function-->2 numbers,sum

// function sum(x, y){
// console.log(x+y);
// }

// sum(1,68);

// function sum(x, y){
// s = x+y;
// return s;
// }

// let val = sum(3,5);
// console.log(val);

//SUM
// function sum(a,b){
//   return a+b;

// }
// const arrowSum = (a,b)=> {
//   console.log(a+b);
// }

// const arrowMul = (a,b)=>{
//   console.log(a*b);
// }

//practice qs =>1
 
// function countVowels(str){
//   let count = 0; 
//   for (const char of str){
//   if(char==="a"||char==="e"||char==="i"||char==="o"||char==="u"){
//     count++;

//       console.log("vowels",char);
//    } else {
//     console.log("consonant",char);
//    }
//   }
//   return count;
// }

// const countVowels=(str)=>{
//   let count = 0;
// for (const char of str){

//  if(char==="a"||char==="e"||char==="i"||char==="o"||char==="u"){
// count++;

// console.log("vowels",char);

// }

// }
// countVowels("count")


// let arr = [1,2,3,4,5,];

// let arr1 = [34,5,23,6,57,29];
   
// arr1.forEach((val)=>{
//  val*=val
// console.log(val);
// }


// let arr = [1, 2, 3, 4];
//  const output = arr.reduce((res,curr) =>{
// return res + curr;
//  }
//  )
//  console.log(output);
// let arr = [103, 382, 5463, 4785354,3838,282921,9292292];
//  const output = arr.reduce((prev,curr) =>{
// return prev > curr ? prev : curr;
//  }
//  )
//  console.log(output);

// func qs:

// let arr = [87,93,67,98,96,89,90,25,91,34,76,11];

// const nintyUpNumbers=arr.filter((val)=>{
// return val>=90;
// })
// console.log(nintyUpNumbers);

let n = prompt("enter a number:");
 let arr = [];

 for (let i=1;i<=n;i++){

arr[i-1]=i;

 }
 console.log(arr);
 const sumArr = arr.reduce((prev,curr)=>{
return prev * curr;
 })
console.log("sum=",sumArr);








