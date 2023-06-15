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

const apiKey = "1d198b2f50da690e7ebfa2b84c19da0e";


fetch(`https://api.allorigins.win/raw?url=https://api.deezer.com/chart/track?api_key=${apiKey}`)
  .then(function (response) {
    return response.json()
  })
  .then(function (data) {
    console.log(data.tracks);

    const container = document.querySelector('.container');



    for (let i = 0; i < 5; i++) {
      container.innerHTML += `<div class="card">
                                  <div class="card-header">
                                     <a href="detalleDisco.html?id=${data.tracks.data[i].id}">
                                      <img class="fotoCancion" alt="cantador" src="${data.tracks.data[i].album.cover_medium}"/>
                                  </a>
                                  </div>
                                  <div class="card-body">
                                      <h3 class="nameCancion"><a href="./detalleCancion.html" class="aArt"> ${data.tracks.data[i].title}       </a></h3>
                                      <h4 class="nameArtista"><a href="./detalleArtista.html" class="aArt"> ${data.tracks.data[i].artist.name}  </a></h4>
                                  </div>
                              </div>`
    }

  })
  .catch(function (error) {
    console.log("Error: " + error);
  })



fetch(`https://api.allorigins.win/raw?url=https://api.deezer.com/chart/albums?api_key=${apiKey}`)
  .then(function (response) {
    return response.json()
  })
  .then(function (data) {

    console.log(data.albums);

    const containerAlbum = document.querySelector('.containerAlbum');


    for (let i = 0; i < 5; i++) {
      console.log(data.albums.data[i].title.length);
      let titulo = data.albums.data[i].title

      if (data.albums.data[i].title.length==110) {
        titulo = "SPIDER-MAN"
      } else if (data.albums.data[i].title.length==40) { 
        titulo = "Los Niños de Sara"
      }
      containerAlbum.innerHTML += `<div class="card">
                                    <div class="card-header">
                                      <a href="detalleDisco.html?id=${data.albums.data[i].id}">
                                     <img class="fotoCancion" alt="cantador" src="${data.albums.data[i].cover_medium}"/>
                                    </a>
                                    </div>
                                    <div class="card-body">
                                      <h3 class="nameAlbum">${titulo}</h3>
                                     
                                     </div>
                                </div>`
    }

  })
  .catch(function (error) {
    console.log("Error: " + error);
  })

fetch(`https://api.allorigins.win/raw?url=https://api.deezer.com/chart/artists?api_key=${apiKey}`)
  .then(function (response) {
    return response.json()
  })
  .then(function (data) {

    console.log(data.artists);

    const containerArtistas = document.querySelector('.containerArtistas');


    for (let i = 0; i < 5; i++) {
      containerArtistas.innerHTML += `<div class="card">
                                        <div class="card-header">
                                            <a href="detalleArtista.html?id=${data.artists.data[i].id}">
                                            <img class="fotoCancion" alt="cantador" src="${data.artists.data[i].picture_medium}"/>
                                        </a>
                                        </div>
                                        <div class="card-body">
                                            
                                            <h3 class="nameArtista">${data.artists.data[i].name}</h3>
                                        </div>
                                     </div>`
    }

  })
  .catch(function (error) {
    console.log("Error: " + error);
  })