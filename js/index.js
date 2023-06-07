const container = document.querySelector('.container');

let arrayCanciones = [
    {
        cancion: "",
        artista: "",
    },
    {
        cancion: "",
        artista: "",
    },
    {
        cancion: "",
        artista: "",
    },
    {
        cancion: "",
        artista: "",
    },
    {
        cancion: "",
        artista: "",
    },
]

for (let i = 0; i < arrayCanciones.length; i++) {
    container.innerHTML += `<div class="card">
                                <div class="card-header">
                                    <a href="detalleCancion.html">
                                    <img class="fotoCancion" alt="cantador" src=".//img/the-dark-side-of-the-moon-pink-floyd-1973.jpg"/>
                                </a>
                                </div>
                                <div class="card-body">
                                    <h3 class="nameCancion">${arrayCanciones[i].cancion}</h3>
                                    <h4 class="nameArtista">${arrayCanciones[i].artista}</h4>
                                </div>
                            </div>`
}


const containerAlbum = document.querySelector('.containerAlbum');

let arrayAlbum = [
    {
        album: "",
    },
    {
        album: "",
    },
    {
        album: "",
    },
    {
        album: "",
    },
    {
        album: "",
    },
]
for (let i = 0; i < arrayAlbum.length; i++) {
    containerAlbum.innerHTML += `<div class="card">
                                    <div class="card-header">
                                      <a href="detalleCancion.html">
                                     <img class="fotoCancion" alt="cantador" src=".//img/the-dark-side-of-the-moon-pink-floyd-1973.jpg"/>
                                    </a>
                                    </div>
                                    <div class="card-body">
                                      <h3 class="nameAlbum">${arrayAlbum[i].album}</h3>
                                     
                                     </div>
                                </div>`
}



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
                                            
                                            <h3 class="nameArtista">${arrayArtistas[i].ar}</h3>
                                        </div>
                                     </div>`
}