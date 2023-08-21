//Fake Database de Usuarios
const users = [
    {
        nombre: 'Rachel',
        mail: 'rachel.green@aol.com',
        pass: 'chanel',
        rol: 'student',
    },
    {
        nombre: 'Monica',
        mail: 'geller.monica@yahoo.com',
        pass: 'thegellercup',
        rol: 'teacher',
    },
    {
        nombre: 'Phoebe',
        mail: 'princess.consuela.banana.hammock@yahoo.com',
        pass: 'smellyCat',
        rol: 'student',
    },
    {
        nombre: 'Ross',
        mail: 'dr.ross.geller@mail.com',
        pass: 'unagi',
        rol: 'admin',
    },
    {
        nombre: 'Chandler',
        mail: 'ms.chanandler.bong@mail.com',
        pass: '',
        rol: 'teacher',
    },
    {
        nombre: 'Joey23',
        mail: 'joey.tribbiani@aol.com',
        pass: 'howyoudoin?',
        rol: 'student',
    },
];

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
    let found = usersDB.find((userDB) => userDB.nombre == username);

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
        let data = validateUser(
            users,
            userInput.value,
            passwordInput.value
        );

        if (!data) {
            alert(`Usuario y/o password inválido`);
        } else {
            //Muestro la info para usuarios logueados en el index
            window.location.href = 'index.html';
        }
    }
});
