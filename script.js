// // Monta e retorna a url de acordo com o id
 function getPokemonUrl(id)  {
    return `https://pokeapi.co/api/v2/pokemon/${id}`
}

function renderPokemons(pokemons){
    let stringHtml = ''

    Object.keys(pokemons).forEach(function(item){
        stringHtml += `
        <li class="pokemon">
            
           <p class="idPokemon"> # ${pokemons[item].id}</p>
           <p class="namePokemon"> ${pokemons[item].name} </p>
           <img src="${pokemons[item].sprites.versions["generation-i"]["red-blue"].front_transparent}" />
        </li>`

    })
    return stringHtml
    
}
//Cada laço faz a requisição para a url, retorna a promise com o json da resposta
const fetchData = () => {
    const listOfPokemonsElement = document.getElementById("listOfPokemons")
    listOfPokemonsElement.innerHTML = "Carregando ..."
    
    //array onde as promises serão armazenadas
    const pokemonPromises = []

   for (let i = 1; i <= 151; i++) {
    pokemonPromises.push(fetch(getPokemonUrl(i)).then(response => response.json()))
   }

   Promise.all(pokemonPromises)
   .then(pokemons => {

    const lisPokemons = renderPokemons(pokemons)
    
    listOfPokemonsElement.innerHTML = lisPokemons
    console.log(listOfPokemonsElement)
   })
}

fetchData() 
