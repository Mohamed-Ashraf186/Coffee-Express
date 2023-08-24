const searchBtn = document.querySelector('.search-wrapper')

const menuBtn = document.querySelector('.burger-btn')
 
const searchElem = document.querySelector('.search-container')

const logoElem = document.querySelector('.logo')

const iconsElem = document.querySelector('.icons')

const navbar = document.querySelector('.navbar')

const exitBtn = document.querySelector('.exit-btn')

const searchDropdownEl = document.querySelector('.dropdown')

// const menuDropdownEl = document.querySelector('.dropdown')

const layerEl = document.querySelector('.layer')

searchBtn.addEventListener('click',handleSearch)
// menuBtn.addEventListener('click',handleSearch)
exitBtn.addEventListener('click',handleExit)


function handleSearch(){
    exitBtn.classList.remove('hidden')
    logoElem.classList.add('hidden')
    iconsElem.classList.add('hidden')
    searchElem.classList.remove('hidden')
    navbar.classList.add('searching')
    searchDropdownEl.classList.remove('hidden')
    layerEl.classList.remove('hidden')
}

function handleExit(){
    exitBtn.classList.add('hidden')
    logoElem.classList.remove('hidden')
    iconsElem.classList.remove('hidden')
    searchElem.classList.add('hidden')
    navbar.classList.remove('searching')
    searchDropdownEl.classList.add('hidden')
    layerEl.classList.add('hidden')
}
