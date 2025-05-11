// functions meaning sab code ek package mei bandh krdiya hai woh package kitni bhi baar uthake copy kiya jayega use krne 
// console.log("n");
// console.log("e");
// console.log("h");
// console.log("a"); // -> agar ye sab 100 baar krna pada toh jyada hoega so now we use function
function sayMyName(){
    console.log("n");
    console.log("e");
    console.log("h");
    console.log("a");
}
// jitne baar call krna hai 
// sayMyName() // saymyname is reference and () is execution. how many times you need
// sayMyName()
// function addTwoNumbers(num1,num2){ //js mei type dene ke zarurt nai pr kuch errors aate hai
//     console.log(num1 + num2);
//     //console.log("4",5); // yaha pr js usko string hai ek dusra bhi string hi hoga aisa samjh ke woh 45 de deta hai woh issue is in js ki type nai deta but then hum ye kr sakte with if else and everything we will learn this in some lectures    
// }
// addTwoNumbers(3,4)
//now if want to store the result somewhere then we will get few errors.
// const result = addTwoNumbers(3,5) // o/p -> 8
// console.log("Result:", result); // o/p -> Result: undefined
// // so now work again 
// function addTwoNumbers(num1,num2){
//     // let result = num1 + num2
//     // return result // if you have return then the code will not print
//     return num1 + num2
// }
// const result = addTwoNumbers(3,5)
// console.log("Result:", result); //o/p-> Result: 8
// function loginUserMessage(username){
//     return '${username} just logged in'
// }
// loginUserMessage("neha");
// const login =loginUserMessage("neha")
// console.log("loggedIn User:", login); // nahi chalra 
//o/p-> loggedIn User: ${username} just logged in which is wrong
//right wala
// function loginUserMessage(username){
//     return `${username} just logged in`
// }
// console.log(loginUserMessage("neha"))

/*----------when users adds products in cart toh kitne parameters hote hai pata nai hote issiliye phir uske liye kaise krna hai functions use woh krr rahe hai*/
// calculate cart price
//... <- is rest operator and spread operator jaisa use waisa naam hoga
// function calculateCartPrice(...num1){ //rest operator: meaning make bundle of everything and give
//         return num1
// }
// console.log(calculateCartPrice(200,300,400)); /* jab tak (num1) kiya tha tab tak sirf first wala price aara tha jaise hi ... daala cart mei 3 hai woh teeno aagya usme aur jitna daloge woh sab add hojayega*/
/*function calculateCartPrice(val1,val2,...num1){ 
        return num1
}
console.log(calculateCartPrice(200,300,400,2000));
yaha pe kya hora hai if you give val1 and 2 toh woh start ke do values  usme chali jayegi and ...num1 mei jo hai remaining woh  print kregei toh now here the output is
o/p: [400,2000]*/  

//objects
// const user = {
//     username: "neha",
//     price: 199
// }
// function handleObject(anyobject){
//     console.log(`username is ${anyobject.username} and price is ${anyobject.price }`);   
// }
// (handleObject(user));// user is calling from function toh hi print krega

// handleObject({ -> direct bhi kr sakte aise
//     username:"neha",
//     price:"399"
// })
// const myNewArr = [200,400,500,600]
// function returnSecondValue (getArray){
// return getArray[2]
// }
// console.log(returnSecondValue(myNewArr));