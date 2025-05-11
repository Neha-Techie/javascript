// truthy values

// const userEmail = "n@gmail.com" // string di hai issiliye usne maan liya hai ki woh email hi hai krke
// if(userEmail){
//     console.log("got user email"); // ye o/p aayega kyuki maan liya gaya hai ki hai bhale humne uske conditions nai diye hai phir bhi woh this is called as truthy values based on string
// } else{
//     console.log("don't have user email");
// }

// if(userEmail.length === 0 ){
//     console.log("Array is empty");   // empty nai hai issiliye ye print nai hora agar const mei [] diya tr hoega ye print
// }

// const emptyObject = {}

// if(Object.keys(emptyObject).length===0){
//     console.log("Object is empty");
    
// }

// " " empty string hai woh else wala print hoga but aagar empty array  [] hai toh  first wala run hoga
//falsy value:0,-0, BigInt 0n, "", null, undefined,NaN -> are false values
// "" agr string ke andr hai "0", "false", " ", [ ], { }, function(){} -> toh ye truthy values hai

//Nullish Coalescing Operator(??): null & undefined pe hai pura ye 

//let val1;
//val1 = 5 ?? 10 // o/p->5; agar first wali hi jani hai toh ?? kyu use kiya
//val1 = null ?? 10 // o/p-> 10; agar first null hai toh ye next wala ka print krega agar kuch value nai hai toh null hi krega
// val1 = null ?? undefined ?? 14 //o/p 14
//val1 = undefined ?? 20 //o/p 20
// var1 = undefined ?? 30 // o/p undefined
// val1 = null ?? 10 ?? 20 //o/p is 10 jo first hoga wahi assign hoega 
// console.log(val1);


// Terniary operator
// condition ? true: false
// const iceTea = 100
// iceTea >= 120 ? console.log("less than 80") : console.log("more than 80");
