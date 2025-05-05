/* primitive and non primitive 
7 types: String,Number,boolean,null (empty string), undefined,Symbol, bigInt(scientific values and long values ke liye bigint)
Reference type (Non primitive) - memory mei directly reference alloacate krte hai
Array, objects, functions -> basic type
Javascript is dynamic type lang hai ya statically type lang hai? -> js is a dynamically typed lang because isme type define nai krna padta hai Yeh flexibility dynamic typing ke wajah se possible hai, lekin isse bugs aane ka risk bhi badhta hai.
Aap JavaScript me type safety chahte ho to TypeScript use kar sakte ho, jo statically typed superset hai JavaScript ka.
type safety bhi chahiye toh -> typescript pe jana padega

*/

// const score= 100; //see define nai krre hai kuch yaha pr toh issiliye 
// const scoreValue = 100.3

// const isLoggedIn = false
// const outsideTemp = null
// let userEmail;

// const id = Symbol('123');
// const anotherId = Symbol('123');
// console.log(id == anotherId); //here it won't give same bilkul bhi kyuki symbol har ka alag hai toh no
//bigInt
const bigNumber = 459464874878754n //if koi bada number hai toh end mei n laga do toh woh khud le lege barobar 

const heros = ["naagin","shaktiman"]; //array
let myObj = { // this is object
    name: "neha"

}

//function
const myFunction = function() {
    console.log("hi");
    
}
//kisi bhi chiz ka datatype kaise pata krre 
console.log(typeof bigNumber);