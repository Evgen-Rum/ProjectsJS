const person = {
    firstName: 'Evgenii',
    lastName: 'Rumiantsev',
    age: 23,
    isProgrammer: true,
    languages: ['ru', 'en', 'by'],
    greet() {
        console.log('Hi all!')
    }
}

console.log(person.firstName)
console.log(person['age'])