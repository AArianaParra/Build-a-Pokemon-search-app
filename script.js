/* Creating variables */
const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
const pokemonName = document.getElementById("pokemon-name");
const pokemonId = document.getElementById("pokemon-id");
const pokemonImgContainer = document.getElementById("pokemon-img-container");
const pokemonHeight = document.getElementById("height");
const pokemonWeight = document.getElementById("weight");
const hpTag = document.getElementById("hp-tag");
const attackTag = document.getElementById("attack-tag");
const defenseTag = document.getElementById("defense-tag");
const spAttackTag = document.getElementById("sp-attack-tag");
const spDefenseTag = document.getElementById("sp-defense-tag");
const speedTag = document.getElementById("speed-tag");
const allPokemonListUrl = "https://pokeapi-proxy.freecodecamp.rocks/api/pokemon";

/* Functions */
//-----------------------
const checkUserInput = (input) =>  {
  const regex = [/(?:^\s+)/, /(?:\s+$)/];
  regex.map((reg) => {
    input = input.replace(reg, "");
  });
  //console.log(input)
  fetchData(input)
  //return input;
}
//-----------------------
const fetchData = async (input) => {
  try {
    const response = await fetch(allPokemonListUrl);
    const data = await response.json();
    //console.log(data); Only to check whether the data is well-fetched
    checkIdOrName(input, data);
    //return data;

  } catch (err) {
    console.log(err);
  }
}


//-----------------------
//Ponerle brillito especial a los cards :)
const checkIdOrName = (input, data) => {
  
  const inputTry = Number(input);

  if (inputTry) {
    //Here we are gonna search for the ID (use inputTry)
    searchId(data, inputTry);
  } 
  else {
    input = input.toLowerCase(); //It also works with hyphens
    searchName(data, input);
    //console.log(input);
        //Here we are gonna search for the name
  }
}

//-----------------------
const searchId = (data, userId) => {
  const {results} = data;
  const pokemon = results.find((e) => {
    const {id} = e;
    return id === userId; // 'return' needs to be added here due to multiple lines
  });
  if(pokemon) {   
    const pokemonUrl = `${allPokemonListUrl}/${pokemon.id}`;
    fetchPokemonData(pokemonUrl);   
    }
    else {
      alert("Pokémon not found");
    }

} 

//fetchData(124);

//-----------------------
const searchName = (data, userName) => {
  const {results} = data;
  const pokemon = results.find((e) => {
    const {name} = e;
    return name === userName; // 'return' needs to be added here due to multiple lines
  });
  if (pokemon) {
const pokemonUrl = `${allPokemonListUrl}/${pokemon.name}`;
fetchPokemonData(pokemonUrl); 
  }
  else {
      alert("Pokémon not found");
  }
  
} 

//fetchData("scyther");


//-----------------------
const fetchPokemonData = async (pokemonUrl) => {
   try {
    const response = await fetch(pokemonUrl);
    const pokemonData = await response.json();
    //console.log(pokemonData); //Only to check whether the data is well-fetched
    displayResults(pokemonData); 

  } catch (err) {
    console.log(err);
  }
}

//-----------------------
const displayResults = (pokemonData) => {
  const {id, name,sprites, height, weight, stats, types} = pokemonData;
  pokemonName.innerHTML = `${name.toUpperCase()} `
  pokemonId.innerHTML = `#${id}`

  pokemonHeight.innerHTML = `Height: ${height}`
  pokemonWeight.innerHTML = ` |  Weight: ${weight}`

  pokemonImgContainer.innerHTML = `<img src="${sprites.front_default}" alt="${name}#${id}" loading="lazy">`

pokemonImgContainer.innerHTML += `<img src="${sprites.back_default}" alt="${name}#${id}" loading="lazy">`
 /* hpTag.innerHTML = 
  attackTag.innerHTML = 
  defenseTag.innerHTML = 
  spAttackTag.innerHTML = 
  spDefenseTag.innerHTML = 
  speedTag.innerHTML = 
*/
}

/* Events */
//-----------------------
searchButton.addEventListener("click", () => checkUserInput(searchInput.value)); //I reckon it would work without the arrow function if there were not a parameter
searchInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkUserInput(searchInput.value)
    //console.log("It works!!!")
  }
})


