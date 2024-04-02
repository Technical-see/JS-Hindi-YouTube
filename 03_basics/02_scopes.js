

// var c = 40; Goblal variable value not getting print

let a = 300

if (true) {
    let a = 10
const b = 20
 var c= 30
//  console.log("INNER: ", a);
}

// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "AMIT"

    function two(){
        const website = "YouTube"
        console.log(username);
    }

    // console.log(website);

    // two()
} 

// one()


if (true) {
   const username = "AMIT"

   if (username === "AMIT") {

    const website = " YouTube"

    // console.log( username + website);
    
   }

//    console.log(website);
    
}

// console.log(username);

console.log(addone(5)); 

function addone(num){
    return num + 1;
}

addTwo(5)  // Cannot access 'addTwo' before initialization

const addTwo = function(num){
    return num + 2;
}

addTwo(5) //Can access 'addTwo' after initialization because value hold in variavle

