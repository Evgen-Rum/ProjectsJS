const person = {
    firstName: 'Evgenii',
    lastName: 'Rumiantsev',
    age: 23,
    isProgrammer: true,
    languages: ['ru', 'en', 'by'],
    'complex key': 'Complex value',
    ['key_' + (1 + 2)]: 'Computed key',
    greet() {
        console.log('Hi all!')
    }
}
console.log(person)

// console.log(person)
// console.log(person.firstName)
// console.log(person['age'])
// console.log(person['complex key'])
// console.log(person['key_' + (1 + 2)])
// console.log(person.key_3)
// console.log(person['key_3'])
// person.greet()

delete person['key_3']

// const fName = person.firstName
// const age = person.age
// const languages = person.languages

// const {firstName, age, languages} = person
// console.log(firstName, age, languages)

const {firstName, age, languages} = person
console.log(firstName, age, languages)

const person1 = {
    firstName1: 'Maks',
    lastName1: 'Ivanov',
    age1: undefined,
    isProgrammer1: false,
    languages1: ['ru', 'by'],
    'complex key1': 'Complex value',
    ['key_' + (1 + 3)]: 'Computed key',
    greet1() {
        console.log('Hi all!')
    }
}

const {firstName1, age1: personAge1 = 10, languages1} = person1
console.log(firstName1, personAge1, languages1)
console.log(person1)