const searchBtn = document.getElementById("search"),
    bookInfo = document.getElementById('selectedBookInfo'),
    confirmReservationBtn = document.getElementById('confirmReservationBtn'),
    reservationModalDOM = document.getElementById('bookReservationModal'),
    closeModalDOM = document.getElementById('confirmReservation'),
    reservationModal = new bootstrap.Modal(reservationModalDOM),
    closeModal = new bootstrap.Modal(closeModalDOM),
    botonVolver = document.getElementById("botonVolver");
let IdToSearch = document.getElementById("inputCodeSearch");


function validateBookId(booksDB, bookId) {
    let found = booksDB.find((booksDB) => booksDB.id == bookId);

    if (!found) {
        return false;
    } else {
        return found;
    }
}


searchBtn.addEventListener('click', (e) => {
    //e.preventDefault();

    //Validamos que ambos campos estén completos
    if (!IdToSearch.value) { //Necesitamos validar el contenido de este campo, entonces usamos el atributo value que es el que nos da el contenido
        alert('Por favor, agregar un ID para continuar');
    } else {
        //Revisamos si el return de la función validarUsuario es un objeto o un boolean. Si es un objeto, fue una validación exitosa y usamos los datos. Si no, informamos por alert.
        async function fetchDB() {
            let database = await fetch('./js/booksDatabase.json');
            let books = await database.json();
            let data = validateBookId(
                books,
                IdToSearch.value //misma lógica que comentario anterior
            );
            if (!data) {
                alert(`ID invalido`);
            } else {

                bookInfo.innerHTML = `
<h3>${data.name}</h3>
<p><strong>Id:</strong> ${data.id}</p>
<p><strong>Autor:</strong> ${data.author}</p>
<p><strong>Editorial:</strong> ${data.publisher}</p>
<p><strong>Tipo:</strong> ${data.type}</p>
<p><strong>Estado:</strong> ${data.state}</p>
<p><strong>Stock:</strong> ${data.stock}</p>
`;

                reservationModal.hide();
                IdToSearch.value = '';
                //Acá metemos la lógica para mostrar la info del libro que coincide con el código ingresado           
            }
        }


        fetchDB();
    }
});

confirmReservationBtn.addEventListener('click', () => {
    reservationModal.hide();
    closeModal.hide();
    alert('Reserva exitosa');
    IdToSearch.value = '';
});


botonVolver.addEventListener('click', () => {
    console.log("Botón Volver clickeado");
    reservationModal.hide();
})