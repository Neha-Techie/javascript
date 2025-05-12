// for loop 
// ctrl + d use krke sab same wala jagh select krke replace krne ka

// for (let i=0; i<10;  i++){ // 1st wala var declare hua hai(initialize) , dusra wala mei condition check krra, and then iterations hora hai
//     const element =i;
//     if(element == 5){
//         console.log("5 is the best number");  
//     }
//     console.log(element);   
// }  
// for (let i = 0; i <= 10; i++) {
//     console.log(`outer loop value ${i}`);
//     for (let j = 0; j <=10; j++) {
//         //console.log(`inner loop value ${j} and inner loop${i}`);
//         console.log(i+ '*' + j +'='+ i*j);    
//     } 
// }
// let myArray = ["flash", "ironman", "superman"]
// console.log(myArray.length);
// for (let index = 0; index < myArray.length; index++) { //index++ main role agar nai dege toh aage toh jayega hi nai bas udhr hi chalta jayega 1st pe change hona bohot zaruri hai
//     const element = myArray[index];
//     console.log(element);    
// }


// break and continue
// for (let index = 1; index <= 20; index++) {
//     if(index==5){
//         console.log(`Detected 5`);
//         //break; agar ye meine likha toh 5th pr rukk jayega aage hi nai chahiye jayega iterations
//         continue; // agar ye kiya toh 5th pe bolega 5 is detected or phir aage run krega 
//     }
//     console.log(`value of i is ${index}`);    
// }

//while loop
// let index = 0 
// while(index<=10){
//     console.log(`value of index is ${index}`);
//     index = index + 2
// }
// let myArray = ["flash", "ironman", "superman"]
// let arr =0
// while(arr <myArray.length){
//     console.log(`value is ${myArray[arr]}`);
//     arr = arr +1 
// }

// do while loop
// let score = 1
// do {
//     console.log(`score is ${score}`);
//     score++
// } while (score <= 10)


//for of loop//
/*this loops are array specific
["","",""]
[{},{},{}]
*/
// const arr = [1,2,3,4,5]
// for (const num of arr){ // arr- matlb woh khud hi samjh jayega ki kaha end krna hai
// console.log(num); //o/p-> 1 2 3 4 5
// }

// const greetings  = "hello world!"
// for(const greet of greetings){
//     console.log(`each char is ${greet}`);
// }

//Maps

// const map = new Map()
// map.set('IN',"India")
// map.set('FR',"France")
// console.log(map);
// for (const [key] of map){ //[ ] ye use kiya toh sirf key aayega uska pura nai
//     console.log(key); 
// }


// const myObject = {
//     'game1':'NFS',
//     'game2':'GTA'
// }
// for (const [key,value] of myObject) { this doesn't work in OBJECTS only in array
//     console.log(key, ':-', value);    
// }


// forin
// const myObject = {
//     js:' javascript',
//     cpp:'c++',
//     rb: 'ruby',
//     swift:'swift by apple'
// }
// for(const key in myObject){
//    //console.log(myObject[key]);
//    console.log(`${key} shortcut is for ${myObject[key]}`);    
// }

// const programming = ["js","python","java"]
// for (const key in programming){
//    // console.log(key); // yaha pr woh direct key of array numbers dega not the whole print like objects
//    console.log(programming[key]); 
// }

//for in loop will not work in array  for array ke liye for of

// for each

const coding = ["js","java","python"]
// coding.forEach(function (val){
//     console.log(val);   
// })

// coding.forEach((item)=> {
//     console.log(item);   
// })

// function printMe(item){
//     console.log(item);    
// }
// coding.forEach(printMe)

// coding.forEach((item)=> {
//     console.log(item);  
// })

const myCoding = [
    {
        languageName: "javascript",
        languageFileName:"js"
    },
    {
        languageName: "java",
        languageFileName:"js"
    },
    {
        languageName: "python",
        languageFileName:"py"
    }
]

myCoding.forEach((item)=>{
    console.log(item.languageName);
})