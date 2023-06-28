
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

    window.fetch (`${apiURL}${inputName.value.toLowerCase()}`)

    .then (datos => {
        if (datos.status === 404){
            alert ('este pokemon no esta disponible')
        } else {
            return datos.json()
        }
    })

    .then (response => mostrarPokemon (response))

}

function mostrarPokemon (datos) {

    nombrePokemon.textContent = datos.name.toUpperCase();
    idPokemon.textContent = (`# ${datos.id}`)
    imgPokemon.setAttribute ('src', datos.sprites.front_default);

    const {types} = datos;
    pokemonDeTipo (types)

        function pokemonDeTipo (types) {
            typePokemon.innerHTML = '';
            types.forEach(i => {
                const typeTextElement = document.createElement("div");
                typeTextElement.textContent = i.type.name;
                typePokemon.appendChild(typeTextElement);
            })
        }

    const {stats} = datos;
    pokemonStats (stats)

        function pokemonStats (stats) {
            statsPokemon.innerHTML = '';
            stats.forEach (i => {
                const statElement = document.createElement("div");
                const statElementName = document.createElement("div");
                const statElementAmount = document.createElement("div");
                statElementName.textContent = i.stat.name;
                statElementAmount.textContent = i.base_stat;
                statElement.append(statElementName);
                statElement.append(statElementAmount);
                statsPokemon.append(statElement);
            }); 
        }


    const {abilities} = datos;
    pokemonAbilidades (abilities)

        function pokemonAbilidades (abilities) {
            abilityPokemon.innerHTML = '';        
            abilities.forEach(i => {
                const typeTextElement = document.createElement("div");
                typeTextElement.textContent = i.ability.name;
                abilityPokemon.append(typeTextElement);
            })
        }

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

    .then (response => mostrarPokemon2 (response))

}

function mostrarPokemon2 (datos) {

    nombrePokemon2.textContent = datos.name.toUpperCase();
    idPokemon2.textContent = (`# ${datos.id}`)
    imgPokemon2.setAttribute ('src', datos.sprites.front_default);

    const {types} = datos;
    pokemonDeTipo (types)

        function pokemonDeTipo (types) {
            typePokemon2.innerHTML = '';
            types.forEach(i => {
                const typeTextElement = document.createElement("div");
                typeTextElement.textContent = i.type.name;
                typePokemon2.appendChild(typeTextElement);
            })
        }

    const {stats} = datos;
    pokemonStats (stats)

        function pokemonStats (stats) {
            statsPokemon2.innerHTML = '';
            stats.forEach (i => {
                const statElement = document.createElement("div");
                const statElementName = document.createElement("div");
                const statElementAmount = document.createElement("div");
                statElementName.textContent = i.stat.name;
                statElementAmount.textContent = i.base_stat;
                statElement.append(statElementName);
                statElement.append(statElementAmount);
                statsPokemon2.append(statElement);
            }); 
        }


    const {abilities} = datos;
    pokemonAbilidades (abilities)

        function pokemonAbilidades (abilities) {
            abilityPokemon2.innerHTML = '';
        
            abilities.forEach(i => {
                const typeTextElement = document.createElement("div");
                typeTextElement.textContent = i.ability.name;
                abilityPokemon2.append(typeTextElement);
            })
        }

}

