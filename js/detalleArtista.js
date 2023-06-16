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

let qS = location.search;
let qSObj = new URLSearchParams (qS);

let id = qSObj.get(`id`);


let url = "https://api.allorigins.win/raw?url=https://api.deezer.com/artist/"+ id;

fetch(url)
.then(function (response) {
    return response.json()
  })
.then(function (data) {
    console.log(data);

        let imgArtista = document.querySelector(".imgArtista")
        let nombreDArtista = document.querySelector(`.nombreDArtista`)
    

        imgArtista.src = data.cover_big;
        nombreDArtista.innerText = data.title;
   

    //   let ulCancionesEnDisco = document.querySelector(".ulCancionesEnDisco");
    //   let listaCancionesEnD = "";
      

    //   for (let i= 0; i < data.tracks.data.length; i++) {
    //     let cancionEnD = data.tracks.data[i]
    //     console.log(cancionEnD);
    //     listaCancionesEnD += `<li class='liCancionesDisco'>
    //                             <p><a class = "listaCancionesDiscoStyle" href="detallesCancion.html?id=${cancionEnD.id}">${cancionEnD.title}</a>
    //                             </p>
    //                          </li>`
    //   }
    //   ulCancionesEnDisco.innerHTML += listaCancionesEnD

})
.catch(function (error) {
  console.log("Error: " + error);
})

