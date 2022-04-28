const heading = document.getElementById('hello')
// const heading2 = document.getElementsByTagName('h2')[0]
// const heading2 = document.getElementsByClassName('h2-class')[0]
// const heading2 = document.querySelector('h2')
// const heading2 = document.querySelector('.h2-class')
const heading2 = document.querySelector('#sub-hello')
console.log(heading2)


// console.log(heading)
setTimeout(() => {
    addStylesTo(heading)
}, 2000)

function addStylesTo(node) {
    console.dir('Content before change: ' +  heading.textContent)
    node.textContent = 'Changed from JavaScript!'
    node.style.color = 'white'
    node.style.textAlign = 'center'
    node.style.background = 'black'
    node.style.padding = '2rem'
}