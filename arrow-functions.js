

// Vanilla JavaScript Function
// function addTwoNumbers(a, b) {
//     //Code block
//     return a + b
// }
// let sum = addTwoNumbers(3, 5);
// console.log(sum);

// Arrow Function With Parameters
const addTwoNumbers = (a, b) => {
    //Code block
    return a + b
}
let sum = addTwoNumbers(3, 5);
console.log(sum);
// Single Line Arrow Function With Parameters
const addTwoNumbers2 = (a, b) => a + b;
let sum2 = addTwoNumbers2 (6, 4);
console.log(sum2);

// Implicit Returns
const saySomething = message => console.log(message);
saySomething("hello")
const sayHello = () => console.log("Hi")
sayHello();
// Returning Multiple Lines
const returnMultipleLines = () => (
    `<p>
    This is a multiline string
    </p>`
)
console.log(returnMultipleLines());


// Arrow Function Challenge
let students = [
    {
        name: 'John',
        subjects: ['maths', 'english', 'cad'],
        teacher: {maths: 'Harry', english: 'Joan', cad: 'Paul'},
        results: {maths: 90, english: 75, cad: 87},
    },
    {
        name: 'Emily',
        subjects: ['science', 'maths','english', 'art'],
        teacher: {science: 'Iris', maths: 'Harry', english: 'Joan', art: 'Simon'},
        results: {science: 93, maths: 95, english: 80, art: 95},
    },
    {
        name: 'Adam',
        subjects: ['science', 'maths', 'art'],
        teacher: {science: 'Iris', maths: 'Harry', art: 'Simon'},
        results: {science: 63, maths: 79, art: 95},
    }
];
//Passed a variable arr which becomes the array "students" and the subject
const averagePoints = (arr, subject) => {
    //score added together to be divided
    let sum = 0;
    //amount of scores
    let amount = 0;
    //Loop through the array
    for (let sub of arr) {
        //if the passed subject is found
        if (subject in sub.results) {
            sum += sub.results[subject]
            amount ++
        }
    }
    return sum / amount
}
let averageMarks = averagePoints(students, "maths");
console.log(averageMarks);
