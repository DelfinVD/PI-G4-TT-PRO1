let queryString = location.search;
let queryStringObj = new URLSearchParams (queryString);

let id = queryStringObj.get(`id`); 

let url = "https://api.allorigins.win/raw?url=https://api.deezer.com/chart/track?id="+ id;

fetch(url)
.then(function (response) {
    return response.json()
  })
.then(function (data) {
    console.log(data);

    let nombreCancion = document.querySelector('.')

})
.catch(function (error) {
  console.log("Error: " + error);
})
