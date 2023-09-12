const btnBuscar = document.getElementById("buscar");
let valorAbuscar = document.getElementById("inputCodeSearch");

async function cargar() {
    try {
        const database = await fetch('./js/booksDatabase.json');
        if (!database.ok) {
            throw new Error('No se pudo cargar el archivo JSON');
        }
        const datos = await database.json();
      
        // Aquí puedes hacer algo con los datos, como mostrarlos en la consola
        sessionStorage.setItem('libros', JSON.stringify(datos));
    }
    catch (error) {
        console.error('Error al cargar el archivo JSON:', error);
    }

}

cargar();
