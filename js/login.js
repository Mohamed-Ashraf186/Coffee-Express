
const formInputs = [...document.querySelectorAll('form input')]
const loginBtn = document.querySelector('form .login-btn')

console.log(formInputs)
console.log(loginBtn)


formInputs.map(input=>{
    input.addEventListener('input',()=>{
        loginBtn.classList.add('active')
    })
})