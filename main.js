const nombre = document.getElementById('nombre');
const apellido = document.getElementById('apellido');
const usuario = document.getElementById('usuario');
const tipoUsuario = document.getElementById('tipousuario');
const correo = document.getElementById('correo');
const celular = document.getElementById('celular');
const botonagregar = document.getElementById('botonagregar');

//apuntador
const listadoTareas = document.querySelector('.listadoTareas');
// ingresar a local storage
const db= window.localStorage;

function agregarContacto(){
    let contacto = {
        id: Math.random(1,100), // agrega un id aleatorio a cada item
        nombre: nombre.value, // recoge los datos del input
        apellido: apellido.value,
        usuario: usuario.value,
        tipoUsuario: tipoUsuario.value,
        correo: correo.value,
        celular: celular.value,
    }
    guardarContacto(db, contacto);
    leerContacto(db, listadoTareas);
    console.log(contacto);
}

