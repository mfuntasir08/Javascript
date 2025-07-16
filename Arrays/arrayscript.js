
// let marks = [97,48,98,22,93,38,90,87];
// console.log(marks);
// console.log(marks.length);//property

// let heroes = ["spiderman","batman","thor","ironman","black-panther"];
//for loop:

// for (let i=0;i<heroes.length;i++){
// console.log(heroes[i]);
// };

//--------------------

//for of loop:

// for(let hero of heroes){
// console.log(hero.toUpperCase())
// }
  // practice qs:1
let sum = 0;
  let marks = [85,97,44,37,76,60];
//    for (let i = 0;i<marks.length;i++){
//     sum=sum+marks[i];
//    }
// console.log("Average =",sum/marks.length);

for(let mark of marks){
  sum+=mark;
}
console.log("Average =",sum/marks.length);






















