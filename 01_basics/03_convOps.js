//***************************Conversions*****************************
//let score = "22"
//console.log(typeof score);
//console.log(typeof (score));
//let valueInNumber = Number( score)
//console.log(typeof valueInNumber);
//console.log(valueInNumber);

/* "22" easily gets converted in 22 even if string 
 but " 22asbc" won't get converted it will give NaN
true -> 1; false -> 0;*/

//let isLoggedIn = 1
//let booleanIsLoggedIn = Boolean(isLoggedIn)
//console.log(booleanIsLoggedIn);

/* 1 -> true; 0 -> false
"" -> false
neha-> true*/

//let someNumber = 33
//let stringNumber = String(someNumber)
//console.log(stringNumber);
//console.log(typeof stringNumber);

//*************************************Operations*****************************************

let value = 3
let negValue = -value
// console.log(negValue);
// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**2);
// console.log(2/3);
// console.log(2%3);
// let str1 = "hi"
// let str2 = " neha"
// let str3 = str1 + str2
// console.log(str3);

/*how does it gives the answer for this if there situation like below */

// console.log("1" + 2);
// console.log(1 + "2");

/* so here what is happening is the num 1 in first is under double qoutes and in 2nd it 2 is in double qoutes so here it is considered as string 
that's why it added both and gave the answer 12*/
/* always use parenthesis*/ 

// console.log(+true); //it will print 1
// console.log(+""); //it will print 0

let num1, num2, num3
num1 = num2 = num3 = 2+2
let gameCounter  = 100
gameCounter++
console.log(gameCounter);

/*${} → Runs JavaScript code inside and injects the result into the string.
[] → Just text. No evaluation happens.*/
let x = 3;
const y = x++;
console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3" kyuki yaha pr post hai toh yaha pe pehle Y = 3 hi hoga phir post inc mei badhke 4 hota hai
let a = 3;
const b = ++a;
console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4" kyuuki yaha pr pre hai toh yaha b already 4 ho jayega phir calculate krega