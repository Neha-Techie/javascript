/*---------------Arrays----------------*/
const myArr = [0,1,2,3,4,5]
// console.log(myArr[0]); // o/p-> 0
// /* shallow copy of an obj is a copy of whose properties share the share references(point to the underlying same)as those to the source obj from which the copy was made*/
// const myHeros = ["ironman","captainamerica"]
// const myArr2 = new Array(1,2,3,4)
// console.log(myArr[1]); // o/p-> 1
// console.log(myHeros[1]); // o/p-> captainamerica

/*----------Array methods-----------*/
// myArr.push(6)
// console.log(myArr);
/* o/p->[
    0, 1, 2, 3,
    4, 5, 6
  ] this is will add 6 to it*/
// myArr.pop()
// console.log(myArr); // o/p-> [ 0, 1, 2, 3, 4 ] this will remove the last one
// myArr.unshift(9) 
// console.log(myArr);// o/p-> [ 9, 0, 1, 2, 3, 4 ] it will add infront of 0
// myArr.shift(1) 
// console.log(myArr); // o/p [ 1, 2, 3, 4, 5 ]  it will change instead of 0 it will shift and give 1
// console.log(myArr.includes(9)); // o/p -> it will give false because there is no 9
// //console.log(myArr.indexOf(3));
// console.log(myArr.includes(1));//o/p -> it is giving true because
// const newArr = myArr.join()
// console.log(myArr); // o/p-> [ 0, 1, 2, 3, 4, 5 ]
// console.log( newArr); // o/p-> 0,1,2,3,4,5
 
/*------------- slice, splice--------------------*/

console.log("A", myArr); // o/p->  A [ 0, 1, 2, 3, 4, 5 ]
const myn1 = myArr.slice(1,3) 
//console.log(myn1); // o/p-> [ 1, 2 ]
console.log("B",myArr); // o/p->  B [ 0, 1, 2, 3, 4, 5 ]
const myn2 = myArr.splice(1,3)
console.log("C", myArr); // o/p -> C [ 0, 4, 5 ]
//console.log(myn2); // o/p-> [ 1, 2, 3 ]

/* what is the difference between spice and splice 
-slice() method array ka ek shallow copy return karta hai, bina original array ko change kiye.
-splice() method array ko modify karta hai — elements delete, add, ya replace karta hai.
*/