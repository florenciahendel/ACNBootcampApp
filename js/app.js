const idInput= document.getElementById('newBookId'),
bookName = document.getElementById('inputBookName'), 
bookAuthor = document.getElementById('inputBookAuthor'),
bookPublisher = document.getElementById('inputBookPublisher'),
bookType = document.getElementById('selectBookType'),
bookState = document.getElementById('bookState'),
saveBookBtn = document.getElementById('saveBookBtn'),
cancelBookBtn = document.getElementById('cancelBookBtn');

let userRole = sessionStorage.getItem('role')
const roleBtn = document.getElementsByClassName(userRole)
setTimeout(() => {
    roleBtn[0].classList.remove('d-none') 
}, 10);

roleBtn[0].addEventListener('click',()=>{
    let idCounter = localStorage.getItem('bookCounter')||0;
    idInput.value=idCounter++;
    localStorage.setItem('bookCounter',idCounter);
    
})


/* Abajo aparecen dos botones
/Guardar
Da de alta el libro si todos los campos tienen la información válida. Un pop up aparece con el mensaje: “El ejemplar ha sido dado de alta”y se vuelve a la pantalla de menú de la biblioteca.
Si algún campo posee data inválida, no se guarda y se marca en rojo el campo con información inválida (un recuadro rojo con el campo). No se borra la data
Cancelar
Aparece un pop up de validación con el mensaje: “Al Cancelar se borrarán todos los datos cargados, está seguro?”
Botón SI, los datos del ejemplar no son guardados y se vuelve a la pantalla de menú de la biblioteca
Botón No, se vuelve a la pantalla de alta de ejemplares. (se mantienen los datos cargados) */
