const searchBtn = document.querySelector('.search-wrapper')

const menuBtn = document.querySelector('.burger-btn')
 
const searchElem = document.querySelector('.search-container')

const logoElem = document.querySelector('.logo')

const iconsElem = document.querySelector('.icons')

const navbar = document.querySelector('.navbar')

const exitSearchBtn = document.querySelector('.exit-search-btn')

const exitBrowseBtn = document.querySelector('.exit-browsing-btn')

const searchDropdownEl = document.querySelector('.dropdown')

const menuDropdownEl = document.querySelector('.menu')

const layerEl = document.querySelector('.layer')

const browsingWrapper = document.querySelector('.browsing-wrapper')

searchBtn.addEventListener('click',handleSearch)

menuBtn.addEventListener('click',handleBrowsing)

exitSearchBtn.addEventListener('click',handleExitSearch)

exitBrowseBtn.addEventListener('click',handleExitBrowsing)


function handleSearch(){
    exitSearchBtn.classList.remove('hidden')
    logoElem.classList.add('hidden')
    iconsElem.classList.add('hidden')
    searchElem.classList.remove('hidden')
    navbar.classList.add('searching')
    searchDropdownEl.classList.remove('hidden')
    layerEl.classList.remove('hidden')
}

function handleExitSearch(){
    exitSearchBtn.classList.add('hidden')
    logoElem.classList.remove('hidden')
    iconsElem.classList.remove('hidden')
    searchElem.classList.add('hidden')
    navbar.classList.remove('searching')
    searchDropdownEl.classList.add('hidden')
    layerEl.classList.add('hidden')
}


function handleBrowsing(){
    browsingWrapper.classList.remove('hidden')
    logoElem.classList.add('hidden')
    iconsElem.classList.add('hidden')
    navbar.classList.add('browsing')
    menuDropdownEl.classList.remove('hidden')
    layerEl.classList.remove('hidden')
}


function handleExitBrowsing(){
    browsingWrapper.classList.add('hidden')
    logoElem.classList.remove('hidden')
    iconsElem.classList.remove('hidden')
    navbar.classList.remove('browsing')
    menuDropdownEl.classList.add('hidden')
    layerEl.classList.add('hidden')
}

