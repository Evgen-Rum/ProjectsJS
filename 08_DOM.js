const heading = document.getElementById('hello')
// const heading2 = document.getElementsByTagName('h2')[0]
// const heading2 = document.getElementsByClassName('h2-class')[0]
// const heading2 = document.querySelector('h2')
// const heading2 = document.querySelector('.h2-class')
const heading2 = document.querySelector('#sub-hello') // .querySelector - only 1 element

console.dir(heading2)

// const heading3 = heading2.nextElementSibling

const h2List = document.querySelectorAll('h2')
console.log(h2List)
// const heading3 = h2List[1]
const heading3 = h2List[h2List.length - 1]
console.log(heading3)

// console.log(heading)

setTimeout(() => {
    addStylesTo(heading, 'JavaScript', 'red', '2rem')
}, 1500)

setTimeout(() => {
    addStylesTo(heading2, 'Practice!', 'green', '3rem')
}, 3000)

setTimeout(() => {
    addStylesTo(heading3.children[0], 'And everything will work out!', 'white', '4rem')
}, 4500)

function addStylesTo(node, text, textColor = 'red', fontSize) {
    console.dir('Content before change: ' +  node.textContent)
    node.textContent = text
    node.style.color = textColor
    node.style.textAlign = 'center'
    node.style.background = 'black'
    node.style.padding = '2rem'
    node.style.width = '100%'
    node.style.display = 'block'
    if (fontSize) {
        node.style.fontSize = fontSize
    }
}

// https://developer.mozilla.org/ru/docs/Web/Events

heading.onclick = () => {
    if (heading.style.color === 'red') {
        heading.style.color = '#000'
        heading.style.background = '#fff'
    } else {
        heading.style.color = 'red'
        heading.style.background = '#000'
    }
}

heading2.addEventListener('dblclick', () => {
    if (heading2.style.color === 'green') {
        heading2.style.color = '#000'
        heading2.style.background = '#fff'
    } else {
        heading2.style.color = 'green'
        heading2.style.background = '#000'
    }
})
