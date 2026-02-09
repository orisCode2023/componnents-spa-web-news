const container = document.querySelector('.container')
const mainPage = createHtmlElement('main')
const dummyText = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia odio, fugit architecto molestiae repellat sed deleniti fuga rem debitis impedit. Commodi veritatis qui porro blanditiis, dolorum voluptates, eos voluptas, maxime soluta saepe voluptatum. Labore culpa qui suscipit deserunt fugiat laudantium mollitia itaque expedita, exercitationem recusandae! Voluptas optio porro eaque? Quidem?"


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

function addElementWithTextContentAndClass(tag, classNamm, text) {
    tag = addElementWithClass(tag, classNamm)
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

function newsHeadLine() {
    const topStories = addElementWithTextContent('h2', 'Top Stories')
    mainPage.append(topStories)
}

function cardsTamplate(cardsNumber) {
    const divWrapper = addElementWithClass('div', 'cardsWrapper')
    mainPage.append(divWrapper)
    for (let index = 1; index <= cardsNumber; index++) {
        const element = createNewsCard("Q Tarantino", "Once Upon A Time In Holliwood",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, nobis.", `card${index}`)
        divWrapper.append(element)
    }
    // createNewsCard("K Tarantino", "Once Upon A Time In Holliwood", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, nobis.", 'card1')
    // createNewsCard("Cary Joji Fukunaga", "No Time To Die", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, nobis.", 'card2')
    // createNewsCard("J Cameron", "Titanik", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, nobis.", 'card3')
    // createNewsCard("Disney", "The Lion King", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, nobis.", 'card4')
}

function createNewsCard(authorName, headline, articalContent, cardClass) {
    const cardDiv = addElementWithClass('div', 'cards', cardClass)
    const cardLink = addElementWithClass('a', 'card-link')
    const author = addElementWithTextContentAndClass('p', 'reporter-name', authorName)
    const title = addElementWithTextContentAndClass('h4', 'news-title', headline)
    const artical = addElementWithTextContentAndClass('p', 'artical-text', articalContent)
    const img = addElementWithClass('img', 'card-img')
    img.src = randomImg()
    cardLink.href = './index.html'
    cardDiv.append(cardLink)
    cardLink.append(
        title,
        author,
        artical,
        img
    )
    return cardDiv
}

function randomImg(){
    const imgUrl = "https://picsum.photos/200/300"
    const qMark = '?'
    const randomNumber = Math.floor(Math.random() * 100)
    return imgUrl.concat(qMark,randomNumber)
}


function flashNews(){
    const news = addElementWithClass('div', 'flash-news')
    const img = addElementWithClass('img', 'img-news')
    img.src = imgUrl
    const headLine = addElementWithClass('h2', 'news-headline') 
}

function main() {
    addNavBar()
    container.append(mainPage)
    newsHeadLine()
    cardsTamplate(4)
    // flashNews()
}

main()