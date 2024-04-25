const codding = ["JS", "RB", "PY", "JAVA", "CPP"]

// codding.forEach(function(item){
//     console.log(item);
// })


// codding.forEach((value) => {
//     console.log(value);
// })


function printMe(item){
    // console.log(item);
}

// codding.forEach(printMe)

codding.forEach((item, index, arr) => {
// console.log(item, index, arr);

})


const myCoding = [
{
    languageName : "Javascript",
    languageFileName : "js"
},

{
    languageName : "Java",
    languageFileName : "java"
},

{
    languageName : "Python",
    languageFileName : "py"
}
]

myCoding.forEach( (item) => {
console.log(item.languageFileName);
} )

