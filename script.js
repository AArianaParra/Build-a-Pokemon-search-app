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

  } catch (err) {
    console.log(err);
  }
}
//fetchData()

//-----------------------
//Ponerle brillito especial a los cards :)




/* Events */
//-----------------------
//searchButton.addEventListener("click", checkUserInput)
searchInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    console.log("It works!!!")
  }
})