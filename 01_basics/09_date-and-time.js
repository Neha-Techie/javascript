/*------------------Date-----------------------------*/

let myDate = new Date()
// console.log(myDate); // o/p - > 2025-04-30T07:11:05.483Z unreadbale
// console.log(myDate.toString());// o/p - > Wed Apr 30 2025 12:41:58 GMT+0530 (India Standard Time)
// console.log(myDate.toDateString()); // o/p - > Wed Apr 30 2025
// console.log(myDate.toLocaleString());// o/p - > 30/4/2025, 12:43:48 pm
// console.log(myDate.toLocaleString()); // o/p -> 30/4/2025, 12:48:59 pm0 
// console.log(myDate.toTimeString()); // o/p - > 12:48:59 GMT+0530 (India Standard Time)
// console.log(myDate.toUTCString()); // o/p - > Wed, 30 Apr 2025 07:18:59 GMT
// console.log(typeof myDate); // o/p -> Object
 let myCreatedDate = new Date(2023,0,23) // here in this 0 -> january se 11-> decemeber because 0 se arrays start hota hai so
// console.log(myCreatedDate.toDateString());// o/p - > Mon Jan 23 2023
// console.log(myCreatedDate.toLocaleString()); // o/p->23/1/2023, 12:00:00 am

/*---------------------Time-------------------------*/

let myTimeStamp  = Date.now()
console.log(myTimeStamp); // o/p-> 1745998934644
console.log(myCreatedDate.getTime()); // o/p -> 1674412200000
console.log(Date.now()/1000); // o/p -> 1745999092039 ms /1745999121.921

// `${newDate.getDay()} and time`
newDate.toLocaleString('default',{
weekday: "long",
timeZone: "CET"
})