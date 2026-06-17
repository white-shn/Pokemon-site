const apiUrl = "https://pokeapi.co/api/v2/pokemon/";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

async function checkPokemon(pokemon) {

    const response = await fetch(apiUrl + pokemon.toLowerCase());

    const data = await response.json();

    document.querySelector(".pokemon-name").innerHTML =
        data.name;

    document.querySelector(".height").innerHTML =
        data.height;

    document.querySelector(".weight").innerHTML =
        data.weight;

    document.querySelector(".pokemon-id").innerHTML =
        data.id;


    document.querySelector(".pokemon").style.display =
        "block";
}

searchBtn.addEventListener("click", () => {
    checkPokemon(searchBox.value);
});
