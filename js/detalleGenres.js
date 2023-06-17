/*--------------------FORMULARIO--------------------*/
const busqueda = document.querySelector('#busquedaForm')
const btn      = document.querySelector('#btn')
const form     = document.querySelector('form')

form.addEventListener('submit', function(e){

    e.preventDefault();

    console.log(busqueda.value);

    if (busqueda.value == ''){

        alert('No puedes enviar el campo vacio')

    } else if (busqueda.value.length  < 3){
        
        alert('Debes ingresar al menos 3 caracteres!');

        console.log(busqueda.value)
    } else {

      form.submit();
    }
})

let qString = location.search;
let qStringObj = new URLSearchParams (qString);

let id = qStringObj.get(`id`);
let nameGenero = qStringObj.get(`name`);
console.log(nameGenero);

let name = document.querySelector(`.nombreDG`)

name.innerText = nameGenero;





fetch(`https://api.allorigins.win/raw?url=https://api.deezer.com/genre/${id}/artists`)
  .then(function (response) {
    return response.json()
  })
  .then(function (data) {
    console.log(data)

    let ulGeneroFA = document.querySelector(`.ulGeneroFA`)
    let listaAG = "";

    for (let i = 0; i < data.data.length; i++) {

    listaAG += `<li class= "liGeneros">
                    <img class='imgCancionGenero' src="${data.data[i].picture_medium}" alt="imagenCanciónFavorita">
                     <a class='' href="./detalleArtista.html?id=${data.data[i].id}">
                      <p class="nombreArtistaGenero">${data.data[i].name}</p>
                     </a>
                 </li>`
    }
    ulGeneroFA.innerHTML +=listaAG

  })
  .catch(function (error) {
    console.log("Error: " + error);
  })


