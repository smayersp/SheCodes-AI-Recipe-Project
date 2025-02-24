function displayRecipe(response) {
  new Typewriter("#result", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: null,
  });
}
function generateRecipe(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search");
  let key = "ff75abb34ct90a06od4bb7b7d6e9f5a8";
  let context =
    "You are a high class chef with many years of experience in multiple cuisines. Your mission is to provide a recipe name with the ingredient provided and in a new paragraph provide a link to the recipe. Your answer should be easy to read, concise and short";
  let prompt = `Generate a recipe that contains ${searchInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${key}`;
  let recipeElement = document.querySelector("#result");
  recipeElement.classList.remove("hidden");
  recipeElement.innerHTML = `<div class = "generating">⌛️ Generating recipe with ${searchInput.value}</div>`;

  axios.get(apiUrl).then(displayRecipe);
}

let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);
