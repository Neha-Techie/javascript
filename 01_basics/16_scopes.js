// let a =10; // ye bahar likhre ho this is global scope jo bahar likha jata hai
// const b =20;
// var c = 300;
// {} //-> this is scope; obj mei bhi ata hai pr function ke sath aaye toh scope
// if (true){ //-> block scope[scope ke andr hoti available but bahar nai jaani chahiye]
// let a =10;
// const b =20;
// var c = 40;
// }
// console.log(a); //giving error
// console.log(b);//giving error
// console.log(c);// ye print hora hai kyu kyuki var bahar aata hai 
/*ab agar mei globe ek value aur block mei uska other value print karva rahi toh kaisa hoega*/
// let a =12;
// if (true){
//     let a=10;
//     const b =20;
// console.log("INNER:", a); // yaha pr woh andr ka a value dega
// }
/*for (let index = 0; index < Array.length; index++){
    const element = Array[index];
}*/
//console.log(a); //value a jo bahar tha scope mei tha value woh print hota hai 

//closures: ke liye DOM aana chahiye
// function one(){
//     const username = "neha"
//     function two(){
//     const website = "YT"
//     console.log(username);    
//     }
//     //console.log(website);
//     two()    
// }
//one()
// if (true){
//     const username="neha1"
//     if(username==="neha1"){
//         const website="  YT"
//         console.log(username + website);
//     }
   //console.log(website);    1st error
//}
// console.log(username);// 2nd error
/*-----------interesting questions-------------*/
function addone(num){
    return num + 1
}
console.log(addone(5));
const addtwo = function(num){
    return num + 2
}
addtwo(5)