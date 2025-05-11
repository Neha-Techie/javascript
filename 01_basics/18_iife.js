// Immediately Invoked Function Expressions (IIFE)
// function chai(){
//     console.log(`DB Connected`);   
// }() yaha pr kya hua ki error aata hai parenthesis ke baad toh kya krege ki pura function ko hi laga dege ()
// (function chai(){
//     console.log(`DB Connected`);   
// })()// o/p DB Connected

// (function aurcode() => { //yaha pr arrow functions aisa likha toh error deta hai 
//   console.log(`DB Connected two`);
// })()
// (function chai(){
//     console.log(`DB Connected`);   
// })();// o/p DB Connected
// (function chai(){
//     console.log(`DB Connected two`);   
// })()// o/p- error kyu? upar toh chalra tha yaha nai chalra because
// so now tumko kya krna hoga ki first wale mei end krna padega toh kyu end? kyuki IFFE ko pata hi nai kaha rukna hai aur new krna hai toh issiliye
// ab usne print kiya o.p DB Conncted 2 baar

(function chai(){
    //named IFFE
console.log(`DB Connected`);   
})();// o/p DB Connected
((name)=>{ //Unnamed IFFE
console.log(`DB Connected two ${name}`);   
})('neha')

// Do IFFE agar bola toh first function ka parenthesis pehle end kro nai kiya toh error dega 