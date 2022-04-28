const heading = document.getElementById('hello')

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