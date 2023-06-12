const busqueda = document.querySelector('#busqueda')
const btn      = document.querySelector('#btn')
const form     = document.querySelector('#form')

form.addEventListener('submit', function(e){

    e.preventDefault();

    if (busqueda.value == ''){

        alert('No puedes enviar el campo vacio')

    } else{

        this.sumbit();

    }
    if (busqueda.length  < 3){}
    
});




/*
Que el término buscado tenga al menos 3 caracteres. Si no los tiene avisar por pantalla al usuario.
*/