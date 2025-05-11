//SWITCH CASE SYNTAX
//  switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = 3
switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break; // agar yaha meine break nai likha hota toh woh uske aage ka bhi print krega except Default
    case 4:
        console.log("April");
        break;
    default:
        console.log("default case match");
        break;
}