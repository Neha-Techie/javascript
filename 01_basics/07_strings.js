// const name = "neha"
// const repoCount =  50
// // console.log(name + repoCount + "value");//outdated
// console.log(`hello my name is ${name} and my repo count is ${repoCount}`); // this is the new version of writing using ` `.

const gameName = new String('nehat');
// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase(gameName));
// console.log(gameName.charAt('4')); //at which pos index number dena padega
// console.log(gameName.indexOf('t')); // yaha pr t pe dege toh woh index no. dega

// const newString = gameName.substring(0,4) //output is neha [nehat mei se] no -ve values should be given it won't give the write o/p
// console.log(newString);

// const anotherString = gameName.slice(2,4) // [ (0)n(1)e(2)h(3)a(4)t]
// console.log(anotherString); // o/p -> ha 

// const newStringOne = "      neha" // unnecessary spaces
// console.log(newStringOne);
// console.log(newStringOne.trim());
// browser url dosen't know the spaces

const url = "https://neha.com/neha%20teli"
console.log(url.replace('20%', '-'));
console.log(url.includes('sundar'));

/* how to give spaces instead of dash - 
split(" "): words mein todta hai
split(""): characters mein todta hai
split() (khaali): poori string ko ek hi array element banata hai */
// const str = "The quick brown fox jumps over the lazy dog.";
// const words = str.split(" ");
// console.log(words[3]);
// //output: "fox"
// const chars = str.split("");
// console.log(chars[8]);
// //output: "k"
// const strCopy = str.split();
// console.log(strCopy);
// //output: Array -> ["The quick brown fox jumps over the lazy dog."]

console.log(gameName.split('-'));