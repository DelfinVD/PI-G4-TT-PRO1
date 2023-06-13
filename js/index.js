const apiKey  = "1d198b2f50da690e7ebfa2b84c19da0e";


fetch(`https://api.allorigins.win/raw?url=https://api.deezer.com/chart/track?api_key=${apiKey}`)
.then(function(response) {
  return response.json()
})
.then(function(data) {
    console.log(data);

//    let arrayCanciones = [
//      {
//          cancion: `${data[i].title}`,
//          artista: `${}`,
//      },
//     {
//         cancion: `${}`,
//         artista: `${}`,
//     },
//     {
//         cancion: `${}`,
//         artista: `${}`,
//     },
//     {
//         cancion: `${}`,
//         artista: `${}`,
//     },
//     {
//         cancion: `${}`,
//         artista: `${}`,
//     }
    //  ]
   

  const container = document.querySelector('.container');

  
  for (let i = 0; i < 5; i++) {
      container.innerHTML += `<div class="card">
                                  <div class="card-header">
                                      <a href="detalleCancion.html">
                                      <img class="fotoCancion" alt="cantador" src=".//img/the-dark-side-of-the-moon-pink-floyd-1973.jpg"/>
                                  </a>
                                  </div>
                                  <div class="card-body">
                                      <h3 class="nameCancion"></h3>
                                      <h4 class="nameArtista"></h4>
                                  </div>
                              </div>`
  }

})
.catch(function(error) {
  console.log("Error: " + error);
})



fetch(`https://api.allorigins.win/raw?url=https://api.deezer.com/chart/albums?api_key=${apiKey}`)
.then(function(response) {
    return response.json()
  })
  .then(function(data) {
  
  console.log(data);

const containerAlbum = document.querySelector('.containerAlbum');

// let arrayAlbum = [
//     {
//         album: "",
//     },
//     {
//         album: "",
//     },
//     {
//         album: "",
//     },
//     {
//         album: "",
//     },
//     {
//         album: "",
//     },
// ]


for (let i = 0; i < 5; i++) {
    containerAlbum.innerHTML += `<div class="card">
                                    <div class="card-header">
                                      <a href="detalleCancion.html">
                                     <img class="fotoCancion" alt="cantador" src=".//img/the-dark-side-of-the-moon-pink-floyd-1973.jpg"/>
                                    </a>
                                    </div>
                                    <div class="card-body">
                                      <h3 class="nameAlbum"></h3>
                                     
                                     </div>
                                </div>`
}

})
.catch(function(error) {
  console.log("Error: " + error);
})

fetch(`https://api.allorigins.win/raw?url=https://api.deezer.com/chart/artists?api_key=${apiKey}`)
.then(function(response) {
  return response.json()
})
.then(function(data) {

    console.log(data);

const containerArtistas = document.querySelector('.containerArtistas');

let arrayArtistas = [
    {
        artista: "",
    },
    {
        artista: "",
    },
    {
        artista: "",
    },
    {
        artista: "",
    },
    {
        artista: "",
    },
]
for (let i = 0; i < arrayArtistas.length; i++) {
    containerArtistas.innerHTML += `<div class="card">
                                        <div class="card-header">
                                            <a href="detalleDisco.html">
                                            <img class="fotoCancion" alt="cantador" src=".//img/the-dark-side-of-the-moon-pink-floyd-1973.jpg"/>
                                        </a>
                                        </div>
                                        <div class="card-body">
                                            
                                            <h3 class="nameArtista"></h3>
                                        </div>
                                     </div>`
}

})
.catch(function(error) {
  console.log("Error: " + error);
})