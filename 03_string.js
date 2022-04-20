const name = 'Evgenii'
const age = 23

function getAge() {
    return age
}

const output = 'Hi, my name is ' + name + ' and my age is ' + age + ' years old'
const output1 = `Hi my name is ${name} and my age is ${getAge()} years old`
const output2 = `Hi my name is ${name} and my age is ${getAge() < 20 ? 'A' : 'B'} years old`
console.log(output)
console.log(output1)
console.log(output2)

const output3 = `
<div>This is div</div>
<p>This is p</p>`
console.log(output3)