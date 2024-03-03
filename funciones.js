function guardarContacto(db, contacto) {
    // cada vez que se hace clicK, se agrega un objeto
    db.setItem(contacto.id, JSON.stringify(contacto)); // permite guardar el objeto y JSON lo deja leer

    // Limpiar los campos de entrada
    //limpiarInputs();
    window.location.reload();
}



/*function limpiarInputs() {
    // Obtener los elementos de input y establecer su valor en vacío
    document.getElementById('nombre').value = '';
    document.getElementById('apellido').value = '';
    document.getElementById('usuario').value = '';
    document.getElementById('tipousuario').value = '';
    document.getElementById('correo').value = '';
    document.getElementById('celular').value = '';
}*/

function leerContacto(db,parentnode){
    let keys = Object.keys(db);
    for(elem of keys){
        let contacto = JSON.parse(db.getItem(elem));
        //console.log("contacto: "+contacto.nombre+"------");
        crearContacto(parentnode, contacto, db);
    }
}

function crearContacto(parentnode,contacto,db){
    let divcontacto = document.createElement('div');
    let nombrecontacto = document.createElement('h3');
    let apellidocontacto = document.createElement('h3');
    let correocontacto = document.createElement('p');
    let celularcontacto = document.createElement('p');
    let usuariocontacto = document.createElement('p');
    let tipousuariocontacto = document.createElement('p');
    let iconoborrar = document.createElement('span');

    nombrecontacto.innerHTML = contacto.nombre;
    apellidocontacto.innerHTML = contacto.apellido;
    correocontacto.innerHTML = contacto.correo;
    celularcontacto.innerHTML = contacto.celular;
    usuariocontacto.innerHTML = contacto.usuario;
    tipousuariocontacto.innerHTML = contacto.tipousuario;
    iconoborrar.innerHTML = 'delete_forever';

    divcontacto.classList.add('tarea');
    iconoborrar.classList.add('material-symbols-outlined','icono');

    iconoborrar.onclick = () => {
        db.removeItem(contacto.id);
        console.log("Contacto eliminado:", contacto.id)
        window.location.reload();
    };
    

    divcontacto.appendChild(nombrecontacto);
    divcontacto.appendChild(apellidocontacto);
    divcontacto.appendChild(correocontacto);
    divcontacto.appendChild(celularcontacto);
    divcontacto.appendChild(usuariocontacto);
    divcontacto.appendChild(tipousuariocontacto);
    divcontacto.appendChild(iconoborrar);

    //nodo padre
    parentnode.appendChild(divcontacto);
}