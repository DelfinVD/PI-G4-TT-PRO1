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

let url = proxi+endpoint
let = limiteAlbum = "/albums?limit=5"

fetch(url)
.then(function (response) {
    return response.json()
  })
.then(function (data) {

    let imgArtista = document.querySelector(".imgArtista");
    let nombreDArtista = document.querySelector(".nombreDArtista");


     imgArtista.src = data.picture_big;
     nombreDArtista.innerText = data.name;
    
    }).catch(function (error) {
  console.log("Error: " + error);
});

let albumUrl = url + limiteAlbum;

fetch(albumUrl)
.then(function (response) {
    return response.json()
})
.then(function (data) {
    console.log(data);

    let ulAlbumsEnArtista = document.querySelector(".ulAlbumsEnArtista");
    
    let listaAlbum = "";
    let lista = ''
      for (let i=0; i < data.data.length; i++){
        let listaAlbum = data.data[i];
        lista += `<li class='liAlbumArtista'>
                            <p><a class = "listaAlbumDiscoStyle" href="detallesDisco.html?id=${listaAlbum.id}">${listaAlbum.title}</a>
                            </p>
                       </li>`
    
        
        }
        ulAlbumsEnArtista.innerHTML = lista

})
.catch(function (error) {
    console.log("Error: " + error);
})