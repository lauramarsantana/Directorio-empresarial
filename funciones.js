function guardarContacto(db, contacto) {
    // cada vez que se hace clicK, se agrega un objeto
    db.setItem(contacto.id, JSON.stringify(contacto)); // permite guardar el objeto y JSON lo deja leer
    //window.location.href = 'agenda.html'; //REFRESCA PAGINA  
}

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
    let tipousuario = document.createElement('p');
    let iconoborrar = document.createElement('span');

    nombrecontacto.innerHTML = contacto.nombre;
    apellidocontacto.innerHTML = contacto.apellido;
    correocontacto.innerHTML = contacto.correo;
    celularcontacto.innerHTML = contacto.celular;
    usuariocontacto.innerHTML = contacto.usuario;
    tipousuariocontacto.innerHTML = contacto.tipousuario;
    iconoborrar.innerHTML = 'delete_forever';

    divcontacto.classList.add('listadoTareas');
    iconoborrar.classList.add('material-symbols-outlined','icono');

    divcontacto.appendChild(nombrecontacto);
    divcontacto.appendChild(apellidocontacto);
    divcontacto.appendChild(correocontacto);
    divcontacto.appendChild(celularContacto);
    divcontacto.appendChild(usuariocontacto);
    divcontacto.appendChild(tipousuario);

    parentnode.appendChild(divcontacto);
}