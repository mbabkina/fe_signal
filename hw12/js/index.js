/* MAIN PAGE */
const filmsList = document.querySelector('.films-list')
const personageList = document.querySelector('.personage-list')
const filmSearch = document.querySelector('.search')
const filmShow = document.querySelector('.film-search')
const goPlanets = document.querySelector('.to-planets')


console.log(`https://swapi.dev/api/films/`)
fetch(`https://swapi.dev/api/films/`)
    .then((response) => {
        return response.json()
    })
    .then((data) => data.results.map((film, title, episode_id) =>
        filmsList.innerHTML = `<li>Episode ${film.episode_id} - "${film.title}"</li>` + filmsList.innerHTML))

const getPersonages = (number) => fetch(`https://swapi.dev/api/people`)
    .then((response) => {
        return response.json()
    })
    .then((data) => {

        const persons = data.results.filter((person, films) =>
            person.films.includes(`http://swapi.dev/api/films/${number}/`))
        console.log(persons)

        persons.map((person, name, gender, birth_year) =>
            personageList.innerHTML = `<li>Name:${person?.name}; 
            date of birth: ${person?.birth_year}; 
            gender: ${person?.gender} </li>` +
            personageList.innerHTML
        )

    })

let filmNumber

filmSearch.addEventListener('input', function() {
    filmNumber = filmSearch.value
    localStorage.setItem('number', JSON.stringify(filmNumber))
})

function showPesonages() {
    getPersonages(JSON.parse(localStorage.getItem('number')))
    localStorage.removeItem('number')
}

filmShow.addEventListener('click', showPesonages)

goPlanets.addEventListener('click', function() {
    window.location.href = 'planets.html';
})