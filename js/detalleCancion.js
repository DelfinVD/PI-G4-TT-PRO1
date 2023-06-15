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

let queryString = location.search;
let queryStringObj = new URLSearchParams (queryString);

let id = queryStringObj.get(`id`);

let url = "https://api.allorigins.win/raw?url=https://api.deezer.com/track/"+ id;

fetch(url)
.then(function (response) {
    return response.json()
  })
.then(function (data) {
    console.log(data);

    let imgCancion = document.querySelector(".imgCancion")
    let nombreDCancion = document.querySelector(`.nombreDCancion`)
    let artistaDCancion = document.querySelector(`.artistaDCancion`)
    let albumDCancion = document.querySelector(`.albumDCancion`)

    imgCancion.src = data.album.cover_big;
    nombreDCancion.innerText = data.title;
    artistaDCancion.innerText = data.artist.name;
    albumDCancion.innerText = data.album.title;



})
.catch(function (error) {
  console.log("Error: " + error);
})
