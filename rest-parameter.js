

// Regular function call 
const sumAll = (a, b, c) => a + b + c;
let sum = sumAll(1, 2, 3); //Gives 6
console.log(sum)
// Extra arguments are ignored
let sum2 = sumAll(1, 2, 3, 4, 5, 6); //Gives same result as only 3 parameters
console.log(sum2)
// Function using ...rest
const sumRest = (a, b, c, ...rest) => {
    let sum = a + b + c;
    for (let i of rest) {
        sum += i;
    }
    return sum
}

let sum3 = sumRest(1, 2, 3, 4, 5, 6)
console.log(sum3) // This gives 21 so it picks up all parameters passed