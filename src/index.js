function generateRecipe(event) {
  event.preventDefault();

  new Typewriter("#result", {
    strings: "chicken noodle soup",
    autoStart: true,
    delay: 1,
    cursor: null,
  });
}

let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);
