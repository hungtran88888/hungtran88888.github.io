let LoginForm = document.getElementById('LoginForm')
let RegistorForm = document.getElementById('RegistorForm')
let Indicator = document.getElementById('Indicator')

function registor() {
    RegistorForm.style.transform = 'translateX(0px)'
    LoginForm.style.transform = 'translateX(0px)'
    Indicator.style.transform = 'translateX(100px)'
}
function login() {
    RegistorForm.style.transform = 'translateX(300px)'
    LoginForm.style.transform = 'translateX(300px)'
    Indicator.style.transform = 'translateX(0px)'
}



















