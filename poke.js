
const apiURL = 'https://pokeapi.co/api/v2/pokemon/'
const inputName = document.getElementById ('inputName')
const bttnBuscar = document.getElementById ('bttnBuscar')
const nombrePokemon = document.getElementById ('name-pokemon'); 
const idPokemon = document.getElementById ('id-pokemon');
const imgPokemon = document.getElementById ('img-pokemon');
const typePokemon = document.getElementById ('type-pokemon');
const statsPokemon = document.getElementById ('stats-pokemon');
const abilityPokemon = document.getElementById ('abilty-pokemon')

bttnBuscar.addEventListener ('click', cargarPokemon);

function cargarPokemon () {

    fetch (`${apiURL}${inputName.value.toLowerCase()}`)

    .then (datos => {
        if (datos.status === 404){
            alert ('este pokemon no esta disponible')
        } else {
            return datos.json()
        }
    })

    .then ((data) => mostrarPokemon (data))
    .catch((error) => console.error('Error', error));

}

function mostrarPokemon(data){
    nombrePokemon.textContent = data.name.toUpperCase();
    idPokemon.textContent = (`# ${data.id}`);
    imgPokemon.src = data.sprites.front_default;

    renderPokemonTypes(data.types);
    renderPokemonStats(data.stats);
    renderPokemonAbilities(data.abilities);
}

function renderPokemonTypes(types) {
    typePokemon.innerHTML = '';
    types.forEach((type) => {
      const typeTextElement = document.createElement('div');
      typeTextElement.textContent = type.type.name;
      typePokemon.appendChild(typeTextElement);
    });
}
  
function renderPokemonStats(stats) {
    statsPokemon.innerHTML = '';
    stats.forEach((stat) => {
      const statElement = document.createElement('div');
      const statElementName = document.createElement('div');
      const statElementAmount = document.createElement('div');
      statElementName.textContent = stat.stat.name;
      statElementAmount.textContent = stat.base_stat;
      statElement.appendChild(statElementName);
      statElement.appendChild(statElementAmount);
      statsPokemon.appendChild(statElement);
    });
}
  
function renderPokemonAbilities(abilities) {
    abilityPokemon.innerHTML = '';
    abilities.forEach((ability) => {
      const abilityTextElement = document.createElement('div');
      abilityTextElement.textContent = ability.ability.name;
      abilityPokemon.appendChild(abilityTextElement);
    });
}

// pokemon 2

const inputName2 = document.getElementById ('inputName-2')
const bttnBuscar2 = document.getElementById ('bttnBuscar-2')
const nombrePokemon2 = document.getElementById ('name-pokemon-2'); 
const idPokemon2 = document.getElementById ('id-pokemon-2');
const imgPokemon2 = document.getElementById ('img-pokemon-2');
const typePokemon2 = document.getElementById ('type-pokemon-2');
const statsPokemon2 = document.getElementById ('stats-pokemon-2');
const abilityPokemon2 = document.getElementById ('abilty-pokemon-2')

bttnBuscar2.addEventListener ('click', cargarPokemon2);

function cargarPokemon2 () {

    window.fetch (`${apiURL}${inputName2.value.toLowerCase()}`)

    .then (datos => {
        if (datos.status === 404){
            alert ('este pokemon no esta disponible')
        } else {
            return datos.json()
        }
    })

    .then ((data) => mostrarPokemon2 (data))
    .catch((error) => console.error('Error', error));

}

function mostrarPokemon2(data){
    nombrePokemon2.textContent = data.name.toUpperCase();
    idPokemon2.textContent = (`# ${data.id}`);
    imgPokemon2.src = data.sprites.front_default;

    renderPokemonTypes2(data.types);
    renderPokemonStats2(data.stats);
    renderPokemonAbilities2(data.abilities);
}

function renderPokemonTypes2(types) {
    typePokemon2.innerHTML = '';
    types.forEach((type) => {
      const typeTextElement = document.createElement('div');
      typeTextElement.textContent = type.type.name;
      typePokemon2.appendChild(typeTextElement);
    });
}

function renderPokemonStats2(stats) {
    statsPokemon2.innerHTML = '';
    stats.forEach((stat) => {
      const statElement = document.createElement('div');
      const statElementName = document.createElement('div');
      const statElementAmount = document.createElement('div');
      statElementName.textContent = stat.stat.name;
      statElementAmount.textContent = stat.base_stat;
      statElement.appendChild(statElementName);
      statElement.appendChild(statElementAmount);
      statsPokemon2.appendChild(statElement);
    });
}

function renderPokemonAbilities2(abilities) {
    abilityPokemon2.innerHTML = '';
    abilities.forEach((ability) => {
      const abilityTextElement = document.createElement('div');
      abilityTextElement.textContent = ability.ability.name;
      abilityPokemon2.appendChild(abilityTextElement);
    });
}

