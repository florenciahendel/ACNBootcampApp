const userInput = document.getElementById('userInput'),
    passwordInput = document.getElementById('passwordInput'),
    btnLogin = document.getElementById('login');

//Validar caracteres alfanuméricos
function validateRegex(e, input) {
    let regEx = /[A-Za-z0-9]/;
    !regEx.test(input) && e.preventDefault();
}

//Validar caracteres alfanuméricos del campo user
userInput.addEventListener('keypress', (e) => {
    validateRegex(e, e.key);
});

//Validar caracteres alfanuméricos del campo password
passwordInput.addEventListener('keypress', (e) => {
    validateRegex(e, e.key);
});

function validateUser(usersDB, username, pass) {
    let found = usersDB.find((userDB) => userDB.name == username);

    if (!found) {
        return false;
    } else {
        if (found.pass != pass) {
            return false;
        } else {
            return found;
        }
    }
}

btnLogin.addEventListener('click', (e) => {
    e.preventDefault();

    //Validamos que ambos campos estén completos
    if (!userInput.value || !passwordInput.value) {
        alert('Usuario y/o password inválido. Faltan datos');
    } else {
        //Revisamos si el return de la función validarUsuario es un objeto o un boolean. Si es un objeto, fue una validación exitosa y usamos los datos. Si no, informamos por alert.
        async function fetchDB() {
            let database = await fetch('./js/database.json');
            let users = await database.json();
            let data = validateUser(
                users,
                userInput.value,
                passwordInput.value
            );
            if (!data) {
                alert(`Usuario y/o password inválido`);
            } else {
                sessionStorage.setItem('role', data.role);
                window.location.href = 'index.html';
            }
        }

        fetchDB();
    }
});
