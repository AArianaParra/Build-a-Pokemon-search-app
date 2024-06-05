/* Creating variables */
const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
const pokemonCard = document.getElementById("pokemon-card");
const hpTag = document.getElementById("hp-tag");
const attackTag = document.getElementById("attack-tag");
const defenseTag = document.getElementById("defense-tag");
const spAttackTag = document.getElementById("sp-attack-tag");
const spDefenseTag = document.getElementById("sp-defense-tag");
const speedTag = document.getElementById("speed-tag");
const allPokemonList = "https://pokeapi-proxy.freecodecamp.rocks/api/pokemon";

/* Functions */
//-----------------------
const checkUserInput = (input) =>  {
  const regex = [/(?:^\s+)/, /(?:\s+$)/];
  regex.map((reg) => {
    input = input.replace(reg, "");
  });
  fetchData(input)
  //return input;
}
//-----------------------
const fetchData = async (input) => {
  try {
    const response = await fetch(allPokemonList);
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
    searchId(data, input);
  }
  else {
    input = input.toLowerCase(); //It also works with hyphens
    searchName(data, input);
    console.log(input);
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
  console.log(pokemon);
} 

fetchData(124);

//-----------------------
const searchName = (data, userName) => {
  const {results} = data;
  const pokemon = results.find((e) => {
    const {name} = e;
    return name === userName; // Agrega 'return' aquí
  });
  console.log(pokemon);
} 

fetchData("scyther");
/* Events */
//-----------------------
//searchButton.addEventListener("click", checkUserInput)
searchInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    console.log("It works!!!")
  }
})


