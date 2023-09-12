const btnSearch = document.getElementById("search");
let IdToSearch = document.getElementById("inputCodeSearch")


function validateBookId(booksDB, bookId) {
    let found = booksDB.find((booksDB) => booksDB.id == bookId);

    if (!found) {
        return false;
    } else { 
        return found;}
}
 

btnSearch.addEventListener('click', (e) => {
    e.preventDefault();

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
sessionStorage.setItem('role', data.role);
                window.location.href = 'index.html';
//Acá metemos la lógica para mostrar la info del libro que coincide con el código ingresado           

}
        }


        fetchDB();
    }
});