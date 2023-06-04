const container = document.querySelector('.container');

let array = [
    {
        nombre: "",
        artista: "",
        album: "",
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
                                    <h3 class="nameCancion">${array[i].nombre}</h3>
                                    <h4 class="nameArtista">${array[i].artista}</h4>
                                </div>
                            </div>`
}


const containerAlbum = document.querySelector('.containerAlbum');
/*
let usuarios = [
    {
        nombre: "",
        Artista: "",
        nombre: "",
    },
for (let i = 0; i < 5; i++) {
    containerAlbum.innerHTML += `<div class="card">
                                <div class="card-header">
                                    <a href="detalleDisco.html">
                                    <img class="fotoCancion" alt="cantador" src=".//img/the-dark-side-of-the-moon-pink-floyd-1973.jpg"/>
                                </a>
                                </div>
                                <div class="card-body">
                                    <h3 class="nameCancion">nombre Cancion</h3>
                                    <h4 class="nameArtista">nombre Artista</h4>
                                </div>
                            </div>`
}
*/

/*
const containerAlbum = document.querySelector('.containerAlbum');
/*
let usuarios = [
    {
        nombre: "",
        Artista: "",
        nombre: "",
    },
for (let i = 0; i < 5; i++) {
    containerAlbum.innerHTML += `<div class="card">
                                <div class="card-header">
                                    <a href="detalleDisco.html">
                                    <img class="fotoCancion" alt="cantador" src=".//img/the-dark-side-of-the-moon-pink-floyd-1973.jpg"/>
                                </a>
                                </div>
                                <div class="card-body">
                                    <h3 class="nameCancion">nombre Cancion</h3>
                                    <h4 class="nameArtista">nombre Artista</h4>
                                </div>
                            </div>`
}
*/