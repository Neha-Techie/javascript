const marvel_heros = ["thor","ironman", "spiderman"]
const dc_heros = ["superman","flash","batman"]
// marvel_heros.push(dc_heros) 
/* yaha pe woh alag se [] mei print krra hai toh that [] is considered as 3rd array uske andr ka alag se nai but ek mei aayega */

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);// yaha pe woh 3rd element ka 1pos wala aaray dekha
// const all_heros = marvel_heros.concat(dc_heros)
// console.log(all_heros);
/*now yaha pr wo ek sath sab ek hi array mei daalra hai position alag [] add nai krra*/
// const all_new_heros = [...marvel_heros, ...dc_heros]
// console.log(all_new_heros)
/* yaha pr same concat krta use and all this is very convienient to use people prefer to use this more than concat*/

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
// console.log(another_array[3][1]); //o/p-> 5
// console.log(another_array[5][2]); //o/p -> 5
// console.log(another_array[5][2][1]); //o/p-> 5

// const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);// ye sare brackets nikal ke ek mei daal deta hai 

// console.log(Array.isArray("Neha"))
// console.log(Array.from("Neha")) // ye convert karega string -> array
// console.log(Array.from({name: "Neha"})) //-> empty array dega

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); //given scores ko array mei krega aur ek sath likh kr o/p dega
