const container = document.querySelector('.container')
console.log(container)

function createHtmlElement(tag) {
    return document.createElement(tag)
}
function addElementWithClass(tag, ...className) {
    const element = createHtmlElement(tag)
    element.classList.add(...className)
    return element
}

function addElementWithId(tag, tagId) {
    const element = createHtmlElement(tag)
    element.id = tagId
    return element
}
function addElementWithTextContent(tag, text) {
    tag = createHtmlElement(tag)
    tag.textContent = text
    return tag
}

function addNavBar() {
    const nav = addElementWithClass('nav', 'navbar')
    const headLine = addElementWithTextContent('h1', 'News')
    const btnDivNav = createHtmlElement('div')
    const homePageBtn = addElementWithClass('button', 'nav-btn')
    const createStoryBtn = addElementWithClass('button', 'nav-btn')
    const homePageA = addElementWithTextContent('a', 'Home Page')
    const createStoryA = addElementWithTextContent('a', 'Create Story')
    homePageA.href = '/index.js'
    createStoryA.href = '/index.js'
    btnDivNav.append(homePageBtn, createStoryBtn)
    homePageBtn.append(homePageA),
    createStoryBtn.append(createStoryA),
    container.append(nav)
    nav.append(
        headLine,
        btnDivNav
    )
}


function main(){
    addNavBar()
}
main()