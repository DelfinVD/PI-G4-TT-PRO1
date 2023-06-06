const container = document.querySelector('.container');

let array = [
    {
        cancion: "hit",
        artista: "pepe",
    
    },
]

for (let i = 0; i < 5; i++) {
    container.innerHTML += `<div class="card">
                                <div class="card-header">
                                    <a href="detalleCancion.html">
                                    <img class="fotoCancion" alt="cantador" src=".//img/the-dark-side-of-the-moon-pink-floyd-1973.jpg"/>
                                </a>
                                </div>
                                <div class="card-body">
                                    <h3 class="nameCancion">cancion</h3>
                                    <h4 class="nameArtista">artista</h4>
                                </div>
                            </div>`
}


const containerAlbum = document.querySelector('.containerAlbum');

let usuarios = [
    {
        Album: "",
        nombre: "",
    },
]
for (let i = 0; i < 5; i++) {
    containerAlbum.innerHTML += `<div class="card">
                                    <div class="card-header">
                                      <a href="detalleCancion.html">
                                     <img class="fotoCancion" alt="cantador" src=".//img/the-dark-side-of-the-moon-pink-floyd-1973.jpg"/>
                                    </a>
                                    </div>
                                    <div class="card-body">
                                      <h3 class="nameAlbum">album</h3>
                                     
                                     </div>
                                     </div>`
}



const containerArtistas = document.querySelector('.containerArtistas');

let titulos = [
    {
        nombre: "",
        Artista: "",
        nombre: "",
    },
]
for (let i = 0; i < 5; i++) {
    containerArtistas.innerHTML += `<div class="card">
                                <div class="card-header">
                                    <a href="detalleDisco.html">
                                    <img class="fotoCancion" alt="cantador" src=".//img/the-dark-side-of-the-moon-pink-floyd-1973.jpg"/>
                                </a>
                                </div>
                                <div class="card-body">
                                    
                                    <h3 class="nameArtista">nombre Artista</h3>
                                </div>
                            </div>`
}