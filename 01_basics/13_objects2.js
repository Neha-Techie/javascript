/*Singleton abhi pehle wala literals tha*/ 
// const tinderUser = new Object()// empty obj dega ye o/p->{}
// console.log(tinderUser);
const tinderUser = {} //ye syntax mei bhi {} ayega
tinderUser.id = "123abc"
tinderUser.name="neha"
tinderUser.isLoggedIn="false"

// console.log(tinderUser);
// const regularUser = {
//     email: "some@gmail.com",
//     fullname:{
//         userfullname:{
//             firstname:"neha",
//             lastname:"teli"
//         }
//     }
// }
// console.log(regularUser.fullname.userfullname);// jo andr ka jaha ka bhi obj nikalna hai waha se apan ko utne dots. dalke access krna padega data to print
// //console.log(regularUser.fullname?.userfullname);// yaha pe na ? isliye hai taki agar woh exist krta hai toh krrega print warna nai krega aisa issiliye ? is the syntax to do so

// const obj1 = {1: "a", 2: "b"}
// const obj2 = {3:"c",4:"d"}
// const obj4 = {5: "a", 6: "b"}
// //const obj3 = { obj1, obj2 }
// //const obj3 = Object.assign({},obj1,obj2,obj4)// return krta hai isiliye store krre
// //console.log(obj3);
// const obj3 = {...obj1, ...obj2, ...obj4}
// console.log(obj3);
// jab DB se value aati hai toh aisa krte hai use

const users = [
    { // array ka objs
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]
users[1].email
console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('isLoggedIn')); //o/p -> true
console.log(tinderUser.hasOwnProperty('isLogged')); //o/p -> false