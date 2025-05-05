/*-------------------------numbers---------------------------*/
// const score = 400 
// const balance  = new Number(100)
// console.log(balance);// o/p-> [Number: 100]
// console.log(balance.toString().length);
// console.log(balance.toFixed(2));
// const otherNumber = 23.8966 
// console.log(otherNumber.toPrecision(3)); //it will round off the num to 23.9 -> precision means rounding off
// const hunderds = 100000
// console.log(hunderds.toLocaleString('en-IN')); //O/P ->1,00,000

/* --------------------MATHS---------------*/
// console.log(Math);
// console.log(Math.abs(-4)); // o/p-> 4
// console.log(Math.round(4.6));  // o/p-> 5
// console.log(Math.ceil(4.3));  // o/p-> 5
// console.log(Math.floor(4.9));   // o/p-> 4
// console.log(Math.min(4,3,5,7,8));  // o/p-> 3
// console.log(Math.max(4,3,5,7,8)); // o/p-> 8 

// console.log(Math.random()); // o/p -> always will come between 0 and 1 
console.log((Math.random()*10)+1);
console.log((Math.random()*10)+1);


const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min +1 )) + min);