/*--------------------FORMULARIO--------------------*/
const busqueda = document.querySelector('#busquedaForm')
const btn      = document.querySelector('#btn')
const form     = document.querySelector('#formResult')

form.addEventListener('submit', function(e){

    e.preventDefault();

    console.log(busqueda.value);

    if (busqueda.value == ''){

        alert('No puedes enviar el campo vacio')

    } else if (busqueda.value.length  < 3){
        
        alert('Debes ingresar al menos 3 caracteres!');

        console.log(busqueda.value)
    } else {

        this.sumbit();
    }
})

let qString = location.search;
let qStringObj = new URLSearchParams (qString);

let id = qStringObj.get(`id`);
let nameGenero = qStringObj.get(`name`);
console.log(nameGenero);

let name = document.querySelector(`.nombreDG`)

name.innerText = nameGenero;



let listaAG = "";


fetch(`https://api.allorigins.win/raw?url=https://api.deezer.com/genre/${id}/artists`)
  .then(function (response) {
    return response.json()
  })
  .then(function (data) {
    console.log(data)

   



  })
  .catch(function (error) {
    console.log("Error: " + error);
  })


