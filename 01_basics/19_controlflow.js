// humesha pura code conditional code pe run hona chahiye this is called as Control flow
// if
/* Syntax
if(condition){
}
if(true){ // andr jayega 
}
if (false){ //false hai toh nai jayega
}
*/

// const isUserLoggedIn = true
// if(2 == "2"){ //agar sirf type krna hai toh ye but strict check krna hai toh === toh kuch print nai hoega
//     console.log("executed");
// }
/*Comparison Operators
<, >, <=, >=, !=, ==,===() */

// const temperature = 41
// if(temperature >= 40){
//     console.log("less than 50");   
// } else{
//     console.log("temperature is greater than 50");    
// }
// console.log("executed");

// const score = 200
// if(score >100){
//     const power = "fly"
//     console.log(`user power:${power}`);   
// }
// console.log(`user power:${power}`); //yaha pr error aayega kyuki jo define kiya hai woh scope ke andr hai { } yaha toh issiliye toh error dega 

//const balance =1000 
// if(balance>500) console.log("test");//implicit scope ek hi line mei

//multiple conditions -----------------------

// if(balance<500){
//     console.log("less than 500");   
// }else if(balance<750){
//     console.log("less than 750");   
// }else if(balance<900){
//     console.log("less than 900");
// } else {
//     console.log("less than 1200");
    
// }

const UserLoggedIn = true
const debitCard = true
const loggedinfromGoogle = false
const loggedinfromEmail = true
if(UserLoggedIn && debitCard){
    console.log("allowed to buy course");
} 
if(loggedinfromEmail || loggedinfromGoogle){
    console.log("user logged in");   
}