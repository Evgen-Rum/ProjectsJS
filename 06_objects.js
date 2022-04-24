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
console.log(person.firstName)
console.log(person['age'])
console.log(person['complex key'])
console.log(person['key_' + (1 + 2)])
console.log(person.key_3)
console.log(person['key_3'])
person.greet()

delete person['key_3']
console.log(person)