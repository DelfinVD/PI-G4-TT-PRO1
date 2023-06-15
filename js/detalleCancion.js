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

/*--------------------Conexion Api a Detalle Cancion-------------------*/
const apiKey = "1d198b2f50da690e7ebfa2b84c19da0e";

let queryString = location.search 
let queryStringObj = new URLSearchParams(queryString) 

let id = queryStringObj.get("id")


let proxi = "https://cors-anywhere.herokuapp.com/"; 
let endpoint ="https://api.deezer.com/track/" + id; 
let url = proxi+endpoint;


let detallesCancion = document.querySelector("#detallesSongs");


fetch(url)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {

        console.log(data);
        
        let nameCancion = document.querySelector(".nombreCancionDet");
        let imgAlbmun = document.querySelector(".imgAlbmun");
        let artistaCancion = document.querySelector("artistaDeCancionStyle");
        let albumCancion = document.querySelector(".albumCancionStyle");
        let duracionCancion = document.querySelector(".duracionCancion");
        let fechaLanzamiento = document.querySelector(".fechaLanzamiento");

        nameCancion.innerText = data.title;
        imgAlbmun.src = data.album.cover_medium;
        artistaCancion.innerHTML += `<a href="./detallesArtista.html?id=${data.artist.id}">${data.artist.name}</a>`
        albumCancion.innerHTML += `<a href="./detallesDisco.html?id= ${data.album.id}">${data.album.title}</a>`
        duracionCancion.innerHTML += data.duration + ` Segundos`;
        fechaLanzamiento.innerHTML += data. release_date
    })
    .catch(function (error) {
        console.log("Error: " + error);
});
/* REVISAR*/