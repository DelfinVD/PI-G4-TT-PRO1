/*--------------------FORMULARIO--------------------*/
const busqueda = document.querySelector('#busquedaForm')
const btn      = document.querySelector('#btn')
const form     = document.querySelector('form')

form.addEventListener('submit', function(e){

    e.preventDefault();

    console.log(busqueda.value);

    if (busqueda.value == ''){

        alert('No puedes enviar el campo vacio')

    } else if (busqueda.value.length  < 3){
        
        alert('Debes ingresar al menos 3 caracteres!');

        console.log(busqueda.value)
    } else {

      form.submit();
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

    let imgCancion = document.querySelector(".imgCancion");
    let nombreDCancion = document.querySelector(`.nombreDCancion`);
    let artistaDCancion = document.querySelector(`.artistaDCancion`);
    let albumDCancion = document.querySelector(`.albumDCancion`);

    imgCancion.src = data.album.cover_big;
    nombreDCancion.innerText = data.title;
    artistaDCancion.innerText = data.artist.name;
    albumDCancion.innerText = data.album.title;



})
.catch(function (error) {
  console.log("Error: " + error);
})

/*                      Guardar en favorito                         */

/* Crear un array vacio para luego ser completado con lo que trae localStorage */
let cancionesFavoritas = [];

/* Recuperar localStorage de la key "favoritos" */
let recuperoStorage = localStorage.getItem('cancionesFavoritas');

/* Preguntar si es distinto de nulo para ver si tiene info */
if (recuperoStorage != null) {
    cancionesFavoritas = JSON.parse(recuperoStorage);
}

/* Recurperar el elemento del DOM */
let agregarAMiPlaylist = document.querySelector('#agregarAMiPlaylist');

/* preguntar si el array favoritos incluye este ID - si lo incluye cambiar el texto a quitar de favoritos*/

if (cancionesFavoritas.includes(id)) {
    agregarAMiPlaylist.innerText = 'Quitar de Favoritos'
}

/* agregar el evento click a el boton de Fav - preguntar si el array de favoritos inlcuye el ID del personaje

TRUE = si clickeo el btn y existe quiero eliminarlo y cambiar el texto del btn
FALSE = si clickeo el btn y NOO existe quiero pushearlo y cambiar el texto del btn

Pasar FAVORITOS a JSON y subirlos a localStorage
*/

agregarAMiPlaylist.addEventListener('click', function() {
    if (cancionesFavoritas.includes(id)) {
        let indice = cancionesFavoritas.indexOf(id)
        cancionesFavoritas.splice(indice, 1);
        agregarAMiPlaylist.innerText = 'Agregar a favorito'
    } else {
        cancionesFavoritas.push(id);
        agregarAMiPlaylist.innerText = 'Quitar de favorito'
    }

    let cancionesFavoritasToString = JSON.stringify(cancionesFavoritas);
    localStorage.setItem('cancionesFavoritas', cancionesFavoritasToString )
} )

