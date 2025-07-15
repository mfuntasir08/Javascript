
// let i=1;
// do {
//   console.log("i=",i);
//   i++;
// } while(i<=10);
// let str = "1234567890";

// let size = 0;

//  for(let val of str){
//   console.log("val=",val);
//   size++;
//  }

// console.log("string size=",size);

//for in loop

// let student = {
// name : "Muntasir Fahim",
// age : 19,
// gpa : 5.00,
// ispass : true,
// };
// for ( let i in student ){
//   console.log(i);
// }

// practice qs 1:print all even numbers from 0 to 100 

// for (let i = 0;i <= 100; i++){

// if(i % 2 !== 0) {

// console.log(i);
// }
// }
// practice qs 2:

// let gameNum = 46;
 
// let userNum = prompt("Guess the game num :");

// while(userNum != gameNum) { //game
//  userNum  = prompt("you have entered the wrong number.Guess again:");
// }

// console.log("congratualations,you have entered the right number");

//string
// let str ="MuntasirIslam";

// let str2 ='MuntasirFahim';
// console.log(str2[8]);
 
 //template literals
// let specialString = `This a template literal`
// console.log(specialString);

// let obj = {
// item:"book",
// price:260,
// }
// let output = `The cost of the ${obj.item} is ${obj.price} taka.`;
// console.log("The cost of the",obj.item,"is",obj.price,"taka.");

// console.log(output);

// let specialString = `This is a template literal ${(548*36)+((910)-(100*20))}`;

// console.log(specialString);

// console.log(" Muntasir\tIslam\n\t\tFahim");
//string.method

// let str ="MUNTASIR ISLAM";
// console.log(str);
// let newstr=str.toLowerCase();
// console.log(newstr);
// let str ="       muntasir fahim js     ";
// console.log(str.trim());

let str1 ="muntasirislam ";

console.log(str1.replaceAll("i","e"));