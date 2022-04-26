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
    },
    info() {
        console.log('Information about a person named:', this.firstName, this.lastName)
    }
}
// console.log(person)

// console.log(person)
// console.log(person.firstName)
// console.log(person['age'])
// console.log(person['complex key'])
// console.log(person['key_' + (1 + 2)])
// console.log(person.key_3)
// console.log(person['key_3'])
// person.greet()

// delete person['key_3']

// const fName = person.firstName
// const age = person.age
// const languages = person.languages

// const {firstName, age, languages} = person
// console.log(firstName, age, languages)

// const {firstName, age, languages} = person
// console.log(firstName, age, languages)
//
// const person1 = {
//     firstName1: 'Maks',
//     lastName1: 'Ivanov',
//     age1: undefined,
//     isProgrammer1: false,
//     languages1: ['ru', 'by'],
//     'complex key1': 'Complex value',
//     ['key_' + (1 + 3)]: 'Computed key',
//     greet1() {
//         console.log('Hi all!')
//     }
// }
//
// const {firstName1, age1: personAge1 = 10, languages1} = person1
// console.log(firstName1, personAge1, languages1)
// console.log(person1)

// for (let key in person) {
//     if (person.hasOwnProperty(key)) {  // The hasOwnProperty() method returns a boolean indicating whether the object contains the specified property.
//         console.log('key: ' + key)
//         console.log('value: ', person[key])
//     }
// }
/*
Attention! For (in) iterates over the prototype of an object,
which can lead to errors. Therefore, when using this construction,
it is necessary to check using the method hasOwnProperty()!!!
 */
// console.log(person.toString())

// console.log(Object.keys(person))
// Object.keys(person).forEach(key => {
//     console.log('key: ' + key)
//     console.log('value: ', person[key])
// })
// person.info()

// Context

const logger = {
    // keys() {
    //     console.log('Object keys:', Object.keys(this)) // in this situation this = logger
    // },
    // keysAndValues() {
    //     console.log('Object keys:', Object.keys(this), 'Keys value:', Object.values(this) )
    // }
    // keysAndValues() {
    //     Object.keys(this).forEach(key => {
    //         console.log(`Key: ${key} - Value: ${this[key]}`)
    //     })
    // }
    /*
    The function keyword creates its own context unlike arrow functions,
    therefore, when using this word in a method, errors will occur.
    Here are ways to fix this situation.
     */
    // keysAndValues() {
    //     const self = this
    //     Object.keys(this).forEach(function(key) {
    //         console.log(`Key: ${key} - Value: ${self[key]}`)
    //     })
    // }
    // or
    // keysAndValues() {
    //     Object.keys(this).forEach(function(key) {
    //         console.log(`Key: ${key} - Value: ${this[key]}`)
    //     }.bind(this))
    // }

    withParams(top = false, between = false, bottom = false) {
        if (top) {
            console.log('------- Start -------')
        }
        Object.keys(this).forEach((key, index, array) => {
            console.log(`Key: ${key} - Value: ${this[key]}`)
            if (between && index != array.length - 1) {
                console.log('--------------')
            }
        })
        if (bottom) {
            console.log('------- End -------')
        }
    }
}

logger.withParams.call(person, true, true, true)

logger.withParams.apply(person, [true, true, true])

// logger.keysAndValues.call(person)

// logger.keysAndValues.call(person)

// const bound = logger.keys.bind(person) // bind() method returns a function
// logger.keys.call(person)  // call() = bind() but no function return

