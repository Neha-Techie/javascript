/* types of memories
-Stack memory(primitive) -> jo var declare krege uska copy milega 
-Heap memory(non primitive) yaha pe  agar kuch kiya toih milta hai reference og value ka jo bhi change hoga woh og value mei change hoega


*/ 
// let myYoutbeName="neha";
// let anotherName = myYoutbeName
// anotherName = "123"
// console.log(myYoutbeName);//yaha stack mei copy milti hai issiliye woh waha copy aara tha :)
// console.log(anotherName);
//now obj wala
let userOne = {
    email: "user@gmail.com",
    upi: "user@ybl"

}
let userTwo = userOne
userTwo.email="neha@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);
/*iska matlab userTwo aur userOne dono same object ko point karte hain (reference) — JavaScript me objects by reference assign hote hain.

Ab jab aap userTwo.email = "neha@gmail.com" likhte ho, to aap actual object ke email value ko change kar rahe ho — kyunki userTwo aur userOne dono ek hi object ko refer kar rahe hain.

Isliye jab console.log(userOne.email); chalate ho, wo bhi "neha@gmail.com" print karega — kyunki userOne ka original object change ho gaya.*/