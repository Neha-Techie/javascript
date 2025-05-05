/* ------------ this is basics operations----------------*/

// console.log( 2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 <=1 );
// console.log(2 != 1);
// console.log(2 != 1);
/* ------------- here it will give you issues because one is string and other is number ---------------------------- */
// console.log("2" > 1); //it will give true
// console.log("02" > 1); // it will give true
/* now here what happens is yaha(javascript) pr chal jata hai do datatypes (string and number) but typescript mei ye error dega*/

// console.log(null > 0);
// console.log(null == 0 );
// console.log(null >=0);
/* this type of conversions can give you issues from line 14 to line 23 */
/* The reason is that an equality check == and comparisons > < >= <= work differently
comparisons convert null to a number,treating it as 0.
that's why (3) null >=0 is true and (1) null>0 is false.*/
// console.log(undefined == 0);
// console.log(undefined > 0 );
// console.log(undefined < 0 );

/* === -> strict check krta hai ye  */
console.log("2" === 2);



