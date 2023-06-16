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

let qString = location.search;
let qStringObj = new URLSearchParams (qString);

let id = qStringObj.get(`id`);

let url = "https://api.allorigins.win/raw?url=https://api.deezer.com/album/"+ id;

fetch(url)
.then(function (response) {
    return response.json()
  })
.then(function (data) {
    console.log(data);

      let imgDisco =      document.querySelector(".imgDisco")
      let nombreDDisco =  document.querySelector(`.nombreDDisco`)
      let artistaDDisco = document.querySelector(`.artistaDDisco`)
      let generoDDisco =  document.querySelector(`.generoDDisco`)
      let fechaDDisco =   document.querySelector(`.fechaDDisco`)


      imgDisco.src = data.cover_big;
      nombreDDisco.innerText = data.title;
      artistaDDisco.innerText = data.artist.name;
      generoDDisco.innerText = data.genres.data[0].name;
      fechaDDisco.innerText = data.release_date;

      let ulCancionesEnDisco = document.querySelector(".ulCancionesEnDisco");
      let listaCancionesEnD = "";
      

      for (let i= 0; i < data.tracks.data.length; i++) {
        let cancionEnD = data.tracks.data[i]
        console.log(cancionEnD);
        listaCancionesEnD += `<li class='liCancionesDisco'>
                                <p><a class = "listaCancionesDiscoStyle" href="detallesCancion.html?id=${cancionEnD.id}">${cancionEnD.title}</a>
                                </p>
                             </li>`
      }
      ulCancionesEnDisco.innerHTML += listaCancionesEnD

})
.catch(function (error) {
  console.log("Error: " + error);
})
