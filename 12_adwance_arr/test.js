// const myArr = []
// %DebugPrint(myArr)


// Continious  , Holey 

// SMI (Small Integer)
// Packed Element
// Double (float, int, string, function)

const arrTwo = [1, 2, 3, 4, 5]
// PACKED_SMI_ELEMENT

arrTwo.push(6.0)
// PACKED_DOUBLE_ELEMENT

arrTwo.push('7')
// PACKED ELEMENT 

arrTwo.push[10] = 11
// HOLEY ELEMENT

console.log(arrTwo);
console.log(arrTwo.length);
console.log(arrTwo[9]);


// Bound Check
// hasOwnProperty(arrTwo, 9)
// hasOwnProperty(prototype.arrTwo, 10)
// hasOwnProperty(object.arrTwo, 10)

// Holes are very expensive in js

const arrThree = [1, 2, 3, 4, 5]
console.log(arrThree[2]);

// SMI > DOUBLE > PACKED // Continious OPTIMIZED ORDER

// H_SMI > H_DOUBLE > H_PACKED // HOLEY OPTIMIZED ORDER
