// for of

const arr = [1, 2, 3, 4, 5]

for(const num of arr){
    // console.log(arr);
}

const Greeting = "Hello World"

for(const Greet of Greeting){
    // console.log(`Each Char of Greet ${Greet}`);
}


const map = new Map()
map.set('IN', 'INDIA')
map.set('AUS', 'AUSTRALIA')
map.set('CAN', 'CANADA')
map.set('PAK', 'PAKISTAN')

// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ":-", value);
}


const myObject = {
 Name : "Amit",
 Friend : "Shobhit"
}

for (const [key, value] of myObject) {
    console.log(key, ":-", value);
}