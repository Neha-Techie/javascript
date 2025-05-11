// const user = {
//     username: "neha",
//     price:999,
// welcomeMessage: function(){
// console.log(`${this.username}, welcome to website`);
// }
// }
// user.welcomeMessage()
// user.username="sam"
// user.welcomeMessage()
//console.log(this);

// function chai(){
//     let username="neha"
//     //console.log(this);
//     console.log(this.username);// undefined dega op kyuki function ke andr nai print kr payega woh 
    
// }
// chai() 
/*function ke andr agar 'this' ko print krte hai toh bohot sare values milte hai

<ref *1> Object [global] {
  global: [Circular *1],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  queueMicrotask: [Function: queueMicrotask],
  structuredClone: [Function: structuredClone],
  atob: [Function: atob],
  btoa: [Function: btoa],
  performance: [Getter/Setter],
  fetch: [Function: fetch],
  navigator: [Getter],
  crypto: [Getter]

*/ 
// const chai = function(){
// let username = "neha"
// console.log(this.username); //undefined
// } ab yaha jaise aa nai raha dekho toh ab kya krna hai niche dekho 

// const chai = () =>{ //arrow function mei bhi same hi aata hai 
//     let username = "neha"
//     console.log(this.username); //undefined
//     console.log(this); // op- {}
//     }
// chai()

// this is arrow function () => {}  +
    
    const addTwo = (num1, num2) => {
        return num1 + num2
    }
    console.log(addTwo(3,4));

    const myArray = [ 2,5,6,7,8]
//myArray.forEach(()=>{}) this is arrow functions
