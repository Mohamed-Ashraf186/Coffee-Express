const showFilterBtn = document.querySelector('.filter-show');
const  exitFilterBtn = document.getElementById('filter-exit')
const filterEl = document.querySelector('.filter-partial.mobile')

const filterOverLay = document.querySelector('.new-arrivals .overlay');



function showFilter(){
    filterOverLay.classList.remove('hidden')
    filterEl.classList.remove('hidden')
}

function hideFilter(){
    filterOverLay.classList.add('hidden')
    filterEl.classList.add('hidden')
}



showFilterBtn.addEventListener('click',showFilter)
exitFilterBtn.addEventListener('click',hideFilter)