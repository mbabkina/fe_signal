/* PLANET PAGE */
const planetsList = document.querySelector('.planets-list')
const goMain = document.querySelector('.to-main')

fetch(`https://swapi.dev/api/planets/`)
    .then((response) => {
        return response.json()
    })
    .then((data) => data.results.map((planet, name, population) =>
        planetsList.innerHTML = `<li>Name: ${planet.name}; population: "${planet.population}"</li>` +
        planetsList.innerHTML))


goMain.addEventListener('click', function() {
    window.location.href = 'index.html';
})