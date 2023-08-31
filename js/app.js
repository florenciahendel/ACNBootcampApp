

let userRole = sessionStorage.getItem('role')
const button = document.getElementsByClassName(userRole)
setTimeout(() => {
    button[0].classList.remove('d-none') 
}, 10);

const idInput= document.getElementById('newBookId');

button[0].addEventListener('click',()=>{
    let idCounter = localStorage.getItem('bookCounter')||0;
    idInput.value=idCounter++;
    localStorage.setItem('bookCounter',idCounter);
    
})


