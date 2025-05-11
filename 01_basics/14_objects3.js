/* Destructuring array ki bhi hoti hai aur ojects ki bhi 
only objects ki baat now
react -> obj milega-> destructure krke lana hai*/

const course = {
    coursename: "JS",
    price:"999",
    courseInstructor:"hitesh"
}
// course.courseInstructor -> aise baar baar likhege toh neat code nai dikhega 
// so format is 

const {courseInstructor : instructor /*short mei likhne ke liye */} = course
console.log(instructor);
{ //this is object in apis
    name:"neha"
    courseName: "js in hindi"
    price:"free"
}

[ // array aisa milega in apis
    {},
    {},
    {}
]
// const navbar = ({company}) => { -> react 

// }
// { }  ye symbol hoga toh yaha destructing kiya gaya hai 
