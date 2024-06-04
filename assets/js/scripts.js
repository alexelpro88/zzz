var contador = 0; 

function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username === 'usuario' && password === 'contraseña') {
        window.location.href = 'index.html';
    } else {
        contador++;
        alert('Usuario o contraseña incorrectos');
        if (contador === 3) {
            alert('Has superado el número de intentos');
        }
    }
}