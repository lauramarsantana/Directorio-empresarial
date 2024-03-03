const nombre = document.getElementById('nombre');
const apellido = document.getElementById('apellido');
const usuario = document.getElementById('usuario');
const tipousuario = document.getElementById('tipousuario');
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
        tipousuario: tipousuario.value,
        correo: correo.value,
        celular: celular.value,
    }
    guardarContacto(db, contacto);
    console.log(contacto);
}
leerContacto(db, listadoTareas);

function descargarPDF() {
    // Recupera los datos de localStorage
    let keys = Object.keys(db);
    let contactos = [];

    for (let elem of keys) {
        let contacto = JSON.parse(db.getItem(elem));
        contactos.push(contacto);
    }

    // Crea el documento PDF y agrega los datos
    let doc = new jsPDF();
    doc.setFontSize(18);
    doc.text("Directorio de Contactos", 20, 20);

    let yPosition = 30;
    for (let contacto of contactos) {
        yPosition += 10;
        doc.text(`Nombre: ${contacto.nombre}`, 20, yPosition);
        yPosition += 7;
        doc.text(`Apellido: ${contacto.apellido}`, 20, yPosition);
        yPosition += 7;
        doc.text(`Correo: ${contacto.correo}`, 20, yPosition);
        yPosition += 7;
        doc.text(`Celular: ${contacto.celular}`, 20, yPosition);
        yPosition += 7;
        doc.text(`Usuario: ${contacto.usuario}`, 20, yPosition);
        yPosition += 7;
        doc.text(`Tipo de Usuario: ${contacto.tipousuario}`, 20, yPosition);
        yPosition += 15;
    }

    // Guarda el PDF
    doc.save('Directorio.pdf');
}
