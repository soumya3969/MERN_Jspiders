const password=document.querySelector('#password')
const togglePassword=document.querySelector('#togglePassword')
const box=document.querySelector('.box')

togglePassword.addEventListener('click',function(){
    if(password.type === 'password'){
        password.type='text'
        togglePassword.classList.add('fa-eye-slash')
        togglePassword.classList.remove('fa-eye')
    }else{
        password.type='password'
        togglePassword.classList.remove('fa-eye-slash')
        togglePassword.classList.add('fa-eye')
    }
})