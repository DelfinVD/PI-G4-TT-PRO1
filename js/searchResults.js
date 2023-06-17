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

/******************** SEARCH RESULTADOS ***************************** */
let queryString = location.search

let queryStringObj = new URLSearchParams(queryString)

let value = queryStringObj.get("buscar")

console.log(value)



let url = "https://api.allorigins.win/raw?url=https://api.deezer.com/search?q=" + valor
fetch(url)
    .then(function (response) {
        return response.json()
    })

    .then(function (data) {
        console.log(data);
        document.querySelector(".resultados").innerHTML +=
            `<h1 class="titulosearch">RESULTADOS DE BÚSQUEDA PARA: "${valor}"</h1>`

        if (data.data.length === 0) {
            document.querySelector(".cancionesResultados").innerHTML = "No se encuentran coincidencias";
            document.querySelector(".artistasResultados").innerHTML = "No se encuentran coincidencias";
            document.querySelector(".albumResultados").innerHTML = "No se encuentran coincidencias";
        } else {
            for (let index = 0; index < 5; index++) {
                document.querySelector(`.cancionesResultados`).innerHTML += `<a href="./detallecancion.html?id=${data.data[index].id}">
                <h3 class="nombrecancionsearch"> ${data.data[index].title}</h3>
                <img class="imgcancionsearch" src=${data.data[index].album.cover_medium} alt=""/>
                
                </a>`;
                document.querySelector(`.artistasResultados`).innerHTML += `<a href="./detallecantante.html?id=${data.data[index].id}">
                <h3 class="nombreartistasearch"> ${data.data[index].artist.name}</h3>
                <img class="imgartsearch" src=${data.data[index].artist.picture_medium} alt=""/>
                
                </a>`;

                document.querySelector(`.albumResultados`).innerHTML += `<a href="./detallealbum.html?id=${data.data[index].id}">
                <h3 class="nombrealbumsearch"> ${data.data[index].album.title}</h3>
                <img class="imgcancionsearch" src=${data.data[index].album.cover_medium} alt=""/>

                </a>`;
            }
        }   
    })
    .catch(function (error) {
        console.log(error);
    });