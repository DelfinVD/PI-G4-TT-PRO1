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



let recuperoStorage = localStorage.getItem('cancionesFavoritas');

let cancionesFavoritas = JSON.parse(recuperoStorage)

let ulLista = document.querySelector('.cancionesFavoritasList');

let miLista = '';

 
if (cancionesFavoritas == null || cancionesFavoritas.length == 0) {
    ulLista.innerHTML = '<p>No hay canciones en tu playlist</p>'
} else {
    
    for (let i = 0; i < cancionesFavoritas.length; i++) {

        let url = `https://api.allorigins.win/raw?url=https://api.deezer.com/track/${cancionesFavoritas[i]}`;

        fetch(url)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            console.log(data);
            
                    miLista += `<li class= "liFavoritos">
                                     <img class='imgCancionFavorita' src="${data.album.cover}" alt="imagenCanciónFavorita">
                                     <a class='playlistDetalleSong' href="./detalleCancion.html?id=${data.id}">
                                     <h3 class='nombreCancionFavorita' href="./detalleCancion.html?id=${data.id}">${data.title}</h3>
                                     <p class="nombreArtistaCanciónFavorita">${data.artist.name}</p>
                                    </a>
                                    </li>`

             ulLista.innerHTML = miLista;
        })
        .catch(function(error) {
            console.log(error);
        });
        
    }
}