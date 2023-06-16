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

const apiKey = "1d198b2f50da690e7ebfa2b84c19da0e";


fetch(`https://api.allorigins.win/raw?url=https://api.deezer.com/genre?api_key=${apiKey}`)
  .then(function (response) {
    return response.json()
  })
  .then(function (data) {
    console.log(data);

    let ulGenero = document.querySelector(".ulGenero");
      let listaGenerosEnG = "";
      

      for (let i= 0; i < data.data.length; i++) {
        let generoEnG = data.data[i]
        console.log(generoEnG);
        listaGenerosEnG += `<li class='liGeneroEnG'>
                                <p><a class = "listaGeneroEnG" href="detalleGenres.html?id=${generoEnG.id}&&name=${generoEnG.name}">${generoEnG.name}</a>
                                </p>
                             </li>`
      }
      ulGenero.innerHTML += listaGenerosEnG


  })
  .catch(function (error) {
    console.log("Error: " + error);
  })

