const codding = ["JS", "RB", "PY", "JAVA", "CPP"]

const values = codding.forEach( (item) => {
    // console.log(item)
    // return;  // forEach loop nothing return with in property
} )

// console.log(values);

const myNumes = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

 //const newNumes = myNumes.filter( (item) => item > 5) // directly return within parenthesis

//  const newNumes = myNumes.filter( (item) => {
//     return item > 5   // with in scopes {} without parenthesis must be use return keyword
// })

// console.log(newNumes); 
 


// const newNumes = []

// myNumes.forEach( (num) => {
//     if (num > 4) {
        
//         newNumes.push(num)
//     }
// })

// console.log(newNumes);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];


//   const userBooks = books.filter( (bk) => bk.genre === "History" )



let userBooks = books.filter( (bk) => {
    return bk.publish >= 1995 && bk.genre === "History"
})

 console.log(userBooks);
