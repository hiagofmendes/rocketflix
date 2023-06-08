import { API_KEY, BASE_URL, IMG_URL, language  } from './api.js'

function getMovie() {
    const idMovie = Math.floor(Math.random() * 1000) + 1
    const urlApi = `${BASE_URL}${idMovie}?${API_KEY}&${language}`
    
    axios.request(urlApi)
    .then(response => {
        const data = response.data
        
        infosTheMovie.innerHTML = `
        <div>
        <img class="image-movie" src="${IMG_URL + data.poster_path}" alt="Poster do filme.">
        </div>
        <div>
        <h2 class="film-name">${data.title}</h2>
        <p class="movie-summary">${data.overview}</p>
        </div>
        `
    })
    .catch(function (error){
        infosTheMovie.innerHTML = `
        <img class="error-image" src="./assets/error.svg" alt="Imagem de erro">
        <div id="error-message">
        <h2 class="film-name">Ops, hoje não é dia de assistir filme. Bora codar! 🚀</h2>
        </div>
        `
    })
}

const findMovie = document.querySelector('#find-movie')
findMovie.addEventListener('click', getMovie)