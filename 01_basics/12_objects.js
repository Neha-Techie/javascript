// // singleton
// // Object.create
// // object literals
// // 2Types to define Objects-> 1 Singleton; 2 Literals

// const mySym = Symbol("key1")
// const JsUser = {
//     name: "Hitesh",
//     "full name": "neha teli",
//     [mySym]: "mykey1", //symbol wale keys banane ke liye [] this is the syntax iske andr likho
//     age: 18,
//     location: "mumbai",
//     email: "neha@google.com",
//     isLoggedIn: false,
//     lastLoginDays: ["Monday", "Saturday"]
// }
// // console.log(JsUser.email)
// // console.log(JsUser["email"])
// // console.log(JsUser["full name"])
// // console.log(JsUser[mySym])

// JsUser.email = "neha@chatgpt.com"
// // Object.freeze(JsUser)
// JsUser.email = "neha@microsoft.com"
// // console.log(JsUser);

// JsUser.greeting = function(){
//     console.log("Hello JS user");
// }
// JsUser.greetingTwo = function(){
//     console.log(`Hello JS user, ${this.name}`);
//}

// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());

