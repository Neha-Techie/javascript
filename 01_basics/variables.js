const accountID = 14222
let accountEmail = "neha@gmail.com"
var accountPassword = "12345"
accountCity = "jaipur"
let accountState;

// let's try to change it where const is same but var changes let's try 

// accountID = 2 not allowed because upr constant diya hai 

accountEmail = "hh@gmail.com"
accountPassword = "122250"
accountCity= "mumbai"


console.log(accountID);
console.table([accountID, accountEmail, accountCity, accountPassword, accountState])
// constant declare krne ke liye sirf const
// variable ke liye 2 chiz hai var/let 
/*
Prefer not to use var
coz of issue in block scope and functional scope
*/