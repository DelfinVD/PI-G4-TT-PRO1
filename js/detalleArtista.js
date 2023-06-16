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
/*--------------------------------------*/

let qString = location.search;
let qStringObj = new URLSearchParams (qString);

let id = qStringObj.get(`id`);


let proxi = "https://cors-anywhere.herokuapp.com/"; 
let endpoint ="https://api.deezer.com/artist/" + id; 
let url = proxi+endpoint;


fetch(url)
.then(function (response) {
    return response.json()
  })
.then(function (data) {
    console.log(data);

    let imgArtista = document.querySelector(".imgArtista");
    let nombreDArtista = document.querySelector(".nombreDArtista");

    imgArtista.src = data.picture_big;
    nombreDArtista.innerText = data.name;

    let urlAlbums = url + '/album?limit=5'
    let ulAlbumsEnArtista = document.querySelector('.ulAlbumsEnArtista')

})
      /*  let ulAlbumsenArtista = document.querySelector(".ulAlbumsEnArtista");
        let listaAlbumesEnArtista = "";
        

        for (let i= 0; i < 5; i++) {
        let albumEnA = data..data[i]
        console.log(cancionEnD);
        listaCancionesEnD += `<li class='liCancionesDisco'>
                                <p><a class = "listaCancionesDiscoStyle" href="detallesCancion.html?id=${cancionEnD.id}">${cancionEnD.title}</a>
                                </p>
                            </li>`
        }
        ulCancionesEnDisco.innerHTML += listaCancionesEnD*/
.catch(function (error) {
  console.log("Error: " + error);
});
