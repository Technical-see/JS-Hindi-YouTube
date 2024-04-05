// Immediately Invoked Function Expressions (IIFE)

// function chai(){
// console.log("DB CONNECTED");
// }
// chai();

//OR n

(function chai(){
    // named iife
    console.log("DB CONNECTED2");
    })();

    //OR

    (()=>{
        // simple iife
        console.log("DB CONNECTED3");
        })();

//OR
        ((name)=>{
            console.log(`DB CONNECTED WITH ${name}`);
            })("AMIT");