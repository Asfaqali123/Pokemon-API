var pokemonCard ="";

const getpokemon = async () => {
    await fetch('https://pokeapi.co/api/v2/pokemon?limit=50&offset=0')
    .then((response)=>response.json())
    .then((data)=>{
         data.results.map((pokemon)=>getpokemonDetail(pokemon.url));
    })
    .catch((err)=>console.log(err))
}
getpokemon();

var getpokemonDetail = async (url) => {
  
   await fetch(url)
    .then((response)=>response.json())
    .then((data)=>{ 
        console.log(data)
         pokemonCard = pokemonCard + `<div class="pokemon_cards">
         <div class="pokemon_info">
             <span>${data.name}</span>
             <span>W
                 <span>${data.weight}</span>
             </span>
         </div>  
         <img src=${data.sprites.front_shiny} alt="">
             <div class="pokemon_detail">
             <div class="pokemon_ability">
                 <h4>Abilities</h5>
                 <ul>
                     ${data.abilities.map((power)=>{
                        return `<li>${power.ability.name}</li>`
                    }).join('')}
                 </ul>
             </div>
             <div class="pokemon_moves">
                 <h4>Moves</h5>
                 <ul>
                 ${data.moves.map((power,index)=>{
                    if(index <= 3){
                    return `<li>${power.move.name}</li>`
                    }
                }).join('')}
                   
                 </ul>
             </div>
         </div>
     </div>`
    });
    document.getElementById("card_container").innerHTML=pokemonCard;
}
