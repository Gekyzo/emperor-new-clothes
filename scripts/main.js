// Calculate canvas size
const canvas = () => {
    return window.innerWidth
}

// Check if node exists
function exists(element) {
    var node = document.getElementsByTagName(element)
    return node.length
}

// Set layout type
function defineLayout() {
    let layout
    if (exists('main') && !exists('aside')) {
        layout = 'layout-1'
    } else {
        layout = 'layout-2'
    }
    console.log(layout)
}

// Load functions
window.onload = () => {
    defineLayout()
}

window.onresize = () => {}
