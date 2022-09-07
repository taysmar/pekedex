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
    //console.log(pokemons)

    const lisPokemons = renderPokemons(pokemons)
    
    listOfPokemonsElement.innerHTML = lisPokemons
    console.log(listOfPokemonsElement)
   })
}

fetchData() 










// //Faz a requisição para a API. Na variável pokemon vão estar guardados os dados da resposta em formato json. Retorna os dados do pokemon
// function fetchPokemon(url) {
//     const pokemon = fetch(url).then(response => response.json())
//     return pokemon
// }

// //Pega as 151 primeiras Urls 
// async function fetchAllPokemons() {
//     let allPokemons = []
//     for (let i = 1; i <= 151; i++){
//         const url = getPokemonUrl(i)
//         const pokemonData = await fetchPokemon(url).then(pokemon => allPokemons.push(pokemon))
//     }
//     return Promise.all(allPokemons)
// }

// //EventListener que dispara uma função ao carregar a pagina.
// window.addEventListener("load", async(event) => {
//     const allPokemons = await fetchAllPokemons()
//     console.log(allPokemons)
//     console.log("terminou")
// })
// console.log("test")
/**
 * Passo a passo do desafio
 * passo 1- pegar os dados dos primeiros pokemons 
 * passo 1.1 - montar as urls de cada pokemon ✔
 * passo 1.2 - fazer a requisição de cada url
 * passo 2 - Exibir os nomes dos pokemons
 */
