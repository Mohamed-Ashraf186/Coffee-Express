const exitBtn = document.querySelector('.delete-exit')
const deleteAddressEl = document.querySelector('.delete-address-modal')
const addressDeleteBtns = [...document.querySelectorAll('.icon.delete')]

console.log(addressDeleteBtns)

function showModal(){
    deleteAddressEl.style.display = "flex"
}

function hideModal(){
    deleteAddressEl.style.display = "none"
}

addressDeleteBtns.map(btn =>{
    btn.addEventListener('click',showModal)
})

exitBtn.addEventListener('click',hideModal)