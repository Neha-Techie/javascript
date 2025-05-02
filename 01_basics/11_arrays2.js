const marvel_heros = ["thor","ironman", "spiderman"]
const dc_heros = ["superman","flash","batman"]
// marvel_heros.push(dc_heros) // yaha pe woh alag se [] mei print krra hai toh that [] is considered as 3rd array uske andr ka alag se nai but ek mei aayega 
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);// yaha pe woh 3rd element ka 1pos wala aaray dekha
const all_heros = marvel_heros.concat(dc_heros)
console.log(all_heros);//now yaha pr wo ek sath sab ek hi array mei daalra hai position alag [] add nai krra

