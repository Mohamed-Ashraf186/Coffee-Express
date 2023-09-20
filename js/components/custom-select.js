const selectField = document.querySelector('.select-field')
const selectText = document.querySelector('.select-text')
const options = [...document.querySelectorAll('.option')]
const selectList = document.querySelector('.select-dropdown')
console.log(options)

selectField.addEventListener('click',()=>{
    selectList.classList.toggle('hidden')
})

options.map(option =>{
    option.addEventListener('click',()=>{
        selectText.innerHTML = option.textContent
    })
})