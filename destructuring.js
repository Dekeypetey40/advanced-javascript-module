

// Destructuring arrays
let ages = [30, 26, 27];
//let john = ages[0]
//let mary = ages[1]
//let joe = ages[2]//This is the old way
let [john, mary, joe] = ages; //This is more efficient John = 30 etc
console.log(john)

// Destructuring objects
let jobs = {
    mike: "designer",
    jill: "developer",
    alicia: "accountant",
};
let {mike, jill, alicia } = jobs //Now the names are variables associated with their jobs

// Destructuring subsets
let languages = ["english", "french", "spanish", "german", "japanese"];
let [johnNative, johnSecondary] = languages; //John gets english as native and french as secondary

let [, , maryNative, marySecondary] = languages; //Mary gets spanish as native, german as secondary

let languages2 = {
    firstLanguage: "english",
    secondLanguage: "french",
    thirdLanguage: "spanish",
    fourthLanguage: "japanese",
};
let { firstLanguage, thirdLanguage } = languages2 //takes values of the named keys
console.log(firstLanguage, thirdLanguage)

// Using rest parameter syntax
let fruits = ["apple", "orange", "banana", "peach", "cherry"];
let [favorite, secondFavorite, ...others] = fruits; //first two are assigned single string, the others is a list of the rest
let favoriteFoods = {
    brian: "pizza",
    anna: "pasta",
    sarah: "vegetarian",
    andrea: "steak"
};
//let {brian, anna, ...rest} = favoriteFoods //same as above but dictionary

//Destructuring Challenge 
let students = [
    {
        name: 'Emily',
        subjects: ['science', 'english', 'art'],
        teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
        results: {science: 93, english: 80, art: 95},
    },
    {
        name: 'John',
        subjects: ['art', 'cad', 'english', 'maths', 'science'],
        teacher: {maths: 'Harry', english: 'Joan', cad: 'Paul'},
        results: {maths: 90, english: 75, cad: 87},
    },
    {
        name: 'Adam',
        subjects: ['science', 'maths', 'art'],
        teacher: {science: 'Iris', maths: 'Harry', art: 'Simon'},
        results: {science: 93, maths: 77, art: 95},
    },
    {
        name: 'Fran',
        subjects: ['science', 'english', 'art'],
        teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
        results: {science: 93, english: 87, art: 95},
    }
];

const makeList = (arr, student) => {

    for (let person of arr) {
        if (person.name == student) {
            return person.subjects;
        }
    }
};
let [first, second, ...rest] = makeList(students, "John")
console.log(first, second, rest)
